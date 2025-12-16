import { cn } from "@/lib/cn";

type Variant =
  | "howItWorksFlow"
  | "cabWhoDoesWhat"
  | "feeComposition"
  | "eligibilityDecisionTree"
  | "vehicleValueHeatmap"
  | "securityDataJourney"
  | "lifecycleTimeline";

export function Infographic({
  variant,
  title,
  caption,
  className
}: {
  variant: Variant;
  title: string;
  caption?: string;
  className?: string;
}) {
  return (
    <section className={cn("rounded-2xl border border-border/70 bg-panel/45 p-5 shadow-sm", className)}>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Infographic</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3>
          {caption ? <p className="mt-1 text-sm text-muted">{caption}</p> : null}
        </div>
        <div className="hidden h-10 w-10 rounded-xl border border-border/60 bg-white/5 md:block" />
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-border/60 bg-bg/30">
        <svg viewBox="0 0 900 220" className="h-[220px] w-full">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="rgba(90,212,255,0.35)" />
              <stop offset="1" stopColor="rgba(139,92,246,0.35)" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="900" height="220" fill="rgba(0,0,0,0)" />
          {variant === "howItWorksFlow" ? <HowItWorksFlow /> : null}
          {variant === "cabWhoDoesWhat" ? <CabWhoDoesWhat /> : null}
          {variant === "feeComposition" ? <FeeComposition /> : null}
          {variant === "eligibilityDecisionTree" ? <EligibilityTree /> : null}
          {variant === "vehicleValueHeatmap" ? <VehicleHeatmap /> : null}
          {variant === "securityDataJourney" ? <SecurityJourney /> : null}
          {variant === "lifecycleTimeline" ? <LifecycleTimeline /> : null}
        </svg>
      </div>
      <p className="mt-3 text-xs text-muted">
        Placeholder visualization (V1). Final diagrams should be reviewed for Texas CAB disclosure alignment.
      </p>
    </section>
  );
}

function Node({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={14} fill="url(#g)" stroke="rgba(255,255,255,0.2)" />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="12" fill="rgba(242,244,248,0.9)">
        {label}
      </text>
    </g>
  );
}

