import { Card } from "@/components/ui/Card";
import { formatUsd } from "@/lib/format";

export function FeeBreakdown({
  items,
  disclaimer
}: {
  items: Array<{ label: string; amount: number }>;
  disclaimer?: string;
}) {
  const total = items.reduce((sum, i) => sum + i.amount, 0);
  return (
    <Card className="p-6">
      <p className="text-sm font-semibold tracking-tight">Cost categories (example)</p>
      <p className="mt-1 text-sm text-muted">
        This is a category view for transparency; exact terms are shown in disclosures before signing.
      </p>
      <div className="mt-4 space-y-2">
        {items.map((i) => (
          <div key={i.label} className="flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-bg/25 px-4 py-3">
            <p className="text-sm text-muted">{i.label}</p>
            <p className="text-sm font-semibold tracking-tight text-fg">{formatUsd(i.amount)}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-panel/50 px-4 py-3">
        <p className="text-sm font-semibold tracking-tight">Total (example)</p>
        <p className="text-sm font-semibold tracking-tight">{formatUsd(total)}</p>
      </div>
      <p className="mt-3 text-xs text-muted">{disclaimer || "Examples only. Not a promise or a guarantee."}</p>
    </Card>
  );
}

