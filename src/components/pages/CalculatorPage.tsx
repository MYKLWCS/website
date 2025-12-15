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

      <Section>
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">Calculate Your Estimate</h2>
            <p className="text-lg text-muted text-center max-w-3xl mx-auto">
              Use our transparent calculator to understand your potential options. All estimates are ranges only and not commitments.
            </p>
          </div>

          <CalculatorWidget />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-brand2 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
              <div className="relative">
                <Infographic
                  variant="howItWorksFlow"
                  title="From calculator → Get Cash wizard"
                  caption="A conversion-first path that stays CAB-safe."
                />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-brand2 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
              <div className="relative">
                <Infographic
                  variant="cabWhoDoesWhat"
                  title="CAB roles at a glance"
                  caption="Dollar Loans facilitates access; a third-party creditor may extend credit if approved."
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

