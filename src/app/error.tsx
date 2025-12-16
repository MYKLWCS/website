"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-8">
            <div className="text-brand text-4xl font-bold">!</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Something went wrong
          </h1>
          <p className="text-lg text-muted mb-10">
            We encountered an unexpected error. Please try again.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <ButtonLink href="/" size="lg">Go home</ButtonLink>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold rounded-xl border-2 border-border bg-white hover:border-brand/20 hover:shadow-xl transition-all duration-300"
            >
              Try again
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
