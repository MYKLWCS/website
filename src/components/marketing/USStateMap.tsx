"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";

export function USStateMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const isTexas = hoveredState === "TX";
  const isAvailable = isTexas;

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/30 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse"></div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand">Service Area</p>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-fg to-fg/70 bg-clip-text text-transparent leading-[1.1]">
          Now Servicing Texas
        </h2>
        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl mx-auto">
          {hoveredState === "TX" ? (
            <span className="text-ok font-bold">✓ Available in Texas! Click to apply now</span>
          ) : hoveredState ? (
            <span className="text-danger font-bold">Not yet available in {hoveredState}. Stay tuned!</span>
          ) : (
            "Hover over your state to check availability"
          )}
        </p>
      </div>

      {/* US Map SVG - Proper Geographic Layout */}
      <div className="max-w-5xl mx-auto">
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Proper US Map with Geographic Accuracy */}

          {/* West Coast */}
          <path
            d="M50 150 L60 130 L75 120 L85 135 L95 155 L100 180 L105 220 L110 260 L105 290 L95 310 L85 320 L75 315 L65 295 L55 260 L50 220 Z"
            className={`transition-all duration-300 cursor-pointer ${
              hoveredState === "CA"
                ? "fill-danger/60 stroke-danger stroke-2"
                : "fill-muted/20 stroke-muted/40 hover:fill-muted/40"
            }`}
            onMouseEnter={() => setHoveredState("CA")}
            onMouseLeave={() => setHoveredState(null)}
          />

          {/* Pacific Northwest - OR/WA */}
          <path
            d="M60 80 L90 75 L110 85 L115 110 L110 130 L95 140 L75 135 L65 120 L60 100 Z"
            className={`transition-all duration-300 cursor-pointer ${
              hoveredState === "WA"
                ? "fill-danger/60 stroke-danger stroke-2"
                : "fill-muted/20 stroke-muted/40 hover:fill-muted/40"
            }`}
            onMouseEnter={() => setHoveredState("WA")}
            onMouseLeave={() => setHoveredState(null)}
          />

          {/* Mountain West - MT/ID/WY/NV/UT/CO/AZ/NM */}
          <path
            d="M120 100 L180 95 L240 100 L245 150 L240 200 L180 205 L120 200 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />
          <path
            d="M120 210 L180 215 L240 220 L245 280 L240 320 L180 315 L120 310 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />
          <path
            d="M120 320 L180 325 L240 330 L235 390 L180 385 L120 380 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />

          {/* Midwest - ND/SD/NE/KS/MN/IA/MO */}
          <path
            d="M250 100 L350 95 L355 150 L350 200 L250 205 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />
          <path
            d="M250 210 L350 215 L355 280 L350 320 L250 315 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />

          {/* TEXAS (Prominent and Accurate) */}
          <a href={isTexas ? "/#prequal" : undefined}>
            <path
              d="M250 330 L350 335 L380 340 L400 360 L410 390 L420 430 L410 470 L390 490 L360 495 L320 490 L280 475 L250 450 L240 410 L245 370 Z"
              className={`transition-all duration-300 cursor-pointer ${
                hoveredState === "TX"
                  ? "fill-ok stroke-ok stroke-[3]"
                  : "fill-brand/20 stroke-brand stroke-2 hover:fill-brand/40"
              }`}
              onMouseEnter={() => setHoveredState("TX")}
              onMouseLeave={() => setHoveredState(null)}
            />
          </a>

          {/* Oklahoma */}
          <path
            d="M250 280 L380 285 L385 330 L250 325 Z"
            className={`transition-all duration-300 cursor-pointer ${
              hoveredState === "OK"
                ? "fill-danger/60 stroke-danger stroke-2"
                : "fill-muted/20 stroke-muted/40 hover:fill-muted/40"
            }`}
            onMouseEnter={() => setHoveredState("OK")}
            onMouseLeave={() => setHoveredState(null)}
          />

          {/* Arkansas/Louisiana */}
          <path
            d="M390 340 L450 345 L455 400 L450 440 L420 445 L390 435 L385 385 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />
          <path
            d="M390 450 L450 455 L450 500 L410 505 L390 495 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />

          {/* Great Lakes - WI/MI/IL/IN/OH */}
          <path
            d="M360 150 L480 145 L485 200 L480 240 L360 235 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />
          <path
            d="M360 245 L480 250 L485 310 L360 305 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />

          {/* South - MS/AL/TN/KY */}
          <path
            d="M460 320 L580 325 L585 380 L580 420 L460 415 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />

          {/* Southeast - GA/SC/NC */}
          <path
            d="M590 330 L680 335 L690 380 L685 420 L590 415 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />

          {/* Florida */}
          <path
            d="M690 430 L720 435 L740 460 L745 490 L740 520 L720 540 L700 535 L690 510 L685 475 L685 445 Z"
            className={`transition-all duration-300 cursor-pointer ${
              hoveredState === "FL"
                ? "fill-danger/60 stroke-danger stroke-2"
                : "fill-muted/20 stroke-muted/40 hover:fill-muted/40"
            }`}
            onMouseEnter={() => setHoveredState("FL")}
            onMouseLeave={() => setHoveredState(null)}
          />

          {/* Mid-Atlantic - VA/WV/MD/DE */}
          <path
            d="M690 280 L760 285 L765 330 L690 325 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />

          {/* Northeast - PA/NJ/NY */}
          <path
            d="M690 200 L770 205 L780 250 L775 280 L690 275 Z"
            className={`transition-all duration-300 cursor-pointer ${
              hoveredState === "NY"
                ? "fill-danger/60 stroke-danger stroke-2"
                : "fill-muted/20 stroke-muted/40 hover:fill-muted/40"
            }`}
            onMouseEnter={() => setHoveredState("NY")}
            onMouseLeave={() => setHoveredState(null)}
          />

          {/* New England - CT/RI/MA/VT/NH/ME */}
          <path
            d="M780 120 L820 115 L840 130 L845 160 L840 190 L780 185 Z"
            className="fill-muted/20 stroke-muted/40 transition-all duration-300"
          />

          {/* State Labels */}
          <text x="340" y="420" className="text-2xl font-black fill-fg pointer-events-none" textAnchor="middle">
            TX
          </text>
        </svg>

        {/* CTA Below Map */}
        {isTexas && (
          <div className="mt-12 flex justify-center animate-fade-in-up">
            <ButtonLink href="/#prequal" size="lg" className="text-lg font-bold px-16 py-6 shadow-2xl">
              Get Your Loan in Texas →
            </ButtonLink>
          </div>
        )}

        {/* Coming Soon Message */}
        {!isTexas && (
          <div className="mt-12 text-center">
            <p className="text-sm text-muted font-semibold">
              Currently serving Texas only. More states coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
