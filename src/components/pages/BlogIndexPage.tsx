import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MarketingPageShell } from "@/components/pages/MarketingPageShell";
import { posts } from "@/lib/blog";
import { Infographic } from "@/components/infographics/Infographic";

export function BlogIndexPage() {
  return (
    <main>
      <MarketingPageShell
        title="Blog"
        lead={<>Practical, trust-forward education about the Texas CAB model and the vehicle equity access process.</>}
        primaryCta={{ label: "Check your estimate", href: "/#prequal" }}
        secondaryCta={{ label: "CAB model explained", href: "/cab-model-explained" }}
        sections={[
          {
            eyebrow: "Education",
            title: "Transparency-first content",
            body: (
              <>
                Posts are written in plain language. They don’t promise approval, rates, or timing. They exist to reduce confusion and increase trust.
              </>
            ),
            infographic: { variant: "cabWhoDoesWhat", title: "Roles diagram", caption: "CAB facilitation vs. creditor extension (placeholder)." }
          }
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl border border-border/70 bg-panel/45 p-6 shadow-glow transition hover:bg-panel/60"
              >
                <p className="text-xs text-muted">{new Date(p.date).toLocaleDateString()}</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">{p.title}</h2>
                <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                <p className="mt-4 text-sm text-fg underline underline-offset-4">Read post</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Infographic variant="securityDataJourney" title="Security basics" caption="How data is handled in the process (placeholder)." />
          </div>
        </Container>
      </Section>
    </main>
  );
}

