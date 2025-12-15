import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
      <table className={cn("w-full min-w-[640px] text-left text-sm", className)} {...props} />
    </div>
  );
}

export function THead(props: ComponentProps<"thead">) {
  return <thead className="bg-panel/50 text-xs uppercase tracking-widest text-muted" {...props} />;
}

export function TRow(props: ComponentProps<"tr">) {
  return <tr className="border-t border-border transition-smooth hover:bg-panel/30" {...props} />;
}

export function TH(props: ComponentProps<"th">) {
  return <th className="px-4 py-3 font-semibold" {...props} />;
}

export function TD(props: ComponentProps<"td">) {
  return <td className="px-4 py-3 text-muted" {...props} />;
}

