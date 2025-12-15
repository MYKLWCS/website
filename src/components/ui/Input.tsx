import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Input(props: ComponentProps<"input">) {
  const { className, ...rest } = props;
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-border/70 bg-bg/40 px-3 text-sm text-fg placeholder:text-muted/70 outline-none transition focus:border-brand/60 focus:ring-2 focus:ring-brand/30",
        className
      )}
      {...rest}
    />
  );
}

