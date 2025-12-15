import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { getSessionUserId } from "@/lib/session";
import { getUserById } from "@/lib/mockDb";
import { Notice } from "@/components/ui/Notice";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE } from "@/lib/session";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const userId = getSessionUserId();
  const user = userId ? getUserById(userId) : null;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-brand/20 bg-gradient-to-br from-brand to-brand/70 shadow-sm" />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">Dollar Loans</p>
              <p className="text-xs text-muted">Customer portal</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <p className="hidden text-sm text-muted md:block">{user ? user.email : "Signed in"}</p>
            <form>
              <LogoutButton />
            </form>
          </div>
        </Container>
      </header>

      <Container className="grid gap-8 py-8 md:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-border bg-white p-4 shadow-sm">
          <DashboardNav />
          <div className="mt-4">
            <Notice tone="cab" title="CAB reminder">
              Dollar Loans facilitates access to credit in Texas as a Credit Access Business (CAB). Agreements and terms
              depend on verification and required disclosures.
            </Notice>
          </div>
          <div className="mt-4">
            <CabMicrocopy />
          </div>
        </aside>
        <div>{children}</div>
      </Container>
    </div>
  );
}

function LogoutButton() {
  async function logout() {
    "use server";
    cookies().set(SESSION_COOKIE, "", { httpOnly: true, sameSite: "lax", path: "/", maxAge: 0 });
    redirect("/");
  }
  return (
    <button
      formAction={logout}
      className="inline-flex h-9 items-center justify-center rounded-xl border border-border bg-white px-3 text-sm text-fg transition-smooth hover:bg-panel shadow-sm"
    >
      Logout (stub)
    </button>
  );
}
