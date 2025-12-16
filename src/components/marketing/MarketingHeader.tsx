import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MobileMenu } from "./MobileMenu";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-white/95 backdrop-blur-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="group flex items-center gap-4 transition-all duration-300 hover:scale-[1.01]">
          <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-brand via-brand to-brand/75 flex items-center justify-center shadow-[0_8px_25px_rgb(var(--brand)/0.4)] group-hover:shadow-[0_12px_35px_rgb(var(--brand)/0.5)] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-white/5"></div>
            <span className="relative text-xl font-black text-fg drop-shadow-sm">$</span>
          </div>
          <div className="leading-none">
            <p className="text-xl font-black tracking-tighter bg-gradient-to-r from-fg via-fg to-fg/70 bg-clip-text mb-1">DOLLAR LOANS</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand">Don't Get Broke & Drive</p>
          </div>
          <span className="ml-2 hidden lg:inline-flex">
            <Badge variant="brand" className="font-bold">Texas Licensed</Badge>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link className="text-muted hover:text-brand transition-colors duration-200 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-brand after:to-brand2 after:transition-all after:duration-300" href="/how-it-works">
            How It Works
          </Link>
          <Link className="text-muted hover:text-brand transition-colors duration-200 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-brand after:to-brand2 after:transition-all after:duration-300" href="/rates-fees">
            Rates & Fees
          </Link>
          <Link className="text-muted hover:text-brand transition-colors duration-200 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-brand after:to-brand2 after:transition-all after:duration-300" href="/calculator">
            Calculator
          </Link>
          <Link className="text-muted hover:text-brand transition-colors duration-200 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-brand after:to-brand2 after:transition-all after:duration-300" href="/faq">
            FAQ
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ButtonLink variant="secondary" size="sm" href="/auth/login" className="text-xs">
            Sign In
          </ButtonLink>
          <ButtonLink size="sm" href="/#prequal" className="text-xs">
            Get My Loan →
          </ButtonLink>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

