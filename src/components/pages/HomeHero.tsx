"use client";

import { ButtonLink } from "@/components/ui/Button";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";
import { Metric } from "@/components/common/Metric";
import { useExperiments } from "@/components/experiments/ExperimentProvider";

export function HomeHero() {
  const { hero } = useExperiments();
  const heroCopy = heroVariantCopy(hero);

  return (
    <div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8">
        <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Texas Credit Access Business</p>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
        {heroCopy.headline}
      </h1>

      <p className="text-xl md:text-2xl text-muted leading-relaxed mb-10 max-w-2xl">
        {heroCopy.subheadline}
      </p>

      <div className="flex flex-wrap gap-4 mb-10">
        <ButtonLink href="#prequal" size="lg">{heroCopy.primaryCta}</ButtonLink>
        <ButtonLink variant="secondary" size="lg" href={heroCopy.secondaryHref}>
          {heroCopy.secondaryCta}
        </ButtonLink>
      </div>

      <div className="p-6 rounded-2xl bg-panel/30 border border-border mb-8">
        <CabMicrocopy />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-brand"></div>
          </div>
          <p className="font-bold text-base">Big‑company trust</p>
          <p className="text-sm text-muted">Modern UX + compliance-first</p>
        </div>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-brand"></div>
          </div>
          <p className="font-bold text-base">Get Cash</p>
          <p className="text-sm text-muted">Wizard flow with autosave</p>
        </div>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-brand"></div>
          </div>
          <p className="font-bold text-base">Fee taxonomy</p>
          <p className="text-sm text-muted">Plain-language categories</p>
        </div>
      </div>
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

