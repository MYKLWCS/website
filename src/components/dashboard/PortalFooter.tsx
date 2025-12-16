import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";

export function PortalFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-panel/30">
      <Container className="py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-prose">
            <p className="text-sm font-semibold tracking-tight">Dollar Loans Portal</p>
            <p className="mt-2 text-sm text-muted">
              Demo portal experience. Actions, status updates, and payments are mocked.
            </p>
            <div className="mt-4">
              <CabMicrocopy />
            </div>
          </div>

          <div className="grid gap-2 text-sm text-muted">
            <Link className="hover:text-fg" href="/">
              Back to website
            </Link>
            <Link className="hover:text-fg" href="/legal/cab-disclosures">
              CAB disclosures
            </Link>
            <Link className="hover:text-fg" href="/contact">
              Contact support
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
