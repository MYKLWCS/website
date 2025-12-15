import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { getUserById } from "@/lib/mockDb";

export async function GET() {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: true, user: null });
  const user = getUserById(userId);
  return NextResponse.json({ ok: true, user });
}

