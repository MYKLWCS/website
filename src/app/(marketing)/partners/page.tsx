import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="Partners"
      lead={<>A sophisticated partner ecosystem page with compliance expectations and placeholders for payouts and onboarding.</>}
      primaryCta={{ label: "Apply to partner", href: "/contact" }}
      secondaryCta={{ label: "Affiliate program", href: "/partners/affiliate-program" }}
      sections={[
        {
          eyebrow: "Who can partner",
          title: "Approved partners only",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Marketers and affiliates (approved)</li>
              <li>Dealerships (where permitted)</li>
              <li>Brokers (where permitted)</li>
            </ul>
          ),
          infographic: { variant: "howItWorksFlow", title: "Partner-to-lead flow", caption: "Lead → qualified → application → agreement (placeholder)." }
        },
        {
          eyebrow: "Guardrails",
          title: "Compliance expectations",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>No guaranteed approval claims</li>
              <li>No deceptive rate promises</li>
              <li>Mandatory CAB-safe terminology</li>
              <li>Audit logging and enforcement (placeholder)</li>
            </ul>
          )
        }
      ]}
    />
  );
}

