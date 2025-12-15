"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Notice } from "@/components/ui/Notice";
import { formatUsd } from "@/lib/format";

export function EstimatedPaymentsToggle() {
  const [amount, setAmount] = useState(1500);
  const [term, setTerm] = useState<"3" | "6" | "9">("6");

  const preview = useMemo(() => {
    const months = Number(term);
    const principal = Math.max(300, Math.min(20000, amount || 0));
    const exampleFees = Math.round(principal * 0.26);
    const totalExample = principal + exampleFees;
    const perMonth = Math.max(1, Math.round(totalExample / months));
    return { principal, exampleFees, totalExample, perMonth, months };
  }, [amount, term]);

  return (
    <Card className="p-6">
      <p className="text-sm font-semibold tracking-tight">Estimated payments view (example)</p>
      <p className="mt-1 text-sm text-muted">
        This is a toggleable education view using placeholder assumptions. Your actual disclosures and agreement documents
        control.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="amount">Example amount</Label>
          <Input
            id="amount"
            inputMode="numeric"
            value={String(amount)}
            onChange={(e) => setAmount(Number(e.target.value || 0))}
          />
        </div>
        <div>
          <Label>Term scenario</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(["3", "6", "9"] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={
                  "rounded-xl border px-3 py-2 text-sm transition " +
                  (term === v ? "border-brand/50 bg-brand/10 text-fg" : "border-border/60 bg-panel/40 text-muted hover:bg-panel/60")
                }
                onClick={() => setTerm(v)}
              >
                {v} mo
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Notice tone="warn" title="Example-only, not a promise">
          Approval and terms are not guaranteed. This preview uses placeholder assumptions to help you understand categories.
        </Notice>
        <div className="rounded-2xl border border-border/60 bg-bg/25 p-5">
          <p className="text-xs text-muted">Example breakdown</p>
          <div className="mt-3 space-y-1 text-sm">
            <p>
              Amount: <span className="font-semibold text-fg">{formatUsd(preview.principal)}</span>
            </p>
            <p>
              Example fees: <span className="font-semibold text-fg">{formatUsd(preview.exampleFees)}</span>
            </p>
            <p>
              Total (example): <span className="font-semibold text-fg">{formatUsd(preview.totalExample)}</span>
            </p>
            <p>
              Per month (example): <span className="font-semibold text-fg">{formatUsd(preview.perMonth)}</span> for {preview.months} months
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

