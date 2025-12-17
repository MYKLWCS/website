import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MobileMenu } from "./MobileMenu";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/10 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo - Pink BG, Gold $ - Classy & Flat */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-brand2 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <span className="text-xl font-black text-brand">$</span>
          </div>
          <div>
            <p className="text-xl font-black tracking-tight text-fg">Dollar Loans</p>
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted/80">Fast · Simple · Secure</p>
          </div>
        </Link>

        {/* Navigation - Ultra Clean */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link className="text-sm font-semibold text-muted hover:text-fg transition-colors" href="/how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-semibold text-muted hover:text-fg transition-colors" href="/rates-fees">
            Rates
          </Link>
          <Link className="text-sm font-semibold text-muted hover:text-fg transition-colors" href="/calculator">
            Calculator
          </Link>
          <Link className="text-sm font-semibold text-muted hover:text-fg transition-colors" href="/faq">
            FAQ
          </Link>
        </nav>

        {/* CTAs - Flat & Premium */}
        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink variant="secondary" size="sm" href="/auth/login" className="h-10 px-5 font-semibold">
            Sign In
          </ButtonLink>
          <ButtonLink size="sm" href="/#prequal" className="h-10 px-6 font-bold">
            Apply Now
          </ButtonLink>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

