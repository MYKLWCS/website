"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Notice } from "@/components/ui/Notice";
import { useState, useMemo } from "react";

export default function Page() {
  const auditLogs = [
    {
      id: "LOG-001",
      timestamp: "Dec 15, 2025 2:30 PM",
      user: "James Rodriguez",
      action: "Document Approved",
      target: "APP-001 - Sarah Johnson",
      targetType: "document",
      details: "Government ID front approved",
      status: "success"
    },
    {
      id: "LOG-002",
      timestamp: "Dec 15, 2025 1:45 PM",
      user: "Maria Garcia",
      action: "Application Status Updated",
      target: "APP-003 - Jennifer Lee",
      targetType: "application",
      details: "Status changed from 'needs_docs' to 'offer_ready'",
      status: "success"
    },
    {
      id: "LOG-003",
      timestamp: "Dec 15, 2025 11:20 AM",
      user: "Admin System",
      action: "Offer Sent",
      target: "OFFER-001 - Sarah Johnson",
      targetType: "offer",
      details: "Offer generated and sent to customer email",
      status: "success"
    },
    {
      id: "LOG-004",
      timestamp: "Dec 14, 2025 4:15 PM",
      user: "Jessica Brown",
      action: "Application Created",
      target: "APP-007 - Amanda Garcia",
      targetType: "application",
      details: "New application submitted via online wizard",
      status: "success"
    },
    {
      id: "LOG-005",
      timestamp: "Dec 14, 2025 3:00 PM",
      user: "James Rodriguez",
      action: "Document Rejected",
      target: "APP-002 - Michael Chen",
      targetType: "document",
      details: "Vehicle photo rejected - image too blurry",
      status: "warning"
    },
    {
      id: "LOG-006",
      timestamp: "Dec 14, 2025 1:30 PM",
      user: "Admin System",
      action: "Login Occurred",
      target: "maria.garcia@dollarloans.com",
      targetType: "user",
      details: "Successful authentication from IP 192.168.1.105",
      status: "success"
    },
    {
      id: "LOG-007",
      timestamp: "Dec 13, 2025 5:45 PM",
      user: "James Rodriguez",
      action: "Underwriter Assigned",
      target: "APP-004 - David Martinez",
      targetType: "application",
      details: "Application assigned to underwriter for review",
      status: "success"
    },
    {
      id: "LOG-008",
      timestamp: "Dec 13, 2025 2:20 PM",
      user: "System",
      action: "Configuration Changed",
      target: "Interest Rate Rules",
      targetType: "config",
      details: "Updated interest rate floor from 16.5% to 17.0%",
      status: "warning"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredLogs = useMemo(() => {
    let result = auditLogs;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        log =>
          log.user.toLowerCase().includes(term) ||
          log.action.toLowerCase().includes(term) ||
          log.target.toLowerCase().includes(term) ||
          log.details.toLowerCase().includes(term)
      );
    }

    if (filterType !== "all") {
      result = result.filter(log => log.targetType === filterType);
    }

    return result.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }, [searchTerm, filterType]);

  const getActionColor = (action: string) => {
    if (action.includes("Rejected") || action.includes("Error")) return "error";
    if (action.includes("Configuration") || action.includes("Changed")) return "warn";
    return "ok";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "application":
        return "📋";
      case "document":
        return "📄";
      case "offer":
        return "💰";
      case "user":
        return "👤";
      case "config":
        return "⚙️";
      default:
        return "📌";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Audit Log</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Comprehensive audit trail of all system activities. Required for compliance and regulatory reporting.
        </p>
      </div>

      <Notice tone="info" title="Compliance & Audit">
        All user actions, document reviews, and system changes are logged with timestamps and user identities. This log is required for CAB compliance audits.
      </Notice>

      {/* Search & Filter */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Search & Filter</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Input
            type="text"
            placeholder="Search by user, action, application, or details"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="h-10 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg"
          >
            <option value="all">All Event Types</option>
            <option value="application">Applications</option>
            <option value="document">Documents</option>
            <option value="offer">Offers</option>
            <option value="user">User Actions</option>
            <option value="config">Configuration</option>
          </select>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Total Events</p>
          <p className="mt-2 text-2xl font-semibold">{auditLogs.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Last 24 Hours</p>
          <p className="mt-2 text-2xl font-semibold">{auditLogs.filter(l => l.id.match(/LOG-00[1-5]/)).length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Active Users</p>
          <p className="mt-2 text-2xl font-semibold">3</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Failed Actions</p>
          <p className="mt-2 text-2xl font-semibold text-danger">0</p>
        </Card>
      </div>

      {/* Audit Log Timeline */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Activity Log</h2>
        <p className="mt-1 text-sm text-muted">Showing {filteredLogs.length} events</p>

        <div className="mt-4 space-y-3">
          {filteredLogs.map((log) => (
            <div key={log.id} className="border border-border/40 rounded-lg p-4 hover:bg-bg/40 transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-lg">{getTypeIcon(log.targetType)}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-sm">{log.action}</p>
                      <p className="text-xs text-muted mt-1">
                        <span className="font-medium">{log.user}</span> • {log.timestamp}
                      </p>
                      <p className="text-sm text-fg mt-2">{log.target}</p>
                    </div>
                    <Badge variant={getActionColor(log.action)}>
                      {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted mt-2 bg-bg/25 p-2 rounded border border-border/20">
                    {log.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Export Options */}
      <Card className="p-6 border-brand2/30 bg-brand2/5">
        <h2 className="text-sm font-semibold tracking-tight text-brand2">Export Audit Log</h2>
        <p className="mt-1 text-sm text-muted">Download audit logs for external audits and compliance reporting</p>
        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 bg-brand2 text-bg rounded-lg text-sm font-medium hover:brightness-110 transition-colors">
            Export as CSV
          </button>
          <button className="px-4 py-2 bg-brand2 text-bg rounded-lg text-sm font-medium hover:brightness-110 transition-colors">
            Export as PDF
          </button>
          <button className="px-4 py-2 border border-border/70 text-fg rounded-lg text-sm font-medium hover:bg-panel transition-colors">
            Email Report
          </button>
        </div>
      </Card>
    </div>
  );
}
