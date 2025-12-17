"use client";

import { Button } from "@/components/ui/Button";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";

export function HomeHero() {
  return (
    <div className="relative text-center md:text-left">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
        Access Your Vehicle's Equity,
        <br />
        <span className="text-brand">Without the Hassle.</span>
      </h1>

      <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10">
        Dollar Loans provides a transparent, secure, and streamlined way for
        Texans to access the equity tied up in their vehicles. We are a licensed
        Credit Access Business, committed to providing a clear and fair
        process.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
        <Button
          href="#prequal"
          size="lg"
          className="w-full sm:w-auto"
        >
          Get Your Estimate
        </Button>
        <Button
          variant="secondary"
          href="/how-it-works"
          size="lg"
          className="w-full sm:w-auto"
        >
          How It Works
        </Button>
      </div>

      <div className="max-w-xl mx-auto md:mx-0">
        <div className="p-6 rounded-2xl bg-panel/50 border border-border/50">
          <CabMicrocopy />
        </div>
      </div>
    </div>
  );
}
