"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/12 bg-bg pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand2 to-brand shadow-glow">
                <span className="text-sm font-bold text-bg">$</span>
              </div>
              <span className="font-bold text-fg">Dollar Loans</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Texas CAB facilitating transparent vehicle equity access.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-fg text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-xs text-muted hover:text-fg transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-xs text-muted hover:text-fg transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/rates-fees" className="text-xs text-muted hover:text-fg transition-colors">
                  Rates & Fees
                </Link>
              </li>
              <li>
                <Link href="/eligibility" className="text-xs text-muted hover:text-fg transition-colors">
                  Eligibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-fg text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-xs text-muted hover:text-fg transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-xs text-muted hover:text-fg transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-xs text-muted hover:text-fg transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-muted hover:text-fg transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-fg text-sm mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/legal/terms" className="text-xs text-muted hover:text-fg transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-xs text-muted hover:text-fg transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/cab-disclosures" className="text-xs text-muted hover:text-fg transition-colors">
                  CAB Disclosures
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-xs text-muted hover:text-fg transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted text-center md:text-left">
            © 2025 Dollar Loans. All rights reserved. Dollar Loans is a Texas Credit Access Business (CAB).
          </p>
          <div className="flex items-center gap-4">
            <Link href="/legal/privacy" className="text-xs text-muted hover:text-fg transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">/</span>
            <Link href="/legal/terms" className="text-xs text-muted hover:text-fg transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
