"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Table, THead, TH, TRow, TD } from "@/components/ui/Table";
import { useToast } from "@/components/ui/Toast";

type Metrics = { total: number; byStatus: Record<string, number> };

export default function Page() {
  const toast = useToast();
  const [partnerId, setPartnerId] = useState("partner_demo");
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`/api/partner/metrics?partnerId=${encodeURIComponent(partnerId)}`);
      const json = (await res.json().catch(() => null)) as any;
      setMetrics(json?.metrics || null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rows = useMemo(() => {
    const by = metrics?.byStatus || {};
    const keys = Object.keys(by);
    return keys.map((k) => ({ status: k, count: by[k] || 0 }));
  }, [metrics]);

  async function generateLink() {
    setGeneratedLink(null);
    const res = await fetch("/api/partner/links", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ partnerId })
    });
    const json = (await res.json().catch(() => null)) as any;
    if (!res.ok) {
      toast.push({ title: "Couldn’t generate link", message: json?.error || "Please try again.", tone: "danger" });
      return;
    }
    setGeneratedLink(json?.link?.url || null);
    toast.push({ title: "Link generated", message: "This is a placeholder partner portal.", tone: "ok" });
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Partners</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Partner portal (optional scaffold)</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          This is an informational LMS scaffold. Add real partner auth, RBAC, audit logging, and compliance review flows
          before production use.
        </p>
      </div>

      <Notice tone="cab" title="Compliance guardrails">
        Partners must not claim guaranteed approval or misleading rates/timing, and must use CAB-safe terminology in all marketing.
      </Notice>

      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <div>
            <Label htmlFor="partnerId">Partner ID</Label>
            <Input id="partnerId" value={partnerId} onChange={(e) => setPartnerId(e.target.value)} />
            <p className="mt-2 text-xs text-muted">Demo-only. In production, derive this from partner auth.</p>
          </div>
          <div className="flex items-end gap-3">
            <Button variant="secondary" onClick={() => void load()} disabled={loading || !partnerId.trim()}>
              {loading ? "Refreshing…" : "Refresh metrics"}
            </Button>
            <Button onClick={generateLink} disabled={!partnerId.trim()}>
              Generate tracking link
            </Button>
          </div>
        </div>
        {generatedLink ? (
          <div className="mt-4 rounded-2xl border border-border/60 bg-bg/25 p-4">
            <p className="text-xs text-muted">Generated link (placeholder)</p>
            <p className="mt-1 break-all text-sm text-fg">{generatedLink}</p>
          </div>
        ) : null}
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Conversion funnel (placeholder)</p>
          <p className="mt-1 text-sm text-muted">Counts are mock data from `/api/partner/metrics`.</p>
          <div className="mt-4">
            {loading ? (
              <p className="text-sm text-muted">Loading…</p>
            ) : metrics ? (
              <Table>
                <THead>
                  <tr>
                    <TH>Status</TH>
                    <TH>Count</TH>
                  </tr>
                </THead>
                <tbody>
                  {rows.map((r) => (
                    <TRow key={r.status}>
                      <TD className="text-fg">{r.status}</TD>
                      <TD>{r.count}</TD>
                    </TRow>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="text-sm text-muted">No metrics yet.</p>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Payout history (placeholder)</p>
          <p className="mt-1 text-sm text-muted">In production, compute payouts from funded events and contract terms.</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              ["This month", "$0 (demo)"],
              ["Lifetime", "$0 (demo)"],
              ["Next payout", "—"],
              ["Payout method", "—"]
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-border/60 bg-bg/25 p-4">
                <p className="text-xs text-muted">{k}</p>
                <p className="mt-1 text-sm font-semibold tracking-tight">{v}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <p className="text-sm font-semibold tracking-tight">API keys (placeholder)</p>
        <p className="mt-1 text-sm text-muted">Add OAuth2/API key issuance, rotation, scopes, and audit logs in production.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            variant="secondary"
            onClick={() =>
              toast.push({ title: "API key created (placeholder)", message: "No key is issued in the LMS scaffold.", tone: "info" })
            }
          >
            Create API key
          </Button>
          <Button
            variant="tertiary"
            onClick={() =>
              toast.push({ title: "Webhooks (placeholder)", message: "Configure webhooks in `/developers`.", tone: "info" })
            }
          >
            Configure webhooks
          </Button>
        </div>
      </Card>
    </div>
  );
}

