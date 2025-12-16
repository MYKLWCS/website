"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Notice } from "@/components/ui/Notice";
import { getMockApplications, type Application } from "@/lib/mockApplicationData";
import { useState, useMemo } from "react";

export default function Page() {
  const allApplications = getMockApplications();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const filteredApplications = useMemo(() => {
    let result = allApplications;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        app =>
          app.applicantName.toLowerCase().includes(term) ||
          app.email.toLowerCase().includes(term) ||
          app.id.toLowerCase().includes(term)
      );
    }

    if (statusFilter !== "all") {
      result = result.filter(app => app.status === statusFilter);
    }

    result.sort((a, b) => {
      if (sortBy === "date") {
        return b.createdDate.getTime() - a.createdDate.getTime();
      }
      if (sortBy === "amount") {
        return b.requestedAmount - a.requestedAmount;
      }
      return 0;
    });

    return result;
  }, [searchTerm, statusFilter, sortBy]);

  const getStatusColor = (status: string): "warn" | "brand" | "ok" | "error" | "default" => {
    const map: Record<string, "warn" | "brand" | "ok" | "error" | "default"> = {
      in_review: "warn",
      needs_docs: "warn",
      offer_ready: "brand",
      accepted: "ok",
      signed: "ok",
      funded: "ok",
      declined: "error",
      draft: "default"
    };
    return map[status] || "default";
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      draft: "Draft",
      in_review: "In Review",
      needs_docs: "Needs Docs",
      offer_ready: "Offer Ready",
      accepted: "Accepted",
      signed: "Signed",
      funded: "Funded",
      declined: "Declined"
    };
    return labels[status] || "Unknown";
  };

  const pendingDocsCount = allApplications.filter(a => a.status === "needs_docs").length;
  const offerReadyCount = allApplications.filter(a => a.status === "offer_ready").length;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Applications</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Manage all customer applications with real-time filtering and search.
        </p>
      </div>

      <Notice tone="info" title="Pipeline Status">
        {pendingDocsCount} applications awaiting documents, {offerReadyCount} ready for offers
      </Notice>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-4">
          <p className="text-xs font-medium text-muted">Pending Docs</p>
          <p className="mt-2 text-2xl font-semibold text-brand">{pendingDocsCount}</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Ready for Offer</p>
          <p className="mt-2 text-2xl font-semibold text-brand">{offerReadyCount}</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Total</p>
          <p className="mt-2 text-2xl font-semibold">{allApplications.length}</p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Search & Filter</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Input
            type="text"
            placeholder="Search by name, email, or ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-10 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg"
          >
            <option value="all">All Statuses</option>
            <option value="in_review">In Review</option>
            <option value="needs_docs">Needs Docs</option>
            <option value="offer_ready">Offer Ready</option>
            <option value="accepted">Accepted</option>
            <option value="signed">Signed</option>
            <option value="funded">Funded</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg"
          >
            <option value="date">Most Recent</option>
            <option value="amount">Highest Amount</option>
          </select>
        </div>
      </Card>

      {/* Table */}
      <Card className="p-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/40">
              <th className="px-4 py-3 text-left font-semibold">ID</th>
              <th className="px-4 py-3 text-left font-semibold">Applicant</th>
              <th className="px-4 py-3 text-left font-semibold">Amount</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Underwriter</th>
              <th className="px-4 py-3 text-left font-semibold">Date</th>
              <th className="px-4 py-3 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app.id} className="border-b border-border/20 hover:bg-bg/40">
                <td className="px-4 py-3 font-medium text-brand">{app.id}</td>
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium">{app.applicantName}</p>
                    <p className="text-xs text-muted">{app.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3 font-semibold">${app.requestedAmount}</td>
                <td className="px-4 py-3">
                  <Badge variant={getStatusColor(app.status)}>
                    {getStatusLabel(app.status)}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm">
                  {app.assignedUnderwriter || "—"}
                </td>
                <td className="px-4 py-3 text-sm text-muted">
                  {app.createdDate.toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <Button variant="tertiary" size="sm">
                    Review
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
