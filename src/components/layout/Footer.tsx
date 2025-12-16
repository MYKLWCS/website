"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/12 bg-bg py-10">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-brand">
              <span className="text-sm font-bold text-primary">$</span>
            </div>
            <div>
              <div className="font-semibold text-primary">Dollar Loans</div>
              <div className="text-xs text-muted">Transparent vehicle equity access</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/about" className="text-sm text-muted hover:text-primary transition-colors">About</Link>
            <Link href="/faq" className="text-sm text-muted hover:text-primary transition-colors">FAQ</Link>
            <Link href="/contact" className="text-sm text-muted hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div className="border-t border-border/12 pt-6 text-center md:text-left">
          <p className="text-xs text-muted">© 2025 Dollar Loans. All rights reserved. Dollar Loans is a Texas CAB.</p>
        </div>
      </div>
    </footer>
  );
}
