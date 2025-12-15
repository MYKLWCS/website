import { NextResponse } from "next/server";
import { createTrackedLink } from "@/lib/partnerMock";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as any;
  const partnerId = String(body.partnerId || "").trim();
  if (!partnerId) return NextResponse.json({ ok: false, error: "partnerId required" }, { status: 400 });
  const link = createTrackedLink(partnerId);
  return NextResponse.json({ ok: true, link }, { status: 201 });
}

