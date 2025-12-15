import { NextResponse } from "next/server";
import { ensureUser } from "@/lib/mockDb";
import { SESSION_COOKIE } from "@/lib/session";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as any;
  const email = String(body.email || "").trim().toLowerCase();
  const name = String(body.name || "").trim();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const user = ensureUser(email, name);
  const res = NextResponse.json({ ok: true, user });
  res.cookies.set(SESSION_COOKIE, user.id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/"
  });
  return res;
}

