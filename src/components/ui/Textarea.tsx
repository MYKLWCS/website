import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Textarea(props: ComponentProps<"textarea">) {
  const { className, ...rest } = props;
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-y rounded-xl border border-border/70 bg-bg/40 px-3 py-2 text-sm text-fg placeholder:text-muted/70 outline-none transition focus:border-brand/60 focus:ring-2 focus:ring-brand/30",
        className
      )}
      {...rest}
    />
  );
}

