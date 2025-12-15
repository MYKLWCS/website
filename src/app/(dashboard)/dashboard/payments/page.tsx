"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { formatUsd } from "@/lib/format";
import { track } from "@/lib/analytics";
import { useToast } from "@/components/ui/Toast";
import { Table, THead, TH, TRow, TD } from "@/components/ui/Table";

export default function Page() {
  const toast = useToast();
  const [tab, setTab] = useState<"pay" | "schedule" | "autopay" | "history">("pay");
  const [amount, setAmount] = useState(215);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<Array<{ id: string; amount: number; status: string; method: string; timestamp: string }>>([]);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [scheduledDate, setScheduledDate] = useState(() => new Date(Date.now() + 3 * 24 * 3600 * 1000).toISOString().slice(0, 10));
  const [autopayEnabled, setAutopayEnabled] = useState(false);

  useEffect(() => void track("funding_status_view", { view: "payments" }), []);

  useEffect(() => {
    (async () => {
      setLoadingHistory(true);
      try {
        const res = await fetch("/api/payments", { method: "GET" });
        if (!res.ok) return;
        const json = (await res.json()) as any;
        setHistory(Array.isArray(json.payments) ? json.payments : []);
      } finally {
        setLoadingHistory(false);
      }
    })();
  }, []);

  async function payNow() {
    setLoading(true);
    try {
      await track("payment_initiated", { amount });
      await new Promise((r) => setTimeout(r, 550));
      await track("payment_success", { amount });
      toast.push({ title: "Payment submitted (stub)", message: "Receipt generation is a placeholder in V1.", tone: "ok" });
      await fetch("/api/payments", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ amount, method: "bank" }) });
      const res = await fetch("/api/payments", { method: "GET" });
      const json = (await res.json().catch(() => null)) as any;
      if (json?.payments) setHistory(json.payments);
    } finally {
      setLoading(false);
    }
  }

  const sortedHistory = useMemo(() => {
    return history
      .slice()
      .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
      .slice(0, 20);
  }, [history]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Payments</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Make a payment</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Pay now, schedule, or enable autopay (placeholders). Payments are applied to your agreement schedule.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          ["pay", "Pay now"],
          ["schedule", "Schedule"],
          ["autopay", "Autopay"],
          ["history", "History"]
        ].map(([k, label]) => (
          <button
            key={k}
            type="button"
            className={
              "rounded-xl border px-3 py-2 text-sm transition " +
              (tab === (k as any) ? "border-brand/50 bg-brand/10 text-fg" : "border-border/60 bg-panel/40 text-muted hover:bg-panel/60")
            }
            onClick={() => setTab(k as any)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "pay" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Pay now</p>
          <p className="mt-1 text-sm text-muted">V1 stub: simulates a payment submission.</p>
          <div className="mt-4">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" inputMode="numeric" value={String(amount)} onChange={(e) => setAmount(Number(e.target.value || 0))} />
            <p className="mt-2 text-xs text-muted">You are submitting {formatUsd(amount)}.</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button disabled={loading || amount <= 0} onClick={payNow}>
              {loading ? "Submitting…" : "Pay now"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setTab("autopay");
              }}
            >
              Autopay
            </Button>
          </div>
          <div className="mt-5">
            <Notice tone="cab" title="Transparency">
              Payment schedules and total costs are disclosed in your agreement documents. If you have questions about fee categories, see the Rates & Fees page.
            </Notice>
          </div>
        </Card>
      ) : null}

      {tab === "schedule" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Schedule a payment (placeholder)</p>
          <p className="mt-1 text-sm text-muted">In production, implement scheduling rules, cutoffs, and notifications.</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="scheduledDate">Date</Label>
              <Input id="scheduledDate" type="date" value={scheduledDate} onChange={(e) => setScheduledDate(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="scheduledAmount">Amount</Label>
              <Input id="scheduledAmount" inputMode="numeric" value={String(amount)} onChange={(e) => setAmount(Number(e.target.value || 0))} />
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              variant="secondary"
              onClick={() =>
                toast.push({
                  title: "Payment scheduled (placeholder)",
                  message: `Scheduled ${formatUsd(amount)} for ${scheduledDate}.`,
                  tone: "ok"
                })
              }
            >
              Schedule payment
            </Button>
            <Button variant="tertiary" onClick={() => setTab("history")}>
              View history
            </Button>
          </div>
        </Card>
      ) : null}

      {tab === "autopay" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Autopay (placeholder)</p>
          <p className="mt-1 text-sm text-muted">
            In production, autopay requires an ACH mandate, bank verification, and clear cancellation terms.
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-border/60 bg-bg/25 p-5">
            <input
              type="checkbox"
              className="mt-1"
              checked={autopayEnabled}
              onChange={(e) => setAutopayEnabled(e.target.checked)}
            />
            <div>
              <p className="text-sm font-semibold tracking-tight">Enable autopay</p>
              <p className="mt-1 text-sm text-muted">Demo toggle only — no mandates are created in this LMS scaffold.</p>
            </div>
          </div>
          <div className="mt-5">
            <Notice tone="warn" title="Demo environment">
              Do not enter bank account numbers here. The banking step in Get Cash is also demo-only.
            </Notice>
          </div>
        </Card>
      ) : null}

      {tab === "history" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Receipts & history</p>
          <p className="mt-1 text-sm text-muted">Latest payments (mock API).</p>
          <div className="mt-4">
            {loadingHistory ? (
              <p className="text-sm text-muted">Loading…</p>
            ) : sortedHistory.length ? (
              <Table>
                <THead>
                  <tr>
                    <TH>Timestamp</TH>
                    <TH>Amount</TH>
                    <TH>Method</TH>
                    <TH>Status</TH>
                  </tr>
                </THead>
                <tbody>
                  {sortedHistory.map((p) => (
                    <TRow key={p.id}>
                      <TD className="text-fg">{new Date(p.timestamp).toLocaleString()}</TD>
                      <TD className="text-fg">{formatUsd(p.amount)}</TD>
                      <TD>{p.method}</TD>
                      <TD>{p.status}</TD>
                    </TRow>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="text-sm text-muted">No payments yet.</p>
            )}
          </div>
        </Card>
      ) : null}
    </div>
  );
}
