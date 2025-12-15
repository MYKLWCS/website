"use client";

import { useMemo, useState } from "react";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Card } from "@/components/ui/Card";

type Category = "CAB model" | "Estimates" | "Documents" | "Payments" | "General";

type CategorizedItem = AccordionItem & { category: Category; keywords: string[] };

const ITEMS: CategorizedItem[] = [
  {
    category: "CAB model",
    q: "Are you a lender?",
    a: "No. Dollar Loans is a Texas Credit Access Business (CAB) that facilitates access to credit. A third-party creditor may extend credit if approved.",
    keywords: ["cab", "lender", "creditor", "model"]
  },
  {
    category: "Estimates",
    q: "Is approval guaranteed?",
    a: "No. Estimates and pre-qualification are not guarantees. Final terms depend on verification, eligibility, and required disclosures.",
    keywords: ["approval", "guarantee", "estimate"]
  },
  {
    category: "Estimates",
    q: "What affects my estimate range?",
    a: "Vehicle year/mileage/condition, title status, document quality, verification results, and creditor policies.",
    keywords: ["estimate", "range", "vehicle", "mileage", "condition"]
  },
  {
    category: "Documents",
    q: "What documents will you ask for?",
    a: "Typically: identity verification, proof of income (as applicable), and vehicle documentation/photos. We explain why we ask for each item.",
    keywords: ["documents", "uploads", "photos", "id", "income"]
  },
  {
    category: "Payments",
    q: "How do payments work?",
    a: "Your agreement documents include a payment schedule and total cost view. The portal provides Pay Now, scheduling, and autopay placeholders in V1.",
    keywords: ["payments", "schedule", "autopay", "receipts"]
  },
  {
    category: "General",
    q: "What is a “CAB Title Access Agreement”?",
    a: "It’s the CAB-safe label for the agreement you may sign after reviewing disclosures (if approved). In the portal we use “Agreements” rather than “Loans.”",
    keywords: ["agreement", "contract", "loan", "label"]
  }
];

export function FaqSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ITEMS.filter((it) => {
      const inCat = category === "All" ? true : it.category === category;
      if (!inCat) return false;
      if (!q) return true;
      const hay = `${it.q} ${typeof it.a === "string" ? it.a : ""} ${it.keywords.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, category]);

  const categories: Array<Category | "All"> = ["All", "CAB model", "Estimates", "Documents", "Payments", "General"];

  return (
    <Card className="p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="faqSearch">Search</Label>
          <Input id="faqSearch" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search CAB, estimate, payments…" />
        </div>
        <div>
          <Label>Category</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={
                  "rounded-xl border px-3 py-2 text-sm transition " +
                  (category === c ? "border-brand/50 bg-brand/10 text-fg" : "border-border/60 bg-panel/40 text-muted hover:bg-panel/60")
                }
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Accordion items={filtered} />
        {!filtered.length ? <p className="mt-4 text-sm text-muted">No results. Try a different search term.</p> : null}
      </div>
    </Card>
  );
}

