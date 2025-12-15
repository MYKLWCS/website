import { NextResponse } from "next/server";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as any;
  const desired = clamp(Number(body.desiredAmount || 0), 0, 20000);
  const mileage = clamp(Number(body.mileage || 0), 0, 400000);
  const condition = String(body.condition || "good");

  const base = clamp(2200 - mileage * 0.004, 600, 3800);
  const conditionAdj = condition === "excellent" ? 1.1 : condition === "fair" ? 0.85 : 1;
  const center = base * conditionAdj;
  const low = Math.max(300, Math.round(center * 0.55));
  const high = Math.max(low + 200, Math.round(center * 1.05));

  const estimateLow = Math.min(low, desired > 0 ? desired : low);
  const estimateHigh = Math.max(estimateLow + 200, high);

  return NextResponse.json({
    estimateLow,
    estimateHigh,
    notes: [
      "Range only — not a commitment to extend credit.",
      "Final terms depend on verification, vehicle eligibility, and CAB disclosures.",
      "A third-party creditor may extend credit if approved."
    ]
  });
}

