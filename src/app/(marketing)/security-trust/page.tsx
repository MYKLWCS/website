import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="Security & trust"
      lead={<>Plain-language security posture and anti-fraud education. This is a V1 scaffold; production controls should be implemented and audited.</>}
      primaryCta={{ label: "Login", href: "/auth/login" }}
      secondaryCta={{ label: "CAB model explained", href: "/cab-model-explained" }}
      sections={[
        {
          eyebrow: "Data handling",
          title: "How your data moves (high-level)",
          body: (
            <>
              We collect information to verify eligibility and support accurate disclosures. In production, implement encryption at rest, strict access controls, and audit logs.
            </>
          ),
          infographic: { variant: "securityDataJourney", title: "Data journey diagram", caption: "High-level flow (placeholder)." }
        },
        {
          eyebrow: "Documents",
          title: "What we request and why",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Identity: confirm you are who you say you are</li>
              <li>Income: support qualification checks (as applicable)</li>
              <li>Vehicle photos: verify vehicle details and title status pathways</li>
            </ul>
          ),
          infographic: { variant: "howItWorksFlow", title: "Verification checkpoints", caption: "Where uploads and reviews occur." }
        },
        {
          eyebrow: "Anti-fraud",
          title: "Tips to protect yourself",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Never share codes or passwords with anyone</li>
              <li>Verify the domain before entering personal information</li>
              <li>Use official support channels for questions</li>
            </ul>
          )
        }
      ]}
    />
  );
}

