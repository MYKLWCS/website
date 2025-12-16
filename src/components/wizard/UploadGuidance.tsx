import { cn } from "@/lib/cn";

export function UploadGuidanceCard({
  title,
  subtitle,
  frameLabel,
  className
}: {
  title: string;
  subtitle: string;
  frameLabel: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-border/70 bg-panel/40 p-5", className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold tracking-tight">{title}</p>
          <p className="mt-1 text-sm text-muted">{subtitle}</p>
        </div>
        <div className="h-10 w-10 rounded-xl border border-border/60 bg-white/5" />
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-bg/25 p-4">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/60 bg-panel">
          <div className="absolute inset-3 rounded-lg border border-dashed border-border/70" />
          <div className="absolute bottom-3 left-3 rounded-full border border-border/60 bg-bg/40 px-3 py-1 text-xs text-muted">
            {frameLabel}
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted">
        Tip: Use good lighting, avoid glare, keep text legible. Uploads are reviewed as part of verification.
      </p>
    </div>
  );
}

