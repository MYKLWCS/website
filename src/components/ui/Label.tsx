import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Label(props: ComponentProps<"label">) {
  const { className, ...rest } = props;
  return <label className={cn("text-xs font-medium text-muted", className)} {...rest} />;
}

