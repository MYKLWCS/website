import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { getWizardDraft, upsertWizardDraft } from "@/lib/mockDb";

export async function GET() {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ ok: true, draft: getWizardDraft(userId) });
}

export async function POST(req: Request) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  const body = (await req.json().catch(() => ({}))) as any;
  const data = (body.data && typeof body.data === "object" ? body.data : {}) as Record<string, unknown>;
  const draft = upsertWizardDraft(userId, data);
  return NextResponse.json({ ok: true, draft });
}

