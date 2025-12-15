"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { Table, THead, TH, TRow, TD } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { formatUsd } from "@/lib/format";

type Application = {
  id: string;
  status: string;
  requestedAmount?: number;
  estimateRange?: { low: number; high: number };
  createdAt: string;
  updatedAt: string;
};

export function ApplicationsList() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchApplications() {
      try {
        const res = await fetch("/api/applications");
        if (!res.ok) throw new Error("Failed to fetch applications");
        const json = (await res.json()) as any;
        setApplications(json.applications || []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchApplications();
  }, []);

  if (loading) {
    return (
      <Card className="p-6">
        <p className="text-sm text-muted">Loading applications…</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Notice tone="danger" title="Error loading applications">
        {error}
      </Notice>
    );
  }

  if (applications.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-sm font-semibold">No applications yet</p>
        <p className="mt-1 text-sm text-muted">Start a new CAB title access request to get an estimate.</p>
        <Link href="/dashboard/get-cash" className="mt-4 inline-block">
          <Button>Start Get Cash</Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <Table>
        <THead>
          <tr>
            <TH>Application ID</TH>
            <TH>Status</TH>
            <TH>Requested</TH>
            <TH>Estimate Range</TH>
            <TH>Updated</TH>
            <TH>Action</TH>
          </tr>
        </THead>
        <tbody>
          {applications.map((app) => (
            <TRow key={app.id}>
              <TD className="font-mono text-xs text-fg">{app.id}</TD>
              <TD>
                <StatusBadge status={app.status} />
              </TD>
              <TD>{app.requestedAmount ? formatUsd(app.requestedAmount) : "—"}</TD>
              <TD>
                {app.estimateRange
                  ? `${formatUsd(app.estimateRange.low)}–${formatUsd(app.estimateRange.high)}`
                  : "—"}
              </TD>
              <TD className="text-xs text-muted">{new Date(app.updatedAt).toLocaleDateString()}</TD>
              <TD>
                <Link href={`/dashboard/applications/${app.id}`}>
                  <Button variant="tertiary" size="sm">
                    View
                  </Button>
                </Link>
              </TD>
            </TRow>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

function StatusBadge({ status }: { status: string }) {
  const variants: Record<string, "ok" | "warn" | "default" | "brand"> = {
    draft: "default",
    in_review: "warn",
    offer_ready: "brand",
    accepted: "ok",
    signed: "ok",
    funded: "ok",
    declined: "warn",
    needs_docs: "warn"
  };

  const labels: Record<string, string> = {
    draft: "Draft",
    in_review: "In Review",
    offer_ready: "Offer Ready",
    accepted: "Accepted",
    signed: "Signed",
    funded: "Funded",
    declined: "Declined",
    needs_docs: "Needs Docs"
  };

  const variant = variants[status] || "default";
  const label = labels[status] || status.replace(/_/g, " ");

  return <Badge variant={variant}>{label}</Badge>;
}
