import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type Tone = "info" | "cab" | "warn" | "danger";

const tones: Record<Tone, string> = {
  info: "border-border bg-white shadow-sm",
  cab: "border-brand/40 bg-brand/5",
  warn: "border-warn/40 bg-warn/5",
  danger: "border-danger/40 bg-danger/5"
};

export function Notice({
  tone = "info",
  ...props
}: ComponentProps<"div"> & { tone?: Tone; title?: string }) {
  const { className, title, children, ...rest } = props as any;
  const titleColors: Record<Tone, string> = {
    info: "text-fg",
    cab: "text-fg",
    warn: "text-fg",
    danger: "text-fg"
  };
  return (
    <div className={cn("rounded-2xl border p-4 backdrop-blur-sm", tones[tone], className)} {...rest}>
      {title ? <p className={cn("text-sm font-semibold", titleColors[tone])}>{title}</p> : null}
      <div className={cn("text-sm text-muted", title ? "mt-2" : "")}>{children}</div>
    </div>
  );
}
