import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Input(props: ComponentProps<"input">) {
  const { className, ...rest } = props;
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-border bg-white px-4 text-sm text-fg placeholder:text-muted/60 outline-none transition-smooth focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:bg-panel disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    />
  );
}

