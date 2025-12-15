import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  // Stub: In production, forward to your analytics stack.
  return NextResponse.json({ ok: true, received: body }, { status: 200 });
}

