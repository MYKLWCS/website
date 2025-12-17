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

  // Save to GitHub if configured
  try {
    const { saveSubmissionToRepo } = await import("@/lib/github");
    if (process.env.GITHUB_TOKEN) {
      await saveSubmissionToRepo(app.id, app);
    }
  } catch (error) {
    // Failed to save submission to GitHub
    // Ideally we might want a background job or a more robust queue.
  }

  return NextResponse.json({
    ok: true,
    message: "Application submitted",
    application: app
  });
}
