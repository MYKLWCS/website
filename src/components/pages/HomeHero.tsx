"use client";

import { ButtonLink } from "@/components/ui/Button";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";
import { Metric } from "@/components/common/Metric";
import { useExperiments } from "@/components/experiments/ExperimentProvider";

export function HomeHero() {
  const { hero } = useExperiments();
  const heroCopy = heroVariantCopy(hero);

  return (
    <div className="pt-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">Texas • Credit Access Business</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{heroCopy.headline}</h1>
      <p className="mt-4 max-w-prose text-base text-muted">{heroCopy.subheadline}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href="#prequal">{heroCopy.primaryCta}</ButtonLink>
        <ButtonLink variant="secondary" href={heroCopy.secondaryHref}>
          {heroCopy.secondaryCta}
        </ButtonLink>
      </div>
      <div className="mt-6">
        <CabMicrocopy />
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        <Metric label="Experience goal" value="Big‑company trust" hint="Modern UX + compliance-first copy." />
        <Metric label="Primary CTA" value="Get Cash" hint="Wizard-style flow with autosave." />
        <Metric label="Transparency" value="Fee taxonomy" hint="Plain-language categories + examples." />
      </div>
      <p className="mt-4 text-xs text-muted">Hero variant: {hero} (A/B scaffold; override with `?exp_hero=A`…`E`).</p>
    </div>
  );
}

function heroVariantCopy(hero: "A" | "B" | "C" | "D" | "E") {
  switch (hero) {
    case "B":
      return {
        headline: "Vehicle equity access, delivered with big-company trust.",
        subheadline:
          "CAB-first clarity, transparent cost categories, and a fast estimate range — designed to reduce surprises.",
        primaryCta: "Check Your Estimate",
        secondaryCta: "How it works",
        secondaryHref: "/how-it-works"
      };
    case "C":
      return {
        headline: "A modern, disclosure-first path to vehicle equity access.",
        subheadline:
          "Start with a non-guarantee estimate range, then continue with guided verification and CAB disclosures before signing.",
        primaryCta: "Get Cash (estimate)",
        secondaryCta: "Rates & fees",
        secondaryHref: "/rates-fees"
      };
    case "D":
      return {
        headline: "Fast estimate. Clear steps. CAB-first transparency.",
        subheadline:
          "A premium Texas CAB experience with autosave, guided uploads, and plain-language education built in.",
        primaryCta: "Check Your Estimate",
        secondaryCta: "Security & trust",
        secondaryHref: "/security-trust"
      };
    case "E":
      return {
        headline: "Premium vehicle equity access — calm, transparent, and built to feel legit.",
        subheadline:
          "Dollar Loans facilitates access to credit through a Texas Credit Access Business (CAB) model. Approval and terms are not guaranteed.",
        primaryCta: "Check Your Estimate",
        secondaryCta: "CAB model explained",
        secondaryHref: "/cab-model-explained"
      };
    default:
      return {
        headline: "Premium vehicle equity access — fast, transparent, CAB-first.",
        subheadline:
          "Dollar Loans facilitates access to credit through a Texas CAB model. Clear steps, clear cost categories, and a modern, secure application experience.",
        primaryCta: "Check Your Estimate",
        secondaryCta: "CAB model explained",
        secondaryHref: "/cab-model-explained"
      };
  }
}

