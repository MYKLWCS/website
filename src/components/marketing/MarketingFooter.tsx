import Link from "next/link";
import { CAB_MICROCOPY } from "@/lib/cab";

export function MarketingFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-panel/30 to-panel/60 border-t border-border/20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(var(--fg)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-8 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12 mb-16">
          {/* Brand Section - Luxurious & Prominent */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-16 w-16 rounded-3xl bg-gradient-to-br from-brand2 to-brand2/80 flex items-center justify-center shadow-lg">
                <span className="text-3xl font-black text-brand drop-shadow-sm">$</span>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 to-transparent" />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight text-fg mb-0.5">Dollar Loans</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand">Fast · Simple · Secure</p>
              </div>
            </div>
            <p className="max-w-md text-base text-muted/90 leading-relaxed mb-8 font-medium">
              Premium vehicle title loans in Texas. Get cash fast while keeping your car. Licensed, transparent, and built for your financial freedom.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-4 py-2 rounded-xl bg-white border border-border/50 shadow-sm">
                <p className="text-xs font-bold text-brand">Licensed CAB</p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-border/50 shadow-sm">
                <p className="text-xs font-bold text-ok">Texas Licensed</p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-border/50 shadow-sm">
                <p className="text-xs font-bold text-fg">A+ Service</p>
              </div>
            </div>

            {/* Social Links - Premium Design */}
            <div className="flex gap-3">
              <a href="#" className="group relative w-12 h-12 rounded-2xl bg-white border border-border/50 hover:border-brand/50 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <span className="text-base font-bold text-muted group-hover:text-brand transition-colors">𝕏</span>
              </a>
              <a href="#" className="group relative w-12 h-12 rounded-2xl bg-white border border-border/50 hover:border-brand/50 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <span className="text-base font-bold text-muted group-hover:text-brand transition-colors">in</span>
              </a>
              <a href="#" className="group relative w-12 h-12 rounded-2xl bg-white border border-border/50 hover:border-brand/50 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <span className="text-base font-bold text-muted group-hover:text-brand transition-colors">f</span>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            {/* Products */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-brand mb-5">Products</p>
              <ul className="space-y-3.5 text-sm font-semibold">
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/how-it-works">
                    <span>How It Works</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/calculator">
                    <span>Calculator</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/rates-fees">
                    <span>Rates & Fees</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/eligibility">
                    <span>Eligibility</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-brand mb-5">Company</p>
              <ul className="space-y-3.5 text-sm font-semibold">
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/about">
                    <span>About Us</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/faq">
                    <span>FAQ</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/contact">
                    <span>Contact</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/locations">
                    <span>Locations</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-brand mb-5">Legal</p>
              <ul className="space-y-3.5 text-sm font-semibold">
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/legal/cab-disclosures">
                    <span>CAB Disclosures</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/legal/terms">
                    <span>Terms of Service</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/legal/privacy">
                    <span>Privacy Policy</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-brand transition-colors inline-flex items-center gap-1.5 group" href="/legal/accessibility">
                    <span>Accessibility</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Bar - Ultra Premium */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <p className="font-bold text-fg">© {new Date().getFullYear()} Dollar Loans</p>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-brand/10 text-brand font-bold">Licensed in Texas</span>
              <span className="text-muted">·</span>
              <span className="text-muted font-medium">Credit Access Business</span>
            </div>
          </div>
          <p className="text-xs text-muted/80 font-medium max-w-md">
            All loans subject to approval. Terms and conditions apply.
          </p>
        </div>
      </div>
    </footer>
  );
}

