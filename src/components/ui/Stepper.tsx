import { cn } from "@/lib/cn";

export type StepperStep = { id: string; title: string; subtitle?: string };

export function Stepper({ steps, activeId }: { steps: StepperStep[]; activeId: string }) {
  const activeIndex = Math.max(
    0,
    steps.findIndex((s) => s.id === activeId)
  );
  return (
    <ol className="flex flex-wrap gap-2">
      {steps.map((s, idx) => {
        const done = idx < activeIndex;
        const active = s.id === activeId;
        return (
          <li
            key={s.id}
            className={cn(
              "flex items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-sm",
              active ? "border-brand2/40 bg-brand2/10" : "border-border/14 bg-panel/40"
            )}
          >
            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold",
                done
                  ? "border-brand2/45 bg-brand2/10 text-fg"
                  : active
                    ? "border-brand/45 bg-brand/10"
                    : "border-border/18"
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
