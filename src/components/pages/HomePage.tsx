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
      <Section className="pt-10 md:pt-16">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <HomeHero />

            <div id="prequal" className="scroll-mt-28">
              <PrequalMiniWizard />
            </div>
          </div>

          <div className="mt-10">
            <TrustStrip />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["1", "Check your estimate", "Vehicle basics + desired amount → a non-guarantee range."],
              ["2", "Verify details", "Guided uploads and verification steps to reduce back-and-forth."],
              ["3", "Review + sign", "Offer view + CAB disclosures before signing any agreement (if approved)."]
            ].map(([n, t, d]) => (
              <div key={t} className="rounded-2xl border border-border/70 bg-panel/45 p-6 shadow-glow">
                <p className="text-xs text-muted">Step {n}</p>
                <p className="mt-2 text-lg font-semibold tracking-tight">{t}</p>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <Infographic
              variant="howItWorksFlow"
              title="From estimate to agreement"
              caption="A simple, disclosure-forward flow designed for speed and clarity."
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">How it works</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">A calm, predictable process</h2>
              <p className="mt-2 text-sm text-muted">
                You start with an estimate range. If you continue, we’ll collect the information needed to facilitate
                access and present CAB disclosures before any agreement is signed.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  ["Estimate range", "Vehicle basics and desired amount for a non-guarantee estimate range."],
                  ["Verify", "Upload photos and provide identity/income details so we can verify eligibility."],
                  ["Offer + disclosures", "Review fee categories and acknowledge CAB disclosures."],
                  ["E-sign + funding tracker", "Confirm, sign, and track your funding status timeline."]
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-border/70 bg-panel/45 p-5">
                    <p className="text-sm font-semibold tracking-tight">{t}</p>
                    <p className="mt-1 text-sm text-muted">{d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <ButtonLink href="/how-it-works">Explore the steps</ButtonLink>
                <ButtonLink variant="tertiary" href="/rates-fees">
                  See rates & fees
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Why Dollar Loans</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Built like a big-company fintech</h2>
              <p className="mt-2 text-sm text-muted">
                Premium visuals, predictable steps, and disclosure-first clarity — designed for trust-sensitive shoppers.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  ["Transparency", "Fee categories explained in plain language — with examples only."],
                  ["Speed", "A calm, step-by-step flow with autosave and guided uploads."],
                  ["Security posture", "Secure-by-default architecture placeholders for V1 and beyond."],
                  ["Support", "Ticket-style support and clear complaint pathways (placeholders)."]
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-border/70 bg-panel/45 p-5">
                    <p className="text-sm font-semibold tracking-tight">{t}</p>
                    <p className="mt-1 text-sm text-muted">{d}</p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-muted">Education</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">CAB clarity — without the jargon</h2>
              <p className="mt-2 text-sm text-muted">
                We explain who does what, what you pay, and what your options are — in plain language.
              </p>
              <ul className="mt-6 grid gap-3">
                {[
                  ["CAB Model Explained", "What a Texas CAB is and how access facilitation works.", "/cab-model-explained"],
                  ["Security & Trust", "How we handle data, what we ask for, and anti-fraud tips.", "/security-trust"],
                  ["Eligibility", "Quick checklist + pre-check experience for Texas.", "/eligibility"]
                ].map(([t, d, href]) => (
                  <li key={t} className="rounded-2xl border border-border/70 bg-panel/45 p-5">
                    <p className="text-sm font-semibold tracking-tight">{t}</p>
                    <p className="mt-1 text-sm text-muted">{d}</p>
                    <Link className="mt-3 inline-block text-sm text-fg underline underline-offset-4" href={href}>
                      Learn more
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Infographic
              variant="cabWhoDoesWhat"
              title="Who does what in the CAB model"
              caption="Dollar Loans facilitates access; a third-party creditor may extend credit if approved."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Customer stories</p>
              <h2 className="text-2xl font-semibold tracking-tight">Social proof — responsibly framed</h2>
              <p className="text-sm text-muted">
                Testimonials are placeholders. No promises, no guaranteed approval claims — just clarity and trust.
              </p>
              {[
                ["“Felt legit from the start.”", "The site explained the CAB model and set expectations clearly."],
                ["“Loved the step-by-step progress.”", "Autosave made it easy to finish when I had time."],
                ["“The cost categories were clear.”", "I understood what I was paying before signing anything."]
              ].map(([q, d]) => (
                <div key={q} className="rounded-2xl border border-border/70 bg-panel/45 p-5">
                  <p className="text-sm font-semibold tracking-tight">{q}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Calculator preview</p>
              <h2 className="text-2xl font-semibold tracking-tight">Estimate education, not hype</h2>
              <p className="text-sm text-muted">
                Use the calculator to explore ranges and “what affects your estimate,” then continue to Get Cash.
              </p>
              <div className="rounded-2xl border border-border/70 bg-panel/45 p-6">
                <p className="text-sm font-semibold tracking-tight">Loan calculator (preview)</p>
                <p className="mt-1 text-sm text-muted">Vehicle year/make/model, mileage, condition, desired amount, term toggles.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ButtonLink href="/calculator">Open calculator</ButtonLink>
                  <ButtonLink variant="secondary" href="/#prequal">
                    Lock your estimate
                  </ButtonLink>
                </div>
              </div>
              <Notice tone="cab" title="Compliance-first transparency panel">
                Estimates are ranges only and not a commitment to extend credit. Dollar Loans is a Texas CAB that facilitates access to credit; a third-party creditor may extend credit if approved.
              </Notice>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">FAQ</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Questions, answered directly</h2>
              <p className="mt-2 max-w-prose text-sm text-muted">
                Transparent, CAB-safe answers. For full disclosure language, see the legal pages.
              </p>
            </div>
            <ButtonLink variant="secondary" href="/faq">
              View all FAQs
            </ButtonLink>
          </div>
          <div className="mt-6">
            <Accordion
              items={[
                {
                  q: "Are you a lender?",
                  a: (
                    <>
                      Dollar Loans is a Texas Credit Access Business (CAB) that facilitates access to credit. A third-party
                      creditor may extend credit if you’re approved.
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
          </div>
        </Container>
      </Section>
    </main>
  );
}
