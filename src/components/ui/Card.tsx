import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Card(props: ComponentProps<"div">) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/10 bg-panel/60 shadow-glow backdrop-blur-sm transition hover:border-border/20",
        className
      )}
      {...rest}
    />
  );
}
