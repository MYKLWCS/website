import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border/60 bg-bg/60 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-border/70 bg-gradient-to-b from-white/10 to-white/0 shadow-glow" />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">Dollar Loans</p>
              <p className="text-xs text-muted">Texas CAB access services</p>
            </div>
          </Link>
          <Link className="text-sm text-muted hover:text-fg" href="/legal/cab-disclosures">
            CAB disclosures
          </Link>
        </Container>
      </header>
      {children}
      <footer className="border-t border-border/60">
        <Container className="py-8">
          <CabMicrocopy />
        </Container>
      </footer>
    </div>
  );
}
