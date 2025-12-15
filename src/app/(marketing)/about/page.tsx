import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="About Dollar Loans"
      lead={<>Premium, modern access-to-credit facilitation built for clarity and speed — Texas CAB model only.</>}
      primaryCta={{ label: "CAB model explained", href: "/cab-model-explained" }}
      secondaryCta={{ label: "Security & trust", href: "/security-trust" }}
      sections={[
        {
          eyebrow: "Mission",
          title: "Trust as a product feature",
          body: <>We design for clarity: clear steps, transparent categories, and disclosure-first UX. We take users seriously.</>,
          infographic: { variant: "securityDataJourney", title: "Trust journey", caption: "Security + disclosures + verification (placeholder)." }
        },
        {
          eyebrow: "Texas-first",
          title: "Built for Texas CAB compliance",
          body: <>CAB terminology is baked into navigation, CTAs, and agreements screens. We use “Agreements,” not “Loans.”</>,
          infographic: { variant: "cabWhoDoesWhat", title: "Role clarity", caption: "CAB facilitation vs. creditor extension." }
        }
      ]}
    />
  );
}

