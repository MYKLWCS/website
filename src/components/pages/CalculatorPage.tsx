import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MarketingPageShell } from "@/components/pages/MarketingPageShell";
import { CalculatorWidget } from "@/components/calculator/CalculatorWidget";
import { Infographic } from "@/components/infographics/Infographic";

export function CalculatorPage() {
  return (
    <main>
      <MarketingPageShell
        title="Calculator"
        lead={
          <>
            A transparent, CAB-safe estimate education tool. Results are <span className="text-fg">ranges only</span> and are not a commitment to extend credit.
          </>
        }
        primaryCta={{ label: "Lock your estimate", href: "/#prequal" }}
        secondaryCta={{ label: "CAB model explained", href: "/cab-model-explained" }}
        sections={[
          {
            eyebrow: "Estimate education",
            title: "Understand what moves your range",
            body: (
              <ul className="list-disc space-y-1 pl-5">
                <li>Vehicle year/mileage/condition</li>
                <li>Title status and eligibility verification</li>
                <li>Document quality and completeness</li>
                <li>Creditor policies (if approved)</li>
              </ul>
            ),
            infographic: {
              variant: "vehicleValueHeatmap",
              title: "Valuation factors heatmap",
              caption: "A simple visualization of what influences estimate ranges (placeholder)."
            }
          },
          {
            eyebrow: "Cost transparency",
            title: "See categories, not surprises",
            body: (
              <>
                We present fee categories in plain language and pair every estimate with non-guarantee microcopy. For full disclosure language, see the legal pages.
              </>
            ),
            infographic: {
              variant: "feeComposition",
              title: "Fee category composition",
              caption: "Example category chart (placeholder values)."
            }
          }
        ]}
      />

      <Section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-panel/20 via-white to-panel/30"></div>
        <div className="absolute top-0 left-1/2 w-[700px] h-[350px] bg-gradient-to-b from-brand/10 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>

        <Container className="relative">
          <div className="mb-20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/20 mb-6 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Interactive Calculator</p>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-br from-fg to-fg/70 bg-clip-text text-transparent">
                Calculate Your Estimate
              </h2>
              <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed">
                Use our transparent calculator to understand your potential options. All estimates are ranges only and not commitments.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand/20 via-brand2/20 to-brand/20 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <CalculatorWidget />
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand2 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative p-6 rounded-3xl border-2 border-border bg-white hover:border-brand/30 hover:shadow-[0_30px_60px_rgb(var(--brand)/0.15)] transition-all duration-500 group-hover:-translate-y-2">
                <div className="graphic-float transform group-hover:scale-105 transition-transform duration-700">
                  <Infographic
                    variant="howItWorksFlow"
                    title="From calculator → Get Cash wizard"
                    caption="A conversion-first path that stays CAB-safe."
                  />
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand2 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative p-6 rounded-3xl border-2 border-border bg-white hover:border-brand/30 hover:shadow-[0_30px_60px_rgb(var(--brand)/0.15)] transition-all duration-500 group-hover:-translate-y-2">
                <div className="graphic-float transform group-hover:scale-105 transition-transform duration-700">
                  <Infographic
                    variant="cabWhoDoesWhat"
                    title="CAB roles at a glance"
                    caption="Dollar Loans facilitates access; a third-party creditor may extend credit if approved."
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

