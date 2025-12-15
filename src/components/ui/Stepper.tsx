import { cn } from "@/lib/cn";

export type StepperStep = { id: string; title: string; subtitle?: string };

export function Stepper({ steps, activeId }: { steps: StepperStep[]; activeId: string }) {
  const activeIndex = Math.max(
    0,
    steps.findIndex((s) => s.id === activeId)
  );
  return (
    <ol className="flex flex-wrap gap-3">
      {steps.map((s, idx) => {
        const done = idx < activeIndex;
        const active = s.id === activeId;
        return (
          <li
            key={s.id}
            className={cn(
              "flex items-center gap-3 rounded-2xl border px-4 py-3",
              active ? "border-brand/50 bg-brand/10" : "border-border/60 bg-panel/40"
            )}
          >
            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold",
                done ? "border-ok/50 bg-ok/10 text-fg" : active ? "border-brand/50 bg-brand/10" : "border-border/60"
              )}
            >
              {done ? "✓" : idx + 1}
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold tracking-tight">{s.title}</p>
              {s.subtitle ? <p className="truncate text-xs text-muted">{s.subtitle}</p> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

