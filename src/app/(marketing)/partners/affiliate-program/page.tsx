import { MarketingPageShell } from "@/components/pages/MarketingPageShell";
import { AffiliateLinkGenerator } from "@/components/partners/AffiliateLinkGenerator";

export default function Page() {
  return (
    <main>
      <MarketingPageShell
        title="Affiliate program"
        lead={<>Program tiers, rules, brand assets, and tracking link examples — built to look like a real fintech partner program.</>}
        primaryCta={{ label: "Apply to partner", href: "/contact" }}
        secondaryCta={{ label: "Developers", href: "/developers" }}
        sections={[
          {
            eyebrow: "Tiers",
            title: "Program tiers (placeholder)",
            body: (
              <div className="space-y-3">
                {[
                  ["Starter", "Basic tracking, standard payout (placeholder)."],
                  ["Growth", "Improved payout tier with volume (placeholder)."],
                  ["Enterprise", "Custom terms, strict compliance review (placeholder)."]
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-border/60 bg-bg/25 p-4">
                    <p className="text-sm font-semibold tracking-tight">{t}</p>
                    <p className="mt-1 text-sm text-muted">{d}</p>
                  </div>
                ))}
              </div>
            ),
            infographic: { variant: "feeComposition", title: "Payout examples", caption: "Placeholder visuals only." }
          },
          {
            eyebrow: "Rules",
            title: "Prohibited marketing claims",
            body: (
              <ul className="list-disc space-y-1 pl-5">
                <li>No “guaranteed approval” or “instant approval” claims</li>
                <li>No misleading “we lend” positioning; CAB-only terminology in marketing</li>
                <li>No deceptive rate or timing promises</li>
              </ul>
            )
          },
          {
            eyebrow: "Brand",
            title: "Brand assets gallery (placeholder)",
            body: (
              <div className="grid gap-3 md:grid-cols-3">
                {["Logo (light)", "Logo (dark)", "Badge set", "Screenshots", "Approved copy snippets", "Do-not-use examples"].map((x) => (
                  <div key={x} className="rounded-2xl border border-border/60 bg-bg/25 p-4">
                    <p className="text-sm font-semibold tracking-tight">{x}</p>
                    <p className="mt-1 text-xs text-muted">Download placeholder</p>
                  </div>
                ))}
              </div>
            )
          }
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <AffiliateLinkGenerator />
      </div>
    </main>
  );
}
