"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";
import { formatUsd } from "@/lib/format";
import { track } from "@/lib/analytics";

export function CalculatorWidget() {
  const [year, setYear] = useState("2017");
  const [make, setMake] = useState("Toyota");
  const [model, setModel] = useState("Camry");
  const [mileage, setMileage] = useState(104000);
  const [condition, setCondition] = useState<"excellent" | "good" | "fair">("good");
  const [desired, setDesired] = useState(1500);
  const [term, setTerm] = useState<"3" | "6" | "9">("6");

  const estimate = useMemo(() => {
    const base = Math.min(4200, Math.max(600, 2500 - mileage * 0.005));
    const conditionAdj = condition === "excellent" ? 1.15 : condition === "fair" ? 0.82 : 1;
    const center = base * conditionAdj;
    const low = Math.max(300, Math.round(center * 0.55));
    const high = Math.max(low + 250, Math.round(center * 1.08));
    return { low: Math.min(low, desired > 0 ? desired : low), high: Math.max(high, desired > 0 ? desired : high) };
  }, [mileage, condition, desired]);

  const paymentPreview = useMemo(() => {
    const months = Number(term);
    const principal = Math.max(300, Math.min(desired || estimate.low, estimate.high));
    const exampleFees = Math.round(principal * 0.26);
    const totalExample = principal + exampleFees;
    const monthly = Math.round(totalExample / months);
    return { principal, exampleFees, totalExample, monthly, months };
  }, [term, desired, estimate.low, estimate.high]);

  return (
    <Card className="p-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Calculator</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">Estimate range + education (not a guarantee)</h2>
          <p className="mt-1 text-sm text-muted">Use this to understand what affects your estimate and cost categories.</p>
        </div>
        <Button
          onClick={() => {
            void track("prequal_start", { source: "calculator" });
            window.location.assign("/#prequal");
          }}
        >
          Lock your estimate
        </Button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="year">Vehicle year</Label>
          <Input id="year" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="mileage">Mileage</Label>
          <Input id="mileage" inputMode="numeric" value={String(mileage)} onChange={(e) => setMileage(Number(e.target.value || 0))} />
        </div>
        <div>
          <Label htmlFor="make">Make</Label>
          <Input id="make" value={make} onChange={(e) => setMake(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="model">Model</Label>
          <Input id="model" value={model} onChange={(e) => setModel(e.target.value)} />
        </div>

        <div className="md:col-span-2">
          <Label>Condition</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(["excellent", "good", "fair"] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={
                  "rounded-xl border px-3 py-2 text-sm transition " +
                  (condition === v
                    ? "border-brand/50 bg-brand/10 text-fg"
                    : "border-border/60 bg-panel/40 text-muted hover:bg-panel/60")
                }
                onClick={() => setCondition(v)}
              >
                {v[0].toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="desired">Desired amount</Label>
          <Input id="desired" inputMode="numeric" value={String(desired)} onChange={(e) => setDesired(Number(e.target.value || 0))} />
        </div>
        <div>
          <Label>Term scenario (example)</Label>
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
        <Notice tone="cab" title="Estimated access range (not guaranteed)">
          <p className="mt-1 text-base">
            {formatUsd(estimate.low)}–{formatUsd(estimate.high)}
          </p>
          <p className="mt-2 text-sm text-muted">
            Based on inputs: {year} {make} {model}, {mileage.toLocaleString()} miles, {condition}.
          </p>
        </Notice>
        <Notice tone="info" title="Estimated payment preview (example)">
          <p className="mt-1 text-sm text-muted">
            This view uses placeholder fee assumptions for education only.
          </p>
          <div className="mt-3 space-y-1 text-sm">
            <p>
              Amount (example): <span className="text-fg font-semibold">{formatUsd(paymentPreview.principal)}</span>
            </p>
            <p>
              Example fees: <span className="text-fg font-semibold">{formatUsd(paymentPreview.exampleFees)}</span>
            </p>
            <p>
              Total (example): <span className="text-fg font-semibold">{formatUsd(paymentPreview.totalExample)}</span>
            </p>
            <p>
              Per month (example): <span className="text-fg font-semibold">{formatUsd(paymentPreview.monthly)}</span> for{" "}
              {paymentPreview.months} months
            </p>
          </div>
        </Notice>
      </div>

      <div className="mt-5">
        <CabMicrocopy variant="estimate" />
      </div>
    </Card>
  );
}

