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

      <Section>
        <Container>
          <div className="flex flex-col gap-4 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">Full FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything You Need to Know</h2>
            <p className="max-w-2xl text-lg text-muted leading-relaxed">
              Find answers to all your questions about our services, the CAB model, and how we can help you access credit.
            </p>
          </div>

          <div className="mb-16">
            <FaqSearch />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-brand2 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
              <div className="relative">
                <Infographic
                  variant="feeComposition"
                  title="Fee categories overview"
                  caption="Example-only category chart used for education."
                />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-brand2 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
              <div className="relative">
                <Infographic
                  variant="securityDataJourney"
                  title="Security & verification journey"
                  caption="A high-level look at what you share and why."
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
