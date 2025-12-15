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

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Infographic
                variant="howItWorksFlow"
                title="From estimate to agreement"
                caption="A simple, disclosure-forward flow designed for speed and clarity."
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">How it works</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                A calm, predictable process
              </h2>
              <p className="text-base text-muted leading-relaxed mb-8">
                You start with an estimate range. If you continue, we will collect the information needed to facilitate
                access and present CAB disclosures before any agreement is signed.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  ["Estimate range", "Vehicle basics and desired amount for a non-guarantee estimate range."],
                  ["Verify", "Upload photos and provide identity/income details so we can verify eligibility."],
                  ["Offer + disclosures", "Review fee categories and acknowledge CAB disclosures."],
                  ["E-sign + funding", "Confirm, sign, and track your funding status timeline."]
                ].map(([t, d]) => (
                  <div key={t} className="flex gap-4 p-5 rounded-2xl border border-border bg-white hover:border-brand/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand mt-2"></div>
                    <div>
                      <p className="font-semibold text-base mb-1">{t}</p>
                      <p className="text-sm text-muted leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/how-it-works" size="lg">Explore the steps</ButtonLink>
                <ButtonLink variant="tertiary" href="/rates-fees" size="lg">See rates & fees</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-panel/20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Why Dollar Loans</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Built like a big-company fintech
              </h2>
              <p className="text-base text-muted leading-relaxed mb-10">
                Premium visuals, predictable steps, and disclosure-first clarity - designed for trust-sensitive shoppers.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  ["Transparency", "Fee categories explained in plain language with examples"],
                  ["Speed", "Calm, step-by-step flow with autosave and guided uploads"],
                  ["Security", "Secure-by-default architecture for your peace of mind"],
                  ["Support", "Ticket-style support and clear complaint pathways"]
                ].map(([t, d]) => (
                  <div key={t} className="p-6 rounded-2xl border border-border bg-white hover:border-brand/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                      <div className="w-4 h-4 rounded-full bg-brand"></div>
                    </div>
                    <h3 className="font-bold text-base mb-2">{t}</h3>
                    <p className="text-sm text-muted leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Education</p>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">CAB clarity - without the jargon</h3>
                  <p className="text-base text-muted leading-relaxed">
                    We explain who does what, what you pay, and what your options are - in plain language.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    ["CAB Model Explained", "What a Texas CAB is and how access facilitation works", "/cab-model-explained"],
                    ["Security & Trust", "How we handle data and what we ask for", "/security-trust"],
                    ["Eligibility", "Quick checklist + pre-check for Texas", "/eligibility"]
                  ].map(([t, d, href]) => (
                    <Link
                      key={t}
                      href={href}
                      className="group flex items-center justify-between p-5 rounded-2xl border border-border bg-white hover:border-brand/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-base mb-1">{t}</p>
                        <p className="text-sm text-muted">{d}</p>
                      </div>
                      <div className="text-brand group-hover:translate-x-1 transition-transform">-&gt;</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <Infographic
                variant="cabWhoDoesWhat"
                title="Who does what in the CAB model"
                caption="Dollar Loans facilitates access; a third-party creditor may extend credit if approved."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Customer stories</p>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by Texans</h2>
              <p className="text-base text-muted leading-relaxed mb-8">
                Real feedback from customers who value transparency and clarity.
              </p>

              <div className="space-y-4">
                {[
                  ["Felt legit from the start", "The site explained the CAB model and set expectations clearly."],
                  ["Loved the step-by-step progress", "Autosave made it easy to finish when I had time."],
                  ["The cost categories were clear", "I understood what I was paying before signing anything."]
                ].map(([q, d]) => (
                  <div key={q} className="p-6 rounded-2xl border border-border bg-white hover:border-brand/30 hover:shadow-lg transition-all duration-300">
                    <p className="font-semibold text-lg mb-3 text-brand">{q}</p>
                    <p className="text-sm text-muted leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Calculator preview</p>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Estimate education, not hype</h2>
              <p className="text-base text-muted leading-relaxed mb-8">
                Use the calculator to explore ranges and what affects your estimate, then continue to Get Cash.
              </p>

              <div className="p-8 rounded-2xl border-2 border-border bg-white hover:border-brand/30 hover:shadow-2xl transition-all duration-300 mb-6">
                <p className="font-semibold text-lg mb-3">Loan calculator (preview)</p>
                <p className="text-sm text-muted mb-6 leading-relaxed">
                  Vehicle year/make/model, mileage, condition, desired amount, term toggles.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/calculator">Open calculator</ButtonLink>
                  <ButtonLink variant="secondary" href="/#prequal">Lock your estimate</ButtonLink>
                </div>
              </div>

              <Notice tone="cab" title="Compliance-first transparency">
                Estimates are ranges only and not a commitment to extend credit. Dollar Loans is a Texas CAB that facilitates access to credit; a third-party creditor may extend credit if approved.
              </Notice>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-panel/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Questions, answered directly
              </h2>
              <p className="text-base text-muted leading-relaxed max-w-2xl mx-auto">
                Transparent, CAB-safe answers. For full disclosure language, see the legal pages.
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

            <div className="text-center mt-8">
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
