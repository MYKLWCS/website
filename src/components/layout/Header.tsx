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
    <header className="sticky top-0 z-50 border-b border-border/40 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-orange-500">
            <span className="text-lg font-bold text-white">$</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-fg">Dollar</span>
            <span className="text-xs font-semibold text-brand uppercase tracking-widest">Loans</span>
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
                className="rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-pink-500/30 transition-all"
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
