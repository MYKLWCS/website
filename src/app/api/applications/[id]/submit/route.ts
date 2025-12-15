import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { db } from "@/lib/mockDb";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const app = db.applications.find((a) => a.id === params.id && a.userId === userId);
  if (!app) return NextResponse.json({ ok: false, error: "Application not found" }, { status: 404 });

  // Transition from draft/in_review to submitted
  const now = new Date().toISOString();
  app.status = "in_review";
  app.updatedAt = now;

  return NextResponse.json({
    ok: true,
    message: "Application submitted",
    application: app
  });
}
