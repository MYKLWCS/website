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
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Full FAQ</p>
            <h2 className="text-2xl font-semibold tracking-tight">Everything you’re likely to ask</h2>
            <p className="max-w-prose text-sm text-muted">
              This section is intentionally comprehensive for trust. It’s still a scaffold and should be reviewed for compliance before launch.
            </p>
          </div>

          <div className="mt-6">
            <FaqSearch />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Infographic
              variant="feeComposition"
              title="Fee categories overview"
              caption="Example-only category chart used for education."
            />
            <Infographic
              variant="securityDataJourney"
              title="Security & verification journey"
              caption="A high-level look at what you share and why."
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
