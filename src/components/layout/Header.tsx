"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige/80 backdrop-blur-lg border-b border-border">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-rose-500"></div>
            </div>
            <span className="text-xl font-bold tracking-tighter">Aura</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link href="/how-it-works" className="text-grey-500 hover:text-black transition-colors">How It Works</Link>
            <Link href="/about" className="text-grey-500 hover:text-black transition-colors">About</Link>
            <Link href="/faq" className="text-grey-500 hover:text-black transition-colors">FAQ</Link>
          </div>

          {/* CTA */}
          <Button href="/dashboard/get-cash" variant="primary" className="bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-glow-rose">
            Get Your Offer
          </Button>
        </nav>
      </Container>
    </header>
  );
}
