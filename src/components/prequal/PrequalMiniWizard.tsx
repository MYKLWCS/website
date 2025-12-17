"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";
import { formatUsd } from "@/lib/format";
import { useToast } from "@/components/ui/Toast";
import { track } from "@/lib/analytics";

type PrequalPayload = {
  desiredAmount: number;
  year: string;
  make: string;
  model: string;
  mileage: number;
  condition: "excellent" | "good" | "fair";
};

type PrequalResult = {
  estimateLow: number;
  estimateHigh: number;
  notes: string[];
};

export function PrequalMiniWizard() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PrequalResult | null>(null);
  const [form, setForm] = useState<PrequalPayload>({
    desiredAmount: 1200,
    year: "2016",
    make: "Toyota",
    model: "Camry",
    mileage: 108000,
    condition: "good"
  });

  const canSubmit = useMemo(() => {
    return (
      Number.isFinite(form.desiredAmount) &&
      form.desiredAmount > 0 &&
      form.year.trim().length >= 4 &&
      form.make.trim().length >= 2 &&
      form.model.trim().length >= 1 &&
      Number.isFinite(form.mileage) &&
      form.mileage >= 0
    );
  }, [form]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      await track("prequal_start", { source: "home" });
      const res = await fetch("/api/prequal", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Pre-qualify failed");
      const json = (await res.json()) as PrequalResult;
      setResult(json);
      await track("prequal_complete", { source: "home" });
      toast.push({
        title: "Estimate ready",
        message: "This is a range only — continue to secure your offer in the portal.",
        tone: "ok"
      });
    } catch {
      toast.push({ title: "Couldn’t generate an estimate", message: "Please try again.", tone: "danger" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="relative overflow-hidden p-10 bg-white shadow-xl border-2 border-border/50">
      <div className="relative">
        <div className="mb-10">
          <h2 className="text-4xl font-black tracking-tight text-fg mb-3">
            Get Your Cash Estimate
          </h2>
          <p className="text-lg text-muted font-medium">
            See your loan amount in 10 seconds. No credit check.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Amount - Large & Prominent */}
          <div>
            <Label htmlFor="desiredAmount" className="text-sm font-bold text-fg mb-3 block">
              How much do you need?
            </Label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-black text-brand">$</span>
              <Input
                id="desiredAmount"
                inputMode="numeric"
                value={String(form.desiredAmount)}
                onChange={(e) => setForm((p) => ({ ...p, desiredAmount: Number(e.target.value || 0) }))}
                className="pl-12 text-2xl font-bold h-16 border-2 hover:border-brand/40 focus:border-brand transition-colors"
                placeholder="1,200"
              />
            </div>
          </div>

          {/* Vehicle Info - Minimal Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="year" className="text-sm font-bold text-fg mb-2 block">Year</Label>
              <Input
                id="year"
                value={form.year}
                onChange={(e) => setForm((p) => ({ ...p, year: e.target.value }))}
                className="h-12 border-2 hover:border-brand/40 focus:border-brand transition-colors"
                placeholder="2016"
              />
            </div>
            <div>
              <Label htmlFor="mileage" className="text-sm font-bold text-fg mb-2 block">Mileage</Label>
              <Input
                id="mileage"
                inputMode="numeric"
                value={String(form.mileage)}
                onChange={(e) => setForm((p) => ({ ...p, mileage: Number(e.target.value || 0) }))}
                className="h-12 border-2 hover:border-brand/40 focus:border-brand transition-colors"
                placeholder="108,000"
              />
            </div>
            <div>
              <Label htmlFor="make" className="text-sm font-bold text-fg mb-2 block">Make</Label>
              <Input
                id="make"
                value={form.make}
                onChange={(e) => setForm((p) => ({ ...p, make: e.target.value }))}
                className="h-12 border-2 hover:border-brand/40 focus:border-brand transition-colors"
                placeholder="Toyota"
              />
            </div>
            <div>
              <Label htmlFor="model" className="text-sm font-bold text-fg mb-2 block">Model</Label>
              <Input
                id="model"
                value={form.model}
                onChange={(e) => setForm((p) => ({ ...p, model: e.target.value }))}
                className="h-12 border-2 hover:border-brand/40 focus:border-brand transition-colors"
                placeholder="Camry"
              />
            </div>
          </div>

          {/* Condition - Clean Buttons */}
          <div>
            <Label className="text-sm font-bold text-fg mb-3 block">Condition</Label>
            <div className="grid grid-cols-3 gap-3">
              {(["excellent", "good", "fair"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  className={
                    "rounded-xl border-2 py-4 text-sm font-bold transition-all " +
                    (form.condition === v
                      ? "border-brand bg-brand text-white shadow-lg"
                      : "border-border bg-white text-muted hover:border-brand/60")
                  }
                  onClick={() => setForm((p) => ({ ...p, condition: v }))}
                >
                  {v[0].toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* CTA - Bold & Clear */}
          <Button
            disabled={!canSubmit || loading}
            type="submit"
            className="w-full h-16 text-xl font-black shadow-2xl"
          >
            {loading ? "Calculating..." : "See My Estimate →"}
          </Button>

          <p className="text-xs text-center text-muted">
            Estimate only. Not a guarantee. No credit check required.
          </p>
        </form>

        {result ? (
          <div className="mt-10 p-10 rounded-3xl bg-gradient-to-br from-panel to-white border-2 border-border shadow-2xl">
            {/* Clean Result Display */}
            <div className="text-center mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-muted mb-4">Your Loan Estimate</p>
              <p className="text-6xl font-black bg-gradient-to-r from-brand to-brand2 bg-clip-text text-transparent mb-2">
                {formatUsd(result.estimateLow)} – {formatUsd(result.estimateHigh)}
              </p>
              <p className="text-base text-muted font-semibold">Based on your vehicle</p>
            </div>

            {/* Simple Notes */}
            <div className="space-y-3 mb-8">
              {result.notes.map((n) => (
                <div key={n} className="flex items-start gap-3 text-sm text-muted bg-white p-4 rounded-xl border border-border/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0"></div>
                  <p>{n}</p>
                </div>
              ))}
            </div>

            {/* Clean CTA */}
            <Button className="w-full h-14 text-lg font-bold shadow-xl">
              Continue Application →
            </Button>

            <p className="text-xs text-center text-muted mt-4">
              Estimate only. Not a commitment to extend credit.
            </p>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
