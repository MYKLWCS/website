"use client";

import { ButtonLink } from "@/components/ui/Button";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";
import { Metric } from "@/components/common/Metric";
import { useExperiments } from "@/components/experiments/ExperimentProvider";

export function HomeHero() {
  const { hero } = useExperiments();
  const heroCopy = heroVariantCopy(hero);

  return (
    <div className="relative">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-brand/10 via-brand2/5 to-brand/10 border-2 border-brand/30 mb-10 backdrop-blur-sm shadow-lg hover:shadow-[0_10px_30px_rgb(var(--brand)/0.2)] transition-all duration-300">
        <div className="relative">
          <div className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse"></div>
          <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-brand animate-ping opacity-75"></div>
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Texas Credit Access Business</p>
      </div>

      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-10 bg-gradient-to-br from-fg via-fg to-fg/80 bg-clip-text text-transparent animate-fade-in-up">
        {heroCopy.headline}
      </h1>

      <p className="text-2xl md:text-3xl text-muted leading-relaxed mb-12 max-w-2xl animate-fade-in-up animation-delay-100">
        {heroCopy.subheadline}
      </p>

      <div className="flex flex-wrap gap-5 mb-12 animate-fade-in-up animation-delay-200">
        <ButtonLink
          href="#prequal"
          size="lg"
          className="text-lg px-10 py-4 shadow-[0_20px_50px_rgb(var(--brand)/0.25)] hover:shadow-[0_25px_60px_rgb(var(--brand)/0.35)] hover:scale-105 transition-all duration-300"
        >
          {heroCopy.primaryCta}
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          size="lg"
          href={heroCopy.secondaryHref}
          className="text-lg px-10 py-4 hover:shadow-[0_20px_50px_rgb(var(--brand)/0.15)] hover:scale-105 transition-all duration-300"
        >
          {heroCopy.secondaryCta}
        </ButtonLink>
      </div>

      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-panel/50 via-white/50 to-panel/30 border-2 border-border/50 mb-12 backdrop-blur-sm shadow-lg hover:shadow-[0_20px_50px_rgb(0,0,0,0.05)] transition-all duration-500 animate-fade-in-up animation-delay-300">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-brand/10 to-transparent rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand2/10 to-transparent rounded-br-3xl"></div>
        <div className="relative">
          <CabMicrocopy />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3 animate-fade-in-up animation-delay-400">
        {[
          ["Big-company trust", "Modern UX + compliance-first"],
          ["Get Cash", "Wizard flow with autosave"],
          ["Fee taxonomy", "Plain-language categories"]
        ].map(([title, desc], i) => (
          <div key={title} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-brand to-brand2 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
            <div className="relative space-y-3 p-6 rounded-2xl border-2 border-border/30 bg-white/50 backdrop-blur-sm hover:border-brand/40 hover:shadow-[0_15px_40px_rgb(var(--brand)/0.1)] transition-all duration-500 h-full group-hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand2/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand to-brand2 shadow-md"></div>
              </div>
              <p className="font-bold text-lg text-fg group-hover:text-brand transition-colors duration-300">{title}</p>
              <p className="text-base text-muted leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
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

