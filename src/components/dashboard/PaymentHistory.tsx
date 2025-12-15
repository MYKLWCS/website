"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Payment {
  id: string;
  date: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  method: "bank" | "card" | "ach";
  receiptId: string;
}

interface PaymentHistoryProps {
  payments?: Payment[];
  isLoading?: boolean;
}

const mockPayments: Payment[] = [
  {
    id: "1",
    date: "Dec 14, 2025",
    amount: 215.00,
    status: "completed",
    method: "bank",
    receiptId: "REC-20251214-001"
  },
  {
    id: "2",
    date: "Nov 14, 2025",
    amount: 215.00,
    status: "completed",
    method: "ach",
    receiptId: "REC-20251114-001"
  },
  {
    id: "3",
    date: "Oct 14, 2025",
    amount: 215.00,
    status: "completed",
    method: "bank",
    receiptId: "REC-20251014-001"
  },
  {
    id: "4",
    date: "Sep 14, 2025",
    amount: 215.00,
    status: "completed",
    method: "card",
    receiptId: "REC-20250914-001"
  },
  {
    id: "5",
    date: "Aug 14, 2025",
    amount: 100.00,
    status: "completed",
    method: "bank",
    receiptId: "REC-20250814-001"
  }
];

export function PaymentHistory({
  payments = mockPayments,
  isLoading = false
}: PaymentHistoryProps) {
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterMethod, setFilterMethod] = useState<string>("all");

  const filteredPayments = payments.filter((p) => {
    if (filterStatus !== "all" && p.status !== filterStatus) return false;
    if (filterMethod !== "all" && p.method !== filterMethod) return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "ok" as const;
      case "pending":
        return "warn" as const;
      case "failed":
        return "warn" as const;
      default:
        return "default" as const;
    }
  };

  const getMethodLabel = (method: string) => {
    switch (method) {
      case "bank":
        return "Bank Account";
      case "card":
        return "Debit Card";
      case "ach":
        return "ACH Transfer";
      default:
        return method;
    }
  };

  const getTotalPaid = () => {
    return filteredPayments.reduce((sum, p) => (p.status === "completed" ? sum + p.amount : sum), 0);
  };

  return (
    <Card className="p-6">
      <h2 className="text-sm font-semibold tracking-tight">Payment History</h2>
      <p className="mt-1 text-sm text-muted">View and download receipts for all your payments</p>

      {/* Filters */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-muted">Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="mt-2 w-full h-10 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg focus:outline-none focus:ring-2 focus:ring-brand/60"
          >
            <option value="all">All Statuses</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-muted">Payment Method</label>
          <select
            value={filterMethod}
            onChange={(e) => setFilterMethod(e.target.value)}
            className="mt-2 w-full h-10 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg focus:outline-none focus:ring-2 focus:ring-brand/60"
          >
            <option value="all">All Methods</option>
            <option value="bank">Bank Account</option>
            <option value="card">Debit Card</option>
            <option value="ach">ACH Transfer</option>
          </select>
        </div>
      </div>

      {/* Summary */}
      {filterStatus === "all" && filterMethod === "all" && (
        <div className="mt-6 p-4 bg-brand/5 rounded-lg border border-brand/20">
          <div className="text-sm">
            <p className="text-muted">Total Paid</p>
            <p className="mt-1 text-2xl font-semibold">${getTotalPaid().toFixed(2)}</p>
            <p className="mt-1 text-xs text-muted">{filteredPayments.filter((p) => p.status === "completed").length} payments completed</p>
          </div>
        </div>
      )}

      {/* Payments List */}
      <div className="mt-6">
        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-sm text-muted">Loading payment history...</p>
          </div>
        ) : filteredPayments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-sm text-muted">No payments found with the selected filters</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredPayments.map((payment) => (
              <div
                key={payment.id}
                className="border border-border/40 rounded-lg p-4 hover:bg-bg/40 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-fg">${payment.amount.toFixed(2)}</span>
                      <Badge variant={getStatusColor(payment.status)}>
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted">
                      <span>{payment.date}</span>
                      <span>•</span>
                      <span>{getMethodLabel(payment.method)}</span>
                      <span>•</span>
                      <span className="font-mono">{payment.receiptId}</span>
                    </div>
                  </div>
                  <div className="ml-4 flex gap-2">
                    <Button variant="tertiary" size="sm">
                      View Receipt
                    </Button>
                    <Button variant="secondary" size="sm">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {payments.length > 10 && (
        <div className="mt-6 flex justify-between items-center text-xs text-muted">
          <span>Showing 1-{Math.min(10, filteredPayments.length)} of {filteredPayments.length}</span>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Previous
            </Button>
            <Button size="sm">1</Button>
            <Button variant="secondary" size="sm">
              Next
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
