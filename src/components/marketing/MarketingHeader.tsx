import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-9 w-9 rounded-full border border-brand/20 bg-brand flex items-center justify-center shadow-sm">
            <span className="text-sm font-bold text-primary">$</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">Dollar Loans</p>
            <p className="text-xs text-muted">Texas CAB title access</p>
          </div>
          <span className="ml-2 hidden sm:inline-flex">
            <Badge variant="brand">CAB-first</Badge>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          <Link className="transition-smooth hover:text-fg" href="/how-it-works">
            How it works
          </Link>
          <Link className="transition-smooth hover:text-fg" href="/cab-model-explained">
            CAB model
          </Link>
          <Link className="transition-smooth hover:text-fg" href="/rates-fees">
            Rates & fees
          </Link>
          <Link className="transition-smooth hover:text-fg" href="/faq">
            FAQ
          </Link>
          <Link className="transition-smooth hover:text-fg" href="/security-trust">
            Security
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink variant="secondary" size="sm" href="/auth/login">
            Login
          </ButtonLink>
          <ButtonLink size="sm" href="/#prequal">
            Check Your Estimate
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

