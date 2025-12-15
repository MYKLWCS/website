"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = { q: string; a: ReactNode };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const id = useId();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/70 bg-panel/50">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        const contentId = `${id}-${idx}-content`;
        return (
          <div key={it.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/5"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpen(isOpen ? null : idx)}
            >
              <span className="text-sm font-medium">{it.q}</span>
              <span className={cn("text-muted transition", isOpen ? "rotate-45" : "")} aria-hidden>
                +
              </span>
            </button>
            <div
              id={contentId}
              className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden px-5 pb-5 text-sm text-muted">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
