"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = { q: string; a: ReactNode };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const id = useId();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border-2 border-border bg-white shadow-md">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        const contentId = `${id}-${idx}-content`;
        return (
          <div key={it.q} className="hover:bg-panel/20 transition-all duration-300">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-smooth hover:bg-panel/40"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpen(isOpen ? null : idx)}
            >
              <span className="text-base font-semibold tracking-tight">{it.q}</span>
              <span className={cn("text-brand text-2xl font-light transition-all duration-300", isOpen ? "rotate-45" : "")} aria-hidden>
                +
              </span>
            </button>
            <div
              id={contentId}
              className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden px-8 pb-6 pt-0 text-base text-muted leading-relaxed">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
