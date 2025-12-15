import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";
import { Infographic } from "@/components/infographics/Infographic";
import type { ComponentProps, ReactNode } from "react";

export type MarketingSection = {
  eyebrow?: string;
  title: string;
  body: ReactNode;
  infographic?: ComponentProps<typeof Infographic>;
};

export function MarketingPageShell({
  title,
  lead,
  primaryCta,
  secondaryCta,
  sections
}: {
  title: string;
  lead: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sections: MarketingSection[];
}) {
  return (
    <main>
      <Section className="pt-10 md:pt-16">
        <Container>
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Dollar Loans • Texas CAB</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight">{title}</h1>
              <div className="mt-4 max-w-prose text-base text-muted">{lead}</div>
              <div className="mt-6 flex flex-wrap gap-3">
                {primaryCta ? <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink> : null}
                {secondaryCta ? (
                  <ButtonLink variant="secondary" href={secondaryCta.href}>
                    {secondaryCta.label}
                  </ButtonLink>
                ) : null}
              </div>
              <div className="mt-6">
                <CabMicrocopy />
              </div>
            </div>
            <Card className="p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Quick links</p>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ["/", "Home + pre-qualify"],
                  ["/rates-fees", "Rates & fee categories"],
                  ["/cab-model-explained", "CAB model explained"],
                  ["/security-trust", "Security & trust"],
                  ["/auth/login", "Login"]
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link className="underline decoration-border/60 underline-offset-4 hover:text-fg" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-border/60 bg-white/5 p-4">
                <p className="text-sm font-semibold tracking-tight">CAB-safe language, by design</p>
                <p className="mt-1 text-sm text-muted">
                  Pages avoid “we lend” positioning and pair estimate language with non-guarantee microcopy.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {sections.map((s) => (
        <Section key={s.title}>
          <Container>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                {s.eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">{s.eyebrow}</p>
                ) : null}
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">{s.title}</h2>
                <div className="mt-3 text-sm text-muted">{s.body}</div>
              </div>
              {s.infographic ? (
                <Infographic {...s.infographic} />
              ) : (
                <div className="rounded-2xl border border-border/70 bg-panel/45 p-6">
                  <p className="text-sm font-semibold tracking-tight">Infographic placeholder</p>
                  <p className="mt-1 text-sm text-muted">
                    Add 1–3 educational visuals per page (flow diagrams, cost charts, security journey, etc.).
                  </p>
                </div>
              )}
            </div>
          </Container>
        </Section>
      ))}
    </main>
  );
}
