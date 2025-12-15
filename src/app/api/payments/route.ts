import { NextResponse } from "next/server";
import { addPayment, getActiveAgreementForUser, listPaymentsForUser } from "@/lib/mockDb";
import { getSessionUserId } from "@/lib/session";

export async function GET() {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ ok: true, payments: listPaymentsForUser(userId) });
}

export async function POST(req: Request) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  const body = (await req.json().catch(() => ({}))) as any;
  const amount = Number(body.amount || 0);
  const method = (body.method === "card" ? "card" : "bank") as "card" | "bank";
  const agreement = getActiveAgreementForUser(userId);
  if (!agreement) return NextResponse.json({ ok: false, error: "No active agreement" }, { status: 400 });
  const payment = addPayment(agreement.id, amount, method);
  return NextResponse.json({ ok: true, payment }, { status: 201 });
}
