import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type Tone = "info" | "cab" | "warn" | "danger";

const tones: Record<Tone, string> = {
  info: "border-border/70 bg-panel/55",
  cab: "border-brand/40 bg-brand/10",
  warn: "border-warn/40 bg-warn/10",
  danger: "border-danger/40 bg-danger/10"
};

export function Notice({
  tone = "info",
  ...props
}: ComponentProps<"div"> & { tone?: Tone; title?: string }) {
  const { className, title, children, ...rest } = props as any;
  return (
    <div className={cn("rounded-2xl border p-4", tones[tone], className)} {...rest}>
      {title ? <p className="text-sm font-medium">{title}</p> : null}
      <div className={cn("text-sm text-muted", title ? "mt-1" : "")}>{children}</div>
    </div>
  );
}

