import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="How it works"
      lead={
        <>
          A disclosure-first, conversion-optimized flow designed for speed and trust. Every estimate is a range only —
          not a commitment to extend credit.
        </>
      }
      primaryCta={{ label: "Check your estimate", href: "/#prequal" }}
      secondaryCta={{ label: "CAB model explained", href: "/cab-model-explained" }}
      sections={[
        {
          eyebrow: "Step-by-step",
          title: "Three phases, zero ambiguity",
          body: (
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <span className="text-fg font-semibold">Instant estimate</span>: vehicle basics + desired amount → non-guarantee range.
              </li>
              <li>
                <span className="text-fg font-semibold">Full application</span>: photos, identity, income, and banking for verification.
              </li>
              <li>
                <span className="text-fg font-semibold">Offer + disclosures</span>: review categories and acknowledge CAB disclosures before signing.
              </li>
            </ol>
          ),
          infographic: {
            variant: "howItWorksFlow",
            title: "Flow diagram",
            caption: "Estimate → verify → offer + disclosures → sign (if approved)."
          }
        },
        {
          eyebrow: "UX promise",
          title: "Save, resume, and stay in control",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Autosave at each step</li>
              <li>Clear progress stepper</li>
              <li>Guided photo upload overlays</li>
              <li>Contextual “why we ask this” microcopy</li>
            </ul>
          ),
          infographic: {
            variant: "lifecycleTimeline",
            title: "Lifecycle timeline",
            caption: "A calm status experience in the customer portal."
          }
        }
      ]}
    />
  );
}

