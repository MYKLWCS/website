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
    <Card className="relative overflow-hidden p-5">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="grid-glow absolute inset-0" />
      </div>
      <div className="relative">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Pre-Qualify</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight">Get an instant estimate range</h2>
            <p className="mt-1 text-sm text-muted">
              Texas CAB vehicle title access-to-credit — fast, transparent, and disclosure-first.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <Label htmlFor="desiredAmount">Desired amount</Label>
            <Input
              id="desiredAmount"
              inputMode="numeric"
              value={String(form.desiredAmount)}
              onChange={(e) => setForm((p) => ({ ...p, desiredAmount: Number(e.target.value || 0) }))}
            />
          </div>
          <div>
            <Label htmlFor="year">Year</Label>
            <Input id="year" value={form.year} onChange={(e) => setForm((p) => ({ ...p, year: e.target.value }))} />
          </div>
          <div>
            <Label htmlFor="mileage">Mileage</Label>
            <Input
              id="mileage"
              inputMode="numeric"
              value={String(form.mileage)}
              onChange={(e) => setForm((p) => ({ ...p, mileage: Number(e.target.value || 0) }))}
            />
          </div>
          <div>
            <Label htmlFor="make">Make</Label>
            <Input id="make" value={form.make} onChange={(e) => setForm((p) => ({ ...p, make: e.target.value }))} />
          </div>
          <div>
            <Label htmlFor="model">Model</Label>
            <Input id="model" value={form.model} onChange={(e) => setForm((p) => ({ ...p, model: e.target.value }))} />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="condition">Condition (quick)</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["excellent", "good", "fair"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  className={
                    "rounded-xl border px-3 py-2 text-sm transition " +
                    (form.condition === v
                      ? "border-brand/50 bg-brand/10 text-fg"
                      : "border-border/60 bg-panel/40 text-muted hover:bg-panel/60")
                  }
                  onClick={() => setForm((p) => ({ ...p, condition: v }))}
                >
                  {v[0].toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-3">
            <Button disabled={!canSubmit || loading} type="submit" className="w-full">
              {loading ? "Checking estimate…" : "Get Cash estimate"}
            </Button>
            <CabMicrocopy variant="estimate" />
          </div>
        </form>

        {result ? (
          <div className="mt-5">
            <Notice tone="cab" title="Estimate range (not guaranteed)">
              <p className="mt-1">
                Estimated access range:{" "}
                <span className="font-semibold text-fg">
                  {formatUsd(result.estimateLow)}–{formatUsd(result.estimateHigh)}
                </span>
              </p>
              <ul className="mt-2 list-disc pl-5">
                {result.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Notice>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
