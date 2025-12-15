import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type Tone = "info" | "cab" | "warn" | "danger";

const tones: Record<Tone, string> = {
  info: "border-blue-200 bg-blue-50",
  cab: "border-pink-200 bg-pink-50",
  warn: "border-orange-200 bg-orange-50",
  danger: "border-red-200 bg-red-50"
};

export function Notice({
  tone = "info",
  ...props
}: ComponentProps<"div"> & { tone?: Tone; title?: string }) {
  const { className, title, children, ...rest } = props as any;
  const titleColors: Record<Tone, string> = {
    info: "text-blue-900",
    cab: "text-pink-900",
    warn: "text-orange-900",
    danger: "text-red-900"
  };
  return (
    <div className={cn("rounded-2xl border p-4", tones[tone], className)} {...rest}>
      {title ? <p className={cn("text-sm font-semibold", titleColors[tone])}>{title}</p> : null}
      <div className={cn("text-sm text-muted", title ? "mt-2" : "")}>{children}</div>
    </div>
  );
}

