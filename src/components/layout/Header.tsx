"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isAuth = pathname.startsWith("/auth");
  const isDashboard = pathname.startsWith("/dashboard");
  const isAdmin = pathname.startsWith("/admin");

  if (isAuth) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-border/12 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand2 to-brand2/60 shadow-glow">
            <span className="text-lg font-bold text-bg">$</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-fg">Dollar</span>
            <span className="text-xs font-semibold text-brand2 uppercase tracking-widest">Loans</span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {!isDashboard && !isAdmin && (
            <>
              <Link
                href="/how-it-works"
                className="text-sm font-medium text-muted hover:text-fg transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/calculator"
                className="text-sm font-medium text-muted hover:text-fg transition-colors"
              >
                Calculator
              </Link>
              <Link
                href="/rates-fees"
                className="text-sm font-medium text-muted hover:text-fg transition-colors"
              >
                Rates & Fees
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium text-muted hover:text-fg transition-colors"
              >
                FAQ
              </Link>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          {!isDashboard && !isAdmin && (
            <>
              <Link
                href="/auth/login"
                className="hidden sm:block text-sm font-medium text-muted hover:text-fg transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/dashboard/get-cash"
                className="rounded-full bg-brand2 px-6 py-2 text-sm font-semibold text-bg shadow-glow transition hover:brightness-110"
              >
                Get Cash
              </Link>
            </>
          )}
          {(isDashboard || isAdmin) && (
            <Link
              href="/auth/logout"
              className="text-sm font-medium text-muted hover:text-fg transition-colors"
            >
              Sign Out
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
