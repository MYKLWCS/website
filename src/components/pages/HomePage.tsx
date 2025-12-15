import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { PrequalMiniWizard } from "@/components/prequal/PrequalMiniWizard";
import { Infographic } from "@/components/infographics/Infographic";
import { Accordion } from "@/components/ui/Accordion";
import { TrackEvent } from "@/components/common/TrackEvent";
import { Notice } from "@/components/ui/Notice";
import { HomeHero } from "@/components/pages/HomeHero";

export function HomePage() {
  return (
    <main>
      <TrackEvent name="visit_home" />

      <Section className="pt-20 md:pt-32 pb-16 md:pb-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <HomeHero />
            <div id="prequal" className="scroll-mt-28">
              <PrequalMiniWizard />
            </div>
          </div>

          <div className="mt-20">
            <TrustStrip />
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-b from-white to-panel/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Get cash in 3 easy steps</h2>
            <p className="text-lg text-muted leading-relaxed">
              Fast, transparent, and designed with your trust in mind
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["1", "Check your estimate", "Enter vehicle details + desired amount for an instant range estimate"],
              ["2", "Verify details", "Upload photos and documents for quick verification"],
              ["3", "Review + sign", "Review CAB disclosures and e-sign to get funded"]
            ].map(([n, t, d]) => (
              <div key={t} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-brand2 rounded-3xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
                <div className="relative rounded-3xl border-2 border-border bg-white p-8 transition-all duration-300 group-hover:border-brand/30 group-hover:shadow-2xl group-hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand font-bold text-xl mb-6">
                    {n}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3">{t}</h3>
                  <p className="text-sm text-muted leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 graphic-container">
              <div className="graphic-float w-full">
                <Infographic
                  variant="howItWorksFlow"
                  title="From estimate to agreement"
                  caption="A simple, disclosure-forward flow designed for speed and clarity."
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-6">How it works</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                A calm, predictable process
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-12">
                You start with an estimate range. If you continue, we will collect the information needed to facilitate
                access and present CAB disclosures before any agreement is signed.
              </p>

              <div className="space-y-3 mb-12">
                {[
                  ["Estimate range", "Vehicle basics and desired amount"],
                  ["Verify", "Upload photos and provide details"],
                  ["Offer + disclosures", "Review fee categories and CAB info"],
                  ["E-sign + funding", "Sign and track your funding"]
                ].map(([t, d]) => (
                  <div key={t} className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-white hover:border-brand/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand mt-2"></div>
                    <div>
                      <p className="font-bold text-base mb-1">{t}</p>
                      <p className="text-sm text-muted">{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/how-it-works" size="lg">Explore the steps</ButtonLink>
                <ButtonLink variant="tertiary" href="/rates-fees" size="lg">See rates</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-b from-panel/20 to-white py-24 md:py-32">
        <Container>
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-6">Why Dollar Loans</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                Built like a big-company fintech
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-12">
                Premium visuals, predictable steps, and disclosure-first clarity.
              </p>

              <div className="grid gap-5 sm:grid-cols-2 mb-12">
                {[
                  ["Transparency", "Fee categories in plain language"],
                  ["Speed", "Step-by-step flow with autosave"],
                  ["Security", "Secure-by-default architecture"],
                  ["Support", "Clear complaint pathways"]
                ].map(([t, d]) => (
                  <div key={t} className="p-6 rounded-2xl border border-border/50 bg-white hover:border-brand/20 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/10 to-brand2/10 flex items-center justify-center mb-4">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand to-brand2"></div>
                    </div>
                    <h3 className="font-bold text-base mb-2">{t}</h3>
                    <p className="text-sm text-muted">{d}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  ["CAB Model Explained", "How access facilitation works", "/cab-model-explained"],
                  ["Security & Trust", "How we handle your data", "/security-trust"],
                  ["Eligibility", "Pre-check for Texas", "/eligibility"]
                ].map(([t, d, href]) => (
                  <Link
                    key={t}
                    href={href}
                    className="group flex items-center justify-between p-6 rounded-2xl border border-border/50 bg-white hover:border-brand/20 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex-1">
                      <p className="font-bold text-base mb-1">{t}</p>
                      <p className="text-sm text-muted">{d}</p>
                    </div>
                    <div className="text-brand group-hover:translate-x-2 transition-transform text-xl">→</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="order-first lg:order-last graphic-container">
              <div className="graphic-float w-full glow-subtle">
                <Infographic
                  variant="cabWhoDoesWhat"
                  title="Who does what in the CAB model"
                  caption="Dollar Loans facilitates access; a third-party creditor may extend credit if approved."
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-6">Customer stories</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Trusted by Texans</h2>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
                Real feedback from customers who value transparency and clarity.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Felt legit from the start", "The site explained the CAB model clearly."],
                ["Loved the progress tracking", "Autosave made it easy to finish later."],
                ["Cost categories were clear", "I understood everything before signing."]
              ].map(([q, d]) => (
                <div key={q} className="p-8 rounded-2xl border border-border/50 bg-white hover:border-brand/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                    <div className="text-brand text-xl">"</div>
                  </div>
                  <p className="font-bold text-base mb-3">{q}</p>
                  <p className="text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              <Notice tone="cab" title="Compliance-first transparency" className="p-6">
                Estimates are ranges only and not a commitment to extend credit. Dollar Loans is a Texas CAB that facilitates access to credit; a third-party creditor may extend credit if approved.
              </Notice>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-b from-white to-panel/10 py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-6">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Questions, answered directly
              </h2>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
                Transparent, CAB-safe answers.
              </p>
            </div>

            <Accordion
              items={[
                {
                  q: "Are you a lender?",
                  a: (
                    <>
                      Dollar Loans is a Texas Credit Access Business (CAB) that facilitates access to credit. A third-party
                      creditor may extend credit if you are approved.
                    </>
                  )
                },
                {
                  q: "Is approval guaranteed?",
                  a: "No. Estimates and pre-qualification are not guarantees. Final terms depend on verification and eligibility."
                },
                {
                  q: "What affects my estimate?",
                  a: "Vehicle year/mileage/condition, title status, verification results, and other eligibility factors."
                }
              ]}
            />

            <div className="text-center mt-10">
              <ButtonLink variant="secondary" href="/faq" size="lg">
                View all FAQs
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
