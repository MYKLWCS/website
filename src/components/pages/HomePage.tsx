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

      <Section className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-glow"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand/10 via-brand2/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand2/8 to-transparent rounded-full blur-3xl"></div>

        <Container className="relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <HomeHero />
            </div>
            <div id="prequal" className="scroll-mt-28 animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand via-brand2 to-brand rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative">
                  <PrequalMiniWizard />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 animate-fade-in-up animation-delay-400">
            <TrustStrip />
          </div>
        </Container>
      </Section>

      <Section className="relative bg-gradient-to-b from-white via-panel/30 to-white py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(var(--brand)/0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgb(var(--brand2)/0.05),transparent_50%)]"></div>

        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/20 mb-6 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Simple Process</p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-br from-fg via-fg to-fg/80 bg-clip-text text-transparent">
              Get cash in 3 easy steps
            </h2>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl mx-auto">
              Fast, transparent, and designed with your trust in mind
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              ["1", "Check your estimate", "Enter vehicle details + desired amount for an instant range estimate"],
              ["2", "Verify details", "Upload photos and documents for quick verification"],
              ["3", "Review + sign", "Review CAB disclosures and e-sign to get funded"]
            ].map(([n, t, d], i) => (
              <div key={t} className="group relative animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="absolute -inset-1 bg-gradient-to-br from-brand via-brand2 to-brand rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative rounded-3xl border-2 border-border bg-white p-10 transition-all duration-500 group-hover:border-brand/50 group-hover:shadow-[0_20px_60px_rgb(var(--brand)/0.15)] group-hover:-translate-y-2 h-full">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand via-brand to-brand2 text-white font-bold text-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                    <span className="relative">{n}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4 text-fg group-hover:text-brand transition-colors duration-300">{t}</h3>
                  <p className="text-base text-muted leading-relaxed">{d}</p>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand/5 to-transparent rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 text-sm text-muted">
              <div className="flex -space-x-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-brand to-brand2 border-2 border-white"></div>
                ))}
              </div>
              <span className="font-semibold">Join 1,000+ Texans who trusted this process</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-panel/50 via-white to-panel/30"></div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-brand/10 to-transparent rounded-full blur-3xl -translate-y-1/2"></div>

        <Container className="relative">
          <div className="grid gap-24 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative graphic-container">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand2/10 rounded-3xl blur-2xl"></div>
                <div className="relative graphic-float w-full transform hover:scale-105 transition-transform duration-700">
                  <Infographic
                    variant="howItWorksFlow"
                    title="From estimate to agreement"
                    caption="A simple, disclosure-forward flow designed for speed and clarity."
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/20 mb-8 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">How it works</p>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 leading-[1.1] bg-gradient-to-br from-fg to-fg/70 bg-clip-text text-transparent">
                A calm, predictable process
              </h2>
              <p className="text-xl md:text-2xl text-muted leading-relaxed mb-14">
                You start with an estimate range. If you continue, we will collect the information needed to facilitate
                access and present CAB disclosures before any agreement is signed.
              </p>

              <div className="space-y-4 mb-14">
                {[
                  ["Estimate range", "Vehicle basics and desired amount"],
                  ["Verify", "Upload photos and provide details"],
                  ["Offer + disclosures", "Review fee categories and CAB info"],
                  ["E-sign + funding", "Sign and track your funding"]
                ].map(([t, d], i) => (
                  <div key={t} className="group flex gap-5 p-7 rounded-2xl border-2 border-border/50 bg-white hover:border-brand/30 hover:shadow-[0_20px_50px_rgb(var(--brand)/0.1)] transition-all duration-500 hover:-translate-x-1">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand/20 to-brand2/20 group-hover:from-brand group-hover:to-brand2 transition-all duration-500">
                      <div className="w-3 h-3 rounded-full bg-brand group-hover:bg-white transition-colors duration-500"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg mb-2 text-fg group-hover:text-brand transition-colors duration-300">{t}</p>
                      <p className="text-base text-muted leading-relaxed">{d}</p>
                    </div>
                    <div className="flex-shrink-0 text-brand opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xl">→</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                <ButtonLink href="/how-it-works" size="lg" className="shadow-lg hover:shadow-[0_20px_40px_rgb(var(--brand)/0.25)] transition-shadow duration-300">
                  Explore the steps
                </ButtonLink>
                <ButtonLink variant="tertiary" href="/rates-fees" size="lg" className="hover:shadow-lg transition-shadow duration-300">
                  See rates
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative bg-gradient-to-b from-white via-panel/40 to-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgb(var(--brand)/0.08),transparent_60%)]"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-brand2/10 to-transparent rounded-full blur-3xl"></div>

        <Container className="relative">
          <div className="grid gap-24 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/20 mb-8 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Why Dollar Loans</p>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 leading-[1.1] bg-gradient-to-br from-fg to-fg/70 bg-clip-text text-transparent">
                Built like a big-company fintech
              </h2>
              <p className="text-xl md:text-2xl text-muted leading-relaxed mb-16">
                Premium visuals, predictable steps, and disclosure-first clarity.
              </p>

              <div className="grid gap-6 sm:grid-cols-2 mb-16">
                {[
                  ["Transparency", "Fee categories in plain language"],
                  ["Speed", "Step-by-step flow with autosave"],
                  ["Security", "Secure-by-default architecture"],
                  ["Support", "Clear complaint pathways"]
                ].map(([t, d], i) => (
                  <div key={t} className="group relative" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-brand to-brand2 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                    <div className="relative p-8 rounded-2xl border-2 border-border/50 bg-white hover:border-brand/40 hover:shadow-[0_20px_50px_rgb(var(--brand)/0.1)] transition-all duration-500 h-full group-hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand/20 to-brand2/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand via-brand2 to-brand shadow-lg"></div>
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-fg group-hover:text-brand transition-colors duration-300">{t}</h3>
                      <p className="text-base text-muted leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  ["CAB Model Explained", "How access facilitation works", "/cab-model-explained"],
                  ["Security & Trust", "How we handle your data", "/security-trust"],
                  ["Eligibility", "Pre-check for Texas", "/eligibility"]
                ].map(([t, d, href]) => (
                  <Link
                    key={t}
                    href={href}
                    className="group flex items-center justify-between p-7 rounded-2xl border-2 border-border/50 bg-white hover:border-brand/30 hover:shadow-[0_20px_50px_rgb(var(--brand)/0.1)] transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="flex-1">
                      <p className="font-bold text-lg mb-2 text-fg group-hover:text-brand transition-colors duration-300">{t}</p>
                      <p className="text-base text-muted">{d}</p>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 group-hover:bg-brand text-brand group-hover:text-white transition-all duration-300 text-2xl group-hover:translate-x-1">
                      →
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="relative graphic-container">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-brand2/15 rounded-3xl blur-3xl"></div>
                <div className="relative graphic-float w-full glow-subtle transform hover:scale-105 transition-transform duration-700">
                  <Infographic
                    variant="cabWhoDoesWhat"
                    title="Who does what in the CAB model"
                    caption="Dollar Loans facilitates access; a third-party creditor may extend credit if approved."
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-panel/30 via-white to-panel/20"></div>
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand/10 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>

        <Container className="relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/20 mb-8 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Customer stories</p>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 bg-gradient-to-br from-fg to-fg/70 bg-clip-text text-transparent">
                Trusted by Texans
              </h2>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
                Real feedback from customers who value transparency and clarity.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {[
                ["Felt legit from the start", "The site explained the CAB model clearly."],
                ["Loved the progress tracking", "Autosave made it easy to finish later."],
                ["Cost categories were clear", "I understood everything before signing."]
              ].map(([q, d], i) => (
                <div key={q} className="group relative" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-brand to-brand2 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                  <div className="relative p-10 rounded-3xl border-2 border-border/50 bg-white hover:border-brand/40 hover:shadow-[0_30px_60px_rgb(var(--brand)/0.15)] transition-all duration-500 h-full group-hover:-translate-y-2">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/10 to-brand2/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className="text-brand text-3xl font-serif">"</div>
                    </div>
                    <p className="font-bold text-xl mb-4 text-fg group-hover:text-brand transition-colors duration-300 leading-tight">{q}</p>
                    <p className="text-base text-muted leading-relaxed">{d}</p>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand/5 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mb-16">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand2 border-3 border-white shadow-lg"></div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold text-lg">4.9/5</span>
                </div>
                <p className="text-sm text-muted">Rated by 1,200+ customers</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative p-8 rounded-3xl border-2 border-brand/30 bg-gradient-to-br from-brand/5 via-white to-brand2/5 shadow-[0_20px_50px_rgb(var(--brand)/0.1)]">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-brand/20 to-transparent rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-brand2/20 to-transparent rounded-br-3xl"></div>
                <Notice tone="cab" title="Compliance-first transparency" className="!p-0 !bg-transparent !border-0">
                  Estimates are ranges only and not a commitment to extend credit. Dollar Loans is a Texas CAB that facilitates access to credit; a third-party creditor may extend credit if approved.
                </Notice>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative bg-gradient-to-b from-panel/20 via-white to-panel/30 py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgb(var(--brand)/0.05),transparent_70%)]"></div>
        <div className="absolute bottom-0 left-1/2 w-[700px] h-[350px] bg-gradient-to-t from-brand2/10 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>

        <Container className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/20 mb-8 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">FAQ</p>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 bg-gradient-to-br from-fg to-fg/70 bg-clip-text text-transparent">
                Questions, answered directly
              </h2>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl mx-auto">
                Transparent, CAB-safe answers.
              </p>
            </div>

            <div className="mb-12">
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
            </div>

            <div className="text-center">
              <div className="inline-flex flex-col gap-4">
                <ButtonLink variant="secondary" href="/faq" size="lg" className="shadow-lg hover:shadow-[0_20px_40px_rgb(var(--brand)/0.15)] transition-all duration-300">
                  View all FAQs
                </ButtonLink>
                <p className="text-sm text-muted">
                  Or <a href="/contact" className="text-brand font-semibold hover:underline underline-offset-4">get in touch</a> with our support team
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
