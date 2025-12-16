import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MobileMenu } from "./MobileMenu";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group flex items-center gap-3 transition-all hover:scale-[1.02]">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-brand via-brand to-brand/80 flex items-center justify-center shadow-lg shadow-brand/30 group-hover:shadow-brand/50 transition-all">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
            <span className="relative text-base font-bold text-white">$</span>
          </div>
          <div className="leading-tight">
            <p className="text-base font-bold tracking-tight bg-gradient-to-r from-fg to-fg/80 bg-clip-text">Dollar Loans</p>
            <p className="text-xs text-muted font-medium">Premium CAB Access</p>
          </div>
          <span className="ml-2 hidden sm:inline-flex">
            <Badge variant="brand">Licensed CAB</Badge>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link className="text-muted hover:text-brand transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand after:transition-all after:duration-300" href="/how-it-works">
            How it works
          </Link>
          <Link className="text-muted hover:text-brand transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand after:transition-all after:duration-300" href="/cab-model-explained">
            CAB model
          </Link>
          <Link className="text-muted hover:text-brand transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand after:transition-all after:duration-300" href="/rates-fees">
            Rates & fees
          </Link>
          <Link className="text-muted hover:text-brand transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand after:transition-all after:duration-300" href="/faq">
            FAQ
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink variant="secondary" size="sm" href="/auth/login" className="font-semibold">
            Sign In
          </ButtonLink>
          <ButtonLink size="sm" href="/#prequal" className="font-bold">
            Get Started
          </ButtonLink>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

