import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="Eligibility"
      lead={<>A simple Texas-first checklist with a soft pre-check. Nothing here is a guarantee of approval.</>}
      primaryCta={{ label: "Check your estimate", href: "/#prequal" }}
      secondaryCta={{ label: "Get Cash (portal)", href: "/auth/login" }}
      sections={[
        {
          eyebrow: "Checklist",
          title: "Basic requirements (Texas)",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Texas resident</li>
              <li>Own a qualifying vehicle</li>
              <li>Title status pathways (scenario-dependent)</li>
              <li>Proof of income (as applicable)</li>
              <li>Valid ID requirements</li>
            </ul>
          ),
          infographic: { variant: "eligibilityDecisionTree", title: "Decision tree (mini)", caption: "A high-level eligibility visual (placeholder)." }
        },
        {
          eyebrow: "Pre-check",
          title: "Soft pre-check (no pressure)",
          body: (
            <>
              Use the embedded estimate on the homepage to start. If you continue, the Get Cash wizard collects details
              for verification and disclosures.
            </>
          ),
          infographic: { variant: "howItWorksFlow", title: "What happens next", caption: "Estimate → verify → offer + disclosures." }
        }
      ]}
    />
  );
}

