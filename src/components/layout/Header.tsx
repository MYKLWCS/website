"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Header() {
  const pathname = usePathname();

  // We don't want to show the header on auth pages
  if (pathname.startsWith("/auth")) return null;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-700 shadow-md">
              <span className="text-lg font-bold text-white">$</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-brown-800 tracking-tighter">Gilded</span>
              <span className="text-xs font-medium text-gold-800 uppercase tracking-widest">Finance</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/how-it-works" className="text-sm font-semibold text-brown-800/60 hover:text-brown-800 transition-colors">How It Works</Link>
            <Link href="/about" className="text-sm font-semibold text-brown-800/60 hover:text-brown-800 transition-colors">About Us</Link>
            <Link href="/faq" className="text-sm font-semibold text-brown-800/60 hover:text-brown-800 transition-colors">FAQ</Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button href="/dashboard/get-cash" variant="primary" className="bg-gold-600 hover:bg-gold-700 text-white shadow-lg">
              Get Cash Now
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
