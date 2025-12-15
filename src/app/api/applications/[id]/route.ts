import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { db } from "@/lib/mockDb";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const app = db.applications.find((a) => a.id === params.id && a.userId === userId);
  if (!app) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

  return NextResponse.json({ ok: true, application: app });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const app = db.applications.find((a) => a.id === params.id && a.userId === userId);
  if (!app) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

  const body = (await req.json().catch(() => ({}))) as any;
  const updates: Record<string, any> = {};

  if (body.status !== undefined) updates.status = body.status;
  if (body.requestedAmount !== undefined) updates.requestedAmount = body.requestedAmount;
  if (body.vehicleId !== undefined) updates.vehicleId = body.vehicleId;
  if (body.finalOffer !== undefined) updates.finalOffer = body.finalOffer;

  const updated = { ...app, ...updates, updatedAt: new Date().toISOString() };
  Object.assign(app, updated);

  return NextResponse.json({ ok: true, application: updated });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const idx = db.applications.findIndex((a) => a.id === params.id && a.userId === userId);
  if (idx === -1) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

  db.applications.splice(idx, 1);
  return NextResponse.json({ ok: true, message: "Deleted" });
}
