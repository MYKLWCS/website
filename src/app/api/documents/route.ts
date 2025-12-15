import { NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { listDocumentsForUser } from "@/lib/mockDb";

export async function GET(req: Request) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const applicationId = url.searchParams.get("applicationId");

  const documents = listDocumentsForUser(userId).filter((d) => (applicationId ? d.applicationId === applicationId : true));
  return NextResponse.json({ ok: true, documents });
}

