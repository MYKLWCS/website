import Link from "next/link";
import { CAB_MICROCOPY } from "@/lib/cab";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-sm font-semibold tracking-tight">Dollar Loans</p>
          <p className="mt-2 max-w-prose text-sm text-muted">{CAB_MICROCOPY.short}</p>
          <p className="mt-3 text-xs text-muted">
            This website provides information about CAB access services in Texas and does not constitute an offer to
            extend credit.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link className="hover:text-fg" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-fg" href="/locations">
                Locations
              </Link>
            </li>
            <li>
              <Link className="hover:text-fg" href="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:text-fg" href="/press">
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link className="hover:text-fg" href="/legal/cab-disclosures">
                CAB disclosures
              </Link>
            </li>
            <li>
              <Link className="hover:text-fg" href="/legal/texas-disclosures">
                Texas disclosures
              </Link>
            </li>
            <li>
              <Link className="hover:text-fg" href="/legal/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-fg" href="/legal/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dollar Loans. All rights reserved.</p>
          <p>Need help? <Link className="hover:text-fg" href="/contact">Contact support</Link>.</p>
        </div>
      </div>
    </footer>
  );
}

