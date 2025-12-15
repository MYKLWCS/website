import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import type { ReactNode } from "react";

export function LegalPageShell({
  title,
  summary,
  body
}: {
  title: string;
  summary: ReactNode;
  body: ReactNode;
}) {
  return (
    <main>
      <Section className="pt-10 md:pt-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{title}</h1>
          <div className="mt-4 max-w-prose text-base text-muted">{summary}</div>
          <p className="mt-4 text-sm text-muted">
            Quick links:{" "}
            <Link className="underline underline-offset-4 hover:text-fg" href="/legal/cab-disclosures">
              CAB disclosures
            </Link>
            ,{" "}
            <Link className="underline underline-offset-4 hover:text-fg" href="/legal/texas-disclosures">
              Texas disclosures
            </Link>
            ,{" "}
            <Link className="underline underline-offset-4 hover:text-fg" href="/legal/privacy">
              Privacy
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="p-6">
            <div className="space-y-4 text-sm text-muted">{body}</div>
          </Card>
          <p className="mt-4 text-xs text-muted">
            This is a scaffold. Final legal text should be reviewed by qualified counsel and updated for operational reality.
          </p>
        </Container>
      </Section>
    </main>
  );
}
