"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";
import { track } from "@/lib/analytics";
import { PaymentForm } from "@/components/dashboard/PaymentForm";
import { PaymentHistory } from "@/components/dashboard/PaymentHistory";
import { AutopaySetup } from "@/components/dashboard/AutopaySetup";
import { ButtonLink } from "@/components/ui/Button";

export default function Page() {
  const [payments, setPayments] = useState<any[]>([]);
  const [loadingPayments, setLoadingPayments] = useState(true);

  useEffect(() => void track("funding_status_view", { view: "payments" }), []);

  const refreshPayments = useCallback(async () => {
    setLoadingPayments(true);
    try {
      const res = await fetch("/api/payments", { method: "GET" });
      if (!res.ok) return;
      const json = (await res.json().catch(() => null)) as any;
      setPayments(Array.isArray(json?.payments) ? json.payments : []);
    } finally {
      setLoadingPayments(false);
    }
  }, []);

  useEffect(() => {
    void refreshPayments();
  }, [refreshPayments]);

  const historyForUi = useMemo(() => {
    return payments.map((p) => ({
      id: String(p.id),
      timestamp: String(p.timestamp),
      amount: Number(p.amount || 0),
      status: String(p.status) as any,
      method: String(p.method) as any,
      receiptId: String(p.id)
    }));
  }, [payments]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Payments</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Payments & autopay</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">Submit a payment, review history, and manage autopay (demo).</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <PaymentForm
            dueAmount={215}
            onPaymentCreated={async () => {
              await refreshPayments();
            }}
          />
          <Notice tone="cab" title="Transparency">
            Payment schedules and total costs are disclosed in your agreement documents. If you have questions about fee categories, see{" "}
            <ButtonLink href="/rates-fees" variant="tertiary" size="sm">
              Rates & Fees
            </ButtonLink>
            .
          </Notice>
          <Card className="p-6">
            <p className="text-sm font-semibold tracking-tight">Scheduling (coming soon)</p>
            <p className="mt-1 text-sm text-muted">
              Scheduling requires cutoff times, cancellation rules, and notifications. This will be built when the payment processor integration lands.
            </p>
          </Card>
        </div>
        <div className="space-y-6">
          <PaymentHistory payments={historyForUi} isLoading={loadingPayments} />
          <AutopaySetup />
        </div>
      </div>
    </div>
  );
}
