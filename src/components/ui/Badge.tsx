import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "default" | "brand" | "ok" | "warn";

const variants: Record<Variant, string> = {
  default: "bg-white/5 text-muted border-border/50",
  brand: "bg-brand/10 text-fg border-brand/30",
  ok: "bg-ok/10 text-fg border-ok/30",
  warn: "bg-warn/10 text-fg border-warn/30"
};

type BadgeProps = ComponentProps<"span"> & { variant?: Variant };

export function Badge({ className, variant = "default", ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-tight",
        variants[variant],
        className
      )}
      {...rest}
    />
  );
}
