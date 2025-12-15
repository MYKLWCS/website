import Link from "next/link";
import { CAB_MICROCOPY } from "@/lib/cab";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-panel/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="h-9 w-9 rounded-xl border border-brand/20 bg-gradient-to-br from-brand to-brand/70 shadow-sm mb-4" />
          <p className="text-base font-semibold tracking-tight">Dollar Loans</p>
          <p className="mt-3 max-w-prose text-sm text-muted leading-relaxed">{CAB_MICROCOPY.short}</p>
          <p className="mt-4 text-xs text-muted leading-relaxed">
            This website provides information about CAB access services in Texas and does not constitute an offer to
            extend credit.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-fg mb-4">Company</p>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <Link className="transition-smooth hover:text-brand" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition-smooth hover:text-brand" href="/locations">
                Locations
              </Link>
            </li>
            <li>
              <Link className="transition-smooth hover:text-brand" href="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="transition-smooth hover:text-brand" href="/press">
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-fg mb-4">Legal</p>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <Link className="transition-smooth hover:text-brand" href="/legal/cab-disclosures">
                CAB disclosures
              </Link>
            </li>
            <li>
              <Link className="transition-smooth hover:text-brand" href="/legal/texas-disclosures">
                Texas disclosures
              </Link>
            </li>
            <li>
              <Link className="transition-smooth hover:text-brand" href="/legal/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="transition-smooth hover:text-brand" href="/legal/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dollar Loans. All rights reserved.</p>
          <p>Need help? <Link className="transition-smooth hover:text-brand font-medium" href="/contact">Contact support</Link>.</p>
        </div>
      </div>
    </footer>
  );
}

