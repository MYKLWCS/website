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
          <CalculatorWidget />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Infographic
              variant="howItWorksFlow"
              title="From calculator → Get Cash wizard"
              caption="A conversion-first path that stays CAB-safe."
            />
            <Infographic
              variant="cabWhoDoesWhat"
              title="CAB roles at a glance"
              caption="Dollar Loans facilitates access; a third-party creditor may extend credit if approved."
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}

