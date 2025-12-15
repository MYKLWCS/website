import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("py-14 md:py-20", className)} {...props} />;
}

