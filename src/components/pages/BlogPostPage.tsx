import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { getPost } from "@/lib/blog";
import { Infographic } from "@/components/infographics/Infographic";

export function BlogPostPage({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main>
      <Section className="pt-10 md:pt-16">
        <Container>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-muted">{new Date(post.date).toLocaleDateString()}</p>
            <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
            <p className="max-w-prose text-base text-muted">{post.excerpt}</p>
            <Link className="text-sm text-muted underline underline-offset-4 hover:text-fg" href="/blog">
              Back to blog
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 md:grid-cols-[1fr_360px]">
          <Card className="p-6">
            <article className="space-y-4">
              {post.body.map((b, i) => {
                if (b.type === "h2") {
                  return (
                    <h2 key={i} className="pt-2 text-xl font-semibold tracking-tight">
                      {b.content as string}
                    </h2>
                  );
                }
                if (b.type === "ul") {
                  return (
                    <ul key={i} className="list-disc space-y-1 pl-5 text-sm text-muted">
                      {(b.content as string[]).map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-sm text-muted">
                    {b.content as string}
                  </p>
                );
              })}
            </article>
          </Card>
          <div className="space-y-6">
            <Infographic variant="cabWhoDoesWhat" title="CAB roles" caption="Plain-language roles diagram (placeholder)." />
            <Infographic variant="feeComposition" title="Cost categories" caption="Category view used for education (placeholder)." />
          </div>
        </Container>
      </Section>
    </main>
  );
}
