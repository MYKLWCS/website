import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Card(props: ComponentProps<"div">) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/30 bg-white/50 shadow-lg hover:shadow-xl hover:border-border/50 transition-all backdrop-blur-sm",
        className
      )}
      {...rest}
    />
  );
}

