import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Textarea(props: ComponentProps<"textarea">) {
  const { className, ...rest } = props;
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-sm text-fg placeholder:text-muted/60 outline-none transition-smooth focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:bg-panel disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    />
  );
}

