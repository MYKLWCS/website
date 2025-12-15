import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Card(props: ComponentProps<"div">) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-white shadow-sm transition-smooth hover:border-border hover:shadow-md",
        className
      )}
      {...rest}
    />
  );
}
