import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="Developers"
      lead={<>API overview + docs placeholders for a referral/lead platform. Includes webhooks, attribution scaffolding, and compliance guardrails.</>}
      primaryCta={{ label: "Partners", href: "/partners" }}
      secondaryCta={{ label: "Affiliate program", href: "/partners/affiliate-program" }}
      sections={[
        {
          eyebrow: "Auth",
          title: "Authentication (placeholder)",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>OAuth2 (recommended) or API keys (placeholder)</li>
              <li>Rate limiting + bot protection stubs</li>
              <li>Audit logging for partner activity</li>
            </ul>
          ),
          infographic: { variant: "securityDataJourney", title: "API security posture", caption: "High-level security diagram (placeholder)." }
        },
        {
          eyebrow: "Endpoints",
          title: "Referral/Lead API (high-level)",
          body: (
            <div className="space-y-3">
              {[
                ["POST /api/partner/leads", "Create a lead (name, phone/email, vehicle basics)."],
                ["GET /api/partner/leads/{id}", "Lead status."],
                ["POST /api/partner/links", "Generate tracked referral link."],
                ["GET /api/partner/metrics", "Aggregated performance data."]
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-border/60 bg-bg/25 p-4">
                  <p className="text-sm font-semibold tracking-tight">{t}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
          ),
          infographic: { variant: "howItWorksFlow", title: "Webhook lifecycle", caption: "application.started → offer.accepted → funded (placeholder)." }
        },
        {
          eyebrow: "Compliance",
          title: "Guardrails",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Mandatory CAB-safe terminology in partner marketing</li>
              <li>Prohibited claims enforced by policy + review</li>
              <li>Attribution capture (UTM + partnerId) placeholders</li>
            </ul>
          )
        }
      ]}
    />
  );
}

