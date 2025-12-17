"use client";

import { ButtonLink } from "@/components/ui/Button";

export function HomeHero() {

  return (
    <div className="relative">
      {/* Power Headline - Natural & Compelling */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8">
        <span className="block text-fg">Get Cash Using</span>
        <span className="block bg-gradient-to-r from-brand via-brand2 to-brand bg-clip-text text-transparent">
          Your Vehicle
        </span>
      </h1>

      {/* Clear Value Proposition */}
      <p className="text-xl md:text-2xl text-muted leading-relaxed mb-12 max-w-2xl font-medium">
        Fast approval in minutes. Keep your car. Get money in your account the same day.
      </p>

      {/* Simplified CTA Buttons */}
      <div className="flex flex-wrap gap-4 mb-16">
        <ButtonLink href="#prequal" size="lg" className="text-lg font-bold px-12 py-6 shadow-2xl">
          Get Cash Now →
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          size="lg"
          href="/how-it-works"
          className="text-lg font-semibold px-12 py-6"
        >
          How It Works
        </ButtonLink>
      </div>

      {/* Clean Stats - Minimal & Powerful */}
      <div className="grid gap-4 sm:grid-cols-3 max-w-3xl">
        {[
          { value: "$50K", label: "Max Loan Amount" },
          { value: "60 sec", label: "Approval Time" },
          { value: "95%", label: "Approval Rate" }
        ].map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <div className="text-4xl font-black bg-gradient-to-r from-brand to-brand2 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-muted uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

