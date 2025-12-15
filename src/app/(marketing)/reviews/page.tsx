import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="Reviews"
      lead={<>Curated testimonials (placeholders). Stories are presented responsibly — no promises, no “guaranteed approval” claims.</>}
      primaryCta={{ label: "Check your estimate", href: "/#prequal" }}
      secondaryCta={{ label: "Security & trust", href: "/security-trust" }}
      sections={[
        {
          eyebrow: "Stories",
          title: "Customer outcomes (responsible framing)",
          body: (
            <div className="space-y-3">
              {[
                ["“Clear steps and transparency.”", "I always knew what was next and what information was needed."],
                ["“Felt legit.”", "The site explained the CAB model and didn’t hide the cost categories."],
                ["“Fast verification once I uploaded clean photos.”", "The guided upload overlays helped a lot."]
              ].map(([q, d]) => (
                <div key={q} className="rounded-2xl border border-border/60 bg-bg/25 p-5">
                  <p className="text-sm font-semibold tracking-tight">{q}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
          ),
          infographic: { variant: "lifecycleTimeline", title: "Lifecycle clarity", caption: "A timeline that reduces anxiety (placeholder)." }
        },
        {
          eyebrow: "Trust",
          title: "What we don’t do",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>No “guaranteed approval” marketing</li>
              <li>No confusing APR-only framing without category clarity</li>
              <li>No misleading “we lend” positioning (CAB-first)</li>
            </ul>
          ),
          infographic: { variant: "cabWhoDoesWhat", title: "CAB-safe positioning", caption: "Consistent terminology across UX." }
        }
      ]}
    />
  );
}

