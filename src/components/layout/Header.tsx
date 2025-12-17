"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isAuth = pathname.startsWith("/auth");
  const isDashboard = pathname.startsWith("/dashboard");
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isAuth) return null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 transition-all duration-300 ${scrolled ? "px-6" : "px-4"}`}>
        <nav 
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${
            scrolled 
              ? "glass-card shadow-lg bg-black/40 border-white/5" 
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 overflow-hidden group-hover:border-primary/50 transition-colors">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">$</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors">DOLLAR</span>
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">LOANS</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-md">
            {!isDashboard && !isAdmin && (
              <>
                {[
                  ['How It Works', '/how-it-works'],
                  ['Calculator', '/calculator'],
                  ['Rates', '/rates-fees'],
                  ['FAQ', '/faq']
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                  >
                    {label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300" />
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            {!isDashboard && !isAdmin && (
              <>
                <Link
                  href="/auth/login"
                  className="hidden sm:block text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/dashboard/get-cash"
                  className="relative overflow-hidden group px-6 py-2.5 rounded-xl bg-white text-black font-bold text-sm transition-transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-white to-primary opacity-0 group-hover:opacity-30 transition-opacity blur-md" />
                  <span className="relative z-10">Get Cash</span>
                </Link>
              </>
            )}
            {(isDashboard || isAdmin) && (
              <Link
                href="/auth/logout"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Sign Out
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
