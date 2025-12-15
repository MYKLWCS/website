import { NextResponse } from "next/server";
import { getMetrics } from "@/lib/partnerMock";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const partnerId = searchParams.get("partnerId") || undefined;
  return NextResponse.json({ ok: true, metrics: getMetrics(partnerId) });
}

