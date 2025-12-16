import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MarketingPageShell } from "@/components/pages/MarketingPageShell";
import { FeeBreakdown } from "@/components/dashboard/FeeBreakdown";
import { Notice } from "@/components/ui/Notice";
import { Infographic } from "@/components/infographics/Infographic";
import { EstimatedPaymentsToggle } from "@/components/rates/EstimatedPaymentsToggle";

export function RatesFeesPage() {
  return (
    <main>
      <MarketingPageShell
        title="Rates & fees (Texas CAB framing)"
        lead={
          <>
            Transparent category-based cost education for Texas CAB access services. Examples are <span className="text-fg">not promises</span>, and approval is not guaranteed.
          </>
        }
        primaryCta={{ label: "Check your estimate", href: "/#prequal" }}
        secondaryCta={{ label: "CAB disclosures", href: "/legal/cab-disclosures" }}
        sections={[
          {
            eyebrow: "Transparency",
            title: "Category view of costs",
            body: (
              <>
                We avoid confusing “APR-only” framing as a standalone explanation. Instead, we show fee categories and point you to disclosures and agreement documents before signing.
              </>
            ),
            infographic: {
              variant: "feeComposition",
              title: "Fee composition (example)",
              caption: "A placeholder chart showing categories (not real rates)."
            }
          },
          {
            eyebrow: "Examples",
            title: "Scenario cards (placeholders)",
            body: (
              <div className="space-y-4">
                {[
                  ["Scenario A", "Smaller amount with shorter term — shown as category totals for education only."],
                  ["Scenario B", "Medium amount with standard term — not a guarantee of approval or terms."],
                  ["Scenario C", "Larger amount depending on vehicle eligibility — verification required."]
                ].map(([t, d]) => (
                  <div key={t} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-brand2 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
                    <div className="relative rounded-2xl border-2 border-border bg-white p-6 transition-all duration-300 group-hover:border-brand/30 group-hover:shadow-lg">
                      <p className="text-base font-bold tracking-tight text-brand">{t}</p>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            ),
            infographic: {
              variant: "howItWorksFlow",
              title: "Where disclosures appear",
              caption: "Estimate → verify → offer + disclosures → sign (if approved)."
            }
          }
        ]}
      />

      <Section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-panel/30 via-white to-panel/20"></div>
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand/10 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[300px] bg-gradient-to-l from-brand2/10 to-transparent rounded-full blur-3xl"></div>

        <Container className="relative">
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/20 mb-8 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Transparent Pricing</p>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 bg-gradient-to-br from-fg to-fg/70 bg-clip-text text-transparent">
                Clear Cost Breakdown
              </h2>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
                Understanding costs is important. We break down fee categories in plain language.
              </p>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 mb-20 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand2 rounded-3xl opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative">
                <FeeBreakdown
                  items={[
                    { label: "CAB access fee (example)", amount: 180 },
                    { label: "Creditor charge(s) (example)", amount: 210 },
                    { label: "Third-party costs (if applicable)", amount: 0 }
                  ]}
                  disclaimer="Example categories only. Your actual disclosures may differ and will be provided before signing."
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative p-8 rounded-3xl border-2 border-brand/30 bg-gradient-to-br from-brand/5 via-white to-brand2/5 shadow-[0_20px_50px_rgb(var(--brand)/0.1)] hover:shadow-[0_25px_60px_rgb(var(--brand)/0.15)] transition-all duration-500">
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-brand/20 to-transparent rounded-tl-3xl"></div>
                <Notice tone="cab" title="CAB-safe language" className="!p-0 !bg-transparent !border-0">
                  Dollar Loans facilitates access to credit as a Texas Credit Access Business (CAB). We do not present ourselves as a traditional lender in marketing copy.
                </Notice>
              </div>
              <div className="relative p-8 rounded-3xl border-2 border-warn/40 bg-gradient-to-br from-warn/5 via-white to-warn/5 shadow-lg hover:shadow-[0_20px_50px_rgb(var(--warn)/0.15)] transition-all duration-500">
                <Notice tone="warn" title="Not guaranteed" className="!p-0 !bg-transparent !border-0">
                  Estimates, pre-qualification, and examples are not guarantees of approval or final terms.
                </Notice>
              </div>
              <div className="relative p-8 rounded-3xl border-2 border-border bg-white shadow-lg hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500">
                <Notice tone="info" title="Want the full text?" className="!p-0 !bg-transparent !border-0">
                  See{" "}
                  <Link className="underline underline-offset-4 hover:text-brand font-semibold transition-colors" href="/legal/cab-disclosures">
                    CAB disclosures
                  </Link>{" "}
                  and{" "}
                  <Link className="underline underline-offset-4 hover:text-brand font-semibold transition-colors" href="/legal/texas-disclosures">
                    Texas disclosures
                  </Link>
                  .
                </Notice>
              </div>
            </div>
          </div>

          <div className="mb-20 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand/15 via-brand2/15 to-brand/15 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <EstimatedPaymentsToggle />
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand2 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative p-8 rounded-3xl border-2 border-border bg-white hover:border-brand/30 hover:shadow-[0_30px_60px_rgb(var(--brand)/0.15)] transition-all duration-500 group-hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand/20 to-brand2/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand to-brand2"></div>
                  </div>
                </div>
                <div className="graphic-float transform group-hover:scale-105 transition-transform duration-700">
                  <Infographic
                    variant="cabWhoDoesWhat"
                    title="Who does what"
                    caption="CAB facilitation vs. creditor extension of credit (if approved)."
                  />
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand2 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative p-8 rounded-3xl border-2 border-border bg-white hover:border-brand/30 hover:shadow-[0_30px_60px_rgb(var(--brand)/0.15)] transition-all duration-500 group-hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand/20 to-brand2/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand to-brand2"></div>
                  </div>
                </div>
                <div className="graphic-float transform group-hover:scale-105 transition-transform duration-700">
                  <Infographic
                    variant="securityDataJourney"
                    title="Verification data journey (high-level)"
                    caption="What happens to your info in the process (placeholder)."
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
