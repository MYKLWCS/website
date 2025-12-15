import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { db } from "@/lib/mockDb";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const app = db.applications.find((a) => a.id === params.id && a.userId === userId);
  if (!app) return NextResponse.json({ ok: false, error: "Application not found" }, { status: 404 });

  const body = (await req.json().catch(() => ({}))) as any;
  const { year, make, model, mileage, condition, desiredAmount } = body;

  // Simple valuation logic based on vehicle details
  const mileageNum = Number(mileage || 108000);
  const conditionStr = String(condition || "good");
  const desiredNum = Number(desiredAmount || 0);

  const base = Math.max(600, Math.min(3800, 2200 - mileageNum * 0.004));
  const conditionAdj = conditionStr === "excellent" ? 1.1 : conditionStr === "fair" ? 0.85 : 1;
  const center = base * conditionAdj;
  const low = Math.max(300, Math.round(center * 0.55));
  const high = Math.max(low + 200, Math.round(center * 1.05));

  const estimateLow = desiredNum > 0 ? Math.min(low, desiredNum) : low;
  const estimateHigh = Math.max(high, desiredNum > 0 ? desiredNum : high);

  // Update application with estimate
  app.estimateRange = { low: estimateLow, high: estimateHigh };
  app.updatedAt = new Date().toISOString();

  return NextResponse.json({
    ok: true,
    estimateRange: { low: estimateLow, high: estimateHigh },
    application: app
  });
}
