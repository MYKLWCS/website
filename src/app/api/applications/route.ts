import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { db } from "@/lib/mockDb";

export async function GET() {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const applications = db.applications.filter((a) => a.userId === userId);
  return NextResponse.json({ ok: true, applications });
}

export async function POST(req: Request) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const body = (await req.json().catch(() => ({}))) as any;
  const { vehicleId, requestedAmount, estimateRange } = body;

  if (!requestedAmount || requestedAmount <= 0) {
    return NextResponse.json(
      { ok: false, error: "requestedAmount is required and must be > 0" },
      { status: 400 }
    );
  }

  const now = new Date().toISOString();
  const appId = `a_${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
  const application = {
    id: appId,
    userId,
    vehicleId,
    status: "draft" as const,
    requestedAmount,
    estimateRange: estimateRange || { low: 1000, high: 3000 },
    createdAt: now,
    updatedAt: now
  };

  db.applications.push(application);
  return NextResponse.json({ ok: true, application }, { status: 201 });
}