function Edge({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="rgba(167,176,198,0.7)" strokeWidth="2" />;
}

function HowItWorksFlow() {
  return (
    <g>
      <Edge x1={120} y1={110} x2={260} y2={110} />
      <Edge x1={320} y1={110} x2={460} y2={110} />
      <Edge x1={520} y1={110} x2={660} y2={110} />
      <Edge x1={720} y1={110} x2={840} y2={110} />
      <Node x={120} y={110} label="1" />
      <Node x={320} y={110} label="2" />
      <Node x={520} y={110} label="3" />
      <Node x={720} y={110} label="4" />
      <text x={120} y={155} textAnchor="middle" fontSize="12" fill="rgba(167,176,198,0.95)">
        Estimate
      </text>
      <text x={320} y={155} textAnchor="middle" fontSize="12" fill="rgba(167,176,198,0.95)">
        Verify
      </text>
      <text x={520} y={155} textAnchor="middle" fontSize="12" fill="rgba(167,176,198,0.95)">
        Offer
      </text>
      <text x={720} y={155} textAnchor="middle" fontSize="12" fill="rgba(167,176,198,0.95)">
        Sign
      </text>
    </g>
  );
}

function CabWhoDoesWhat() {
  return (
    <g>
      <rect x="90" y="60" width="240" height="110" rx="16" fill="rgba(90,212,255,0.10)" stroke="rgba(90,212,255,0.35)" />
      <rect x="570" y="60" width="240" height="110" rx="16" fill="rgba(139,92,246,0.10)" stroke="rgba(139,92,246,0.35)" />
      <path d="M330 115 C420 70, 480 70, 570 115" fill="none" stroke="rgba(167,176,198,0.7)" strokeWidth="2" />
      <path d="M570 115 C480 160, 420 160, 330 115" fill="none" stroke="rgba(167,176,198,0.35)" strokeWidth="2" />
      <text x="210" y="95" textAnchor="middle" fontSize="14" fill="rgba(242,244,248,0.95)">
        Dollar Loans (CAB)
      </text>
      <text x="210" y="120" textAnchor="middle" fontSize="12" fill="rgba(167,176,198,0.95)">
        Facilitates access + disclosures
      </text>
      <text x="690" y="95" textAnchor="middle" fontSize="14" fill="rgba(242,244,248,0.95)">
        Third-party creditor
      </text>
      <text x="690" y="120" textAnchor="middle" fontSize="12" fill="rgba(167,176,198,0.95)">
        Extends credit (if approved)
      </text>
    </g>
  );
}

function FeeComposition() {
  return (
    <g>
      <rect x="90" y="60" width="720" height="28" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <rect x="90" y="60" width="330" height="28" rx="14" fill="rgba(90,212,255,0.22)" />
      <rect x="420" y="60" width="240" height="28" fill="rgba(139,92,246,0.22)" />
      <rect x="660" y="60" width="150" height="28" rx="14" fill="rgba(255,201,71,0.20)" />
      <text x="90" y="120" fontSize="12" fill="rgba(167,176,198,0.95)">
        Example fee categories (placeholders): CAB access fee, creditor charge(s), and third-party costs if applicable.
      </text>
    </g>
  );
}

function EligibilityTree() {
  return (
    <g>
      <rect x="120" y="40" width="260" height="54" rx="14" fill="rgba(90,212,255,0.10)" stroke="rgba(90,212,255,0.35)" />
      <text x="250" y="72" textAnchor="middle" fontSize="12" fill="rgba(242,244,248,0.95)">
        Texas resident + vehicle owner?
      </text>
      <path d="M250 94 L250 132" stroke="rgba(167,176,198,0.6)" strokeWidth="2" />
      <rect x="90" y="132" width="320" height="54" rx="14" fill="rgba(139,92,246,0.10)" stroke="rgba(139,92,246,0.35)" />
      <text x="250" y="165" textAnchor="middle" fontSize="12" fill="rgba(242,244,248,0.95)">
        Title status + income verification
      </text>
      <text x="460" y="160" fontSize="12" fill="rgba(167,176,198,0.95)">
        → Continue to estimate
      </text>
    </g>
  );
}

function VehicleHeatmap() {
  return (
    <g>
      {Array.from({ length: 12 }).map((_, i) => {
        const x = 120 + (i % 6) * 110;
        const y = 60 + Math.floor(i / 6) * 70;
        const intensity = (i + 1) / 12;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="90"
            height="50"
            rx="12"
            fill={`rgba(90,212,255,${0.06 + intensity * 0.18})`}
            stroke="rgba(255,255,255,0.10)"
          />
        );
      })}
      <text x="120" y="180" fontSize="12" fill="rgba(167,176,198,0.95)">
        Factors (placeholder): year, mileage, condition, title status, demand, verification.
      </text>
    </g>
  );
}

function SecurityJourney() {
  return (
    <g>
      <rect x="90" y="60" width="180" height="80" rx="16" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <rect x="360" y="60" width="180" height="80" rx="16" fill="rgba(90,212,255,0.10)" stroke="rgba(90,212,255,0.35)" />
      <rect x="630" y="60" width="180" height="80" rx="16" fill="rgba(139,92,246,0.10)" stroke="rgba(139,92,246,0.35)" />
      <path d="M270 100 L360 100" stroke="rgba(167,176,198,0.6)" strokeWidth="2" />
      <path d="M540 100 L630 100" stroke="rgba(167,176,198,0.6)" strokeWidth="2" />
      <text x="180" y="102" textAnchor="middle" fontSize="12" fill="rgba(242,244,248,0.95)">
        You
      </text>
      <text x="450" y="102" textAnchor="middle" fontSize="12" fill="rgba(242,244,248,0.95)">
        Secure intake
      </text>
      <text x="720" y="102" textAnchor="middle" fontSize="12" fill="rgba(242,244,248,0.95)">
        Storage + review
      </text>
    </g>
  );
}

function LifecycleTimeline() {
  return (
    <g>
      <path d="M120 110 L780 110" stroke="rgba(167,176,198,0.55)" strokeWidth="2" />
      {[
        ["Application", 140],
        ["Docs", 290],
        ["Offer", 440],
        ["E-sign", 590],
        ["Funding", 740]
      ].map(([label, x]) => (
        <g key={label}>
          <circle cx={x as number} cy={110} r={10} fill="url(#g)" stroke="rgba(255,255,255,0.2)" />
          <text x={x as number} y={145} textAnchor="middle" fontSize="12" fill="rgba(167,176,198,0.95)">
            {label as string}
          </text>
        </g>
      ))}
    </g>
  );
}

