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
              <div className="space-y-3">
                {[
                  ["Scenario A", "Smaller amount with shorter term — shown as category totals for education only."],
                  ["Scenario B", "Medium amount with standard term — not a guarantee of approval or terms."],
                  ["Scenario C", "Larger amount depending on vehicle eligibility — verification required."]
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-border/60 bg-bg/25 p-4">
                    <p className="text-sm font-semibold tracking-tight">{t}</p>
                    <p className="mt-1 text-sm text-muted">{d}</p>
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

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <FeeBreakdown
              items={[
                { label: "CAB access fee (example)", amount: 180 },
                { label: "Creditor charge(s) (example)", amount: 210 },
                { label: "Third-party costs (if applicable)", amount: 0 }
              ]}
              disclaimer="Example categories only. Your actual disclosures may differ and will be provided before signing."
            />
            <div className="space-y-4">
              <Notice tone="cab" title="CAB-safe language">
                Dollar Loans facilitates access to credit as a Texas Credit Access Business (CAB). We do not present ourselves as a traditional lender in marketing copy.
              </Notice>
              <Notice tone="warn" title="Not guaranteed">
                Estimates, pre-qualification, and examples are not guarantees of approval or final terms.
              </Notice>
              <Notice tone="info" title="Want the full text?">
                See{" "}
                <Link className="underline underline-offset-4 hover:text-fg" href="/legal/cab-disclosures">
                  CAB disclosures
                </Link>{" "}
                and{" "}
                <Link className="underline underline-offset-4 hover:text-fg" href="/legal/texas-disclosures">
                  Texas disclosures
                </Link>
                .
              </Notice>
            </div>
          </div>

          <div className="mt-6">
            <EstimatedPaymentsToggle />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Infographic
              variant="cabWhoDoesWhat"
              title="Who does what"
              caption="CAB facilitation vs. creditor extension of credit (if approved)."
            />
            <Infographic
              variant="securityDataJourney"
              title="Verification data journey (high-level)"
              caption="What happens to your info in the process (placeholder)."
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
