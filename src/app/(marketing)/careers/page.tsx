import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="Careers"
      lead={<>Big-company credibility page. Roles and benefits are placeholders in V1.</>}
      primaryCta={{ label: "Contact", href: "/contact" }}
      secondaryCta={{ label: "Security & trust", href: "/security-trust" }}
      sections={[
        {
          eyebrow: "Culture",
          title: "High-integrity, customer-first",
          body: <>We build disclosure-forward fintech UX that treats people with dignity, and we care about compliance as part of product quality.</>,
          infographic: { variant: "securityDataJourney", title: "Trust as craft", caption: "Security + transparency at the center." }
        },
        {
          eyebrow: "Open roles",
          title: "Placeholder roles",
          body: (
            <div className="space-y-3">
              {["Support specialist", "Frontend engineer", "Compliance operations"].map((r) => (
                <div key={r} className="rounded-2xl border border-border/60 bg-bg/25 p-4">
                  <p className="text-sm font-semibold tracking-tight">{r}</p>
                  <p className="mt-1 text-sm text-muted">Role description placeholder.</p>
                </div>
              ))}
            </div>
          )
        }
      ]}
    />
  );
}

