import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MarketingPageShell } from "@/components/pages/MarketingPageShell";
import { Infographic } from "@/components/infographics/Infographic";
import { FaqSearch } from "@/components/faq/FaqSearch";

export function FaqPage() {
  return (
    <main>
      <MarketingPageShell
        title="FAQ"
        lead={
          <>
            Direct answers in CAB-first language. If you want the full legal text, use the disclosures pages.
          </>
        }
        primaryCta={{ label: "Check your estimate", href: "/#prequal" }}
        secondaryCta={{ label: "CAB model explained", href: "/cab-model-explained" }}
        sections={[
          {
            eyebrow: "Trust",
            title: "CAB clarity in plain language",
            body: (
              <ul className="list-disc space-y-1 pl-5">
                <li>Dollar Loans is a Texas Credit Access Business (CAB) that facilitates access to credit.</li>
                <li>A third-party creditor may extend credit if approved.</li>
                <li>Estimates are ranges only and do not guarantee approval.</li>
              </ul>
            ),
            infographic: {
              variant: "cabWhoDoesWhat",
              title: "CAB model roles",
              caption: "A simple “who does what” diagram (placeholder)."
            }
          },
          {
            eyebrow: "Process",
            title: "What happens in the Get Cash wizard",
            body: (
              <>
                The wizard uses autosave, clear step-by-step progress, guided uploads, and disclosure checkpoints before any agreement is signed.
              </>
            ),
            infographic: {
              variant: "howItWorksFlow",
              title: "Estimate → verify → disclosures → sign",
              caption: "Designed to reduce surprises and increase trust."
            }
          }
        ]}
      />

      <Section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-panel/20 via-white to-panel/30"></div>
        <div className="absolute top-1/4 left-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand/8 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>

        <Container className="relative">
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/20 mb-8 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Full FAQ</p>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 bg-gradient-to-br from-fg to-fg/70 bg-clip-text text-transparent">
                Everything You Need to Know
              </h2>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
                Find answers to all your questions about our services, the CAB model, and how we can help you access credit.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand/15 via-brand2/15 to-brand/15 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <FaqSearch />
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand2 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative p-8 rounded-3xl border-2 border-border bg-white hover:border-brand/30 hover:shadow-[0_30px_60px_rgb(var(--brand)/0.15)] transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand/20 to-brand2/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand to-brand2"></div>
                  </div>
                </div>
                <div className="graphic-float transform group-hover:scale-105 transition-transform duration-700">
                  <Infographic
                    variant="feeComposition"
                    title="Fee categories overview"
                    caption="Example-only category chart used for education."
                  />
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand2 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="relative p-8 rounded-3xl border-2 border-border bg-white hover:border-brand/30 hover:shadow-[0_30px_60px_rgb(var(--brand)/0.15)] transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand/20 to-brand2/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand to-brand2"></div>
                  </div>
                </div>
                <div className="graphic-float transform group-hover:scale-105 transition-transform duration-700">
                  <Infographic
                    variant="securityDataJourney"
                    title="Security & verification journey"
                    caption="A high-level look at what you share and why."
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
