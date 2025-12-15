import { cn } from "@/lib/cn";

export type TimelineItem = { title: string; detail: string; status: "done" | "active" | "todo" };

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-3">
      {items.map((it) => (
        <li key={it.title} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold",
              it.status === "done"
                ? "border-ok/50 bg-ok/10"
                : it.status === "active"
                  ? "border-brand/50 bg-brand/10"
                  : "border-border/60 bg-panel/30"
            )}
            aria-hidden
          >
            {it.status === "done" ? "✓" : "•"}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-tight">{it.title}</p>
            <p className="mt-1 text-sm text-muted">{it.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

