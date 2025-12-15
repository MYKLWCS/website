import Link from "next/link";
import { getSessionUserId } from "@/lib/session";
import { getActiveAgreementForUser } from "@/lib/mockDb";
import { Card } from "@/components/ui/Card";
import { PaymentScheduleTable } from "@/components/dashboard/PaymentScheduleTable";
import { Notice } from "@/components/ui/Notice";
import { ButtonLink } from "@/components/ui/Button";
import { formatUsd } from "@/lib/format";

export default function Page() {
  const userId = getSessionUserId()!;
  const agreement = getActiveAgreementForUser(userId);

  return (
    <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Agreements</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">CAB Title Access Agreements</h1>
          <p className="mt-2 max-w-prose text-sm text-muted">
            “Agreements” refer to CAB Title Access Agreements and related documents — not “loan contracts” in portal UX.
          </p>
        </div>

        {agreement ? (
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <p className="text-sm font-semibold tracking-tight">Active agreement</p>
              <p className="mt-1 text-sm text-muted">{agreement.label}</p>
              <div className="mt-4 rounded-2xl border border-border/60 bg-bg/25 p-5">
                <p className="text-xs text-muted">Current balance (example)</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">{formatUsd(agreement.balance)}</p>
              </div>
              <div className="mt-5 space-y-2">
                {agreement.signedDocs.map((d) => (
                  <Link
                    key={d.name}
                    href={d.url}
                    className="block rounded-xl border border-border/60 bg-panel/50 px-4 py-3 text-sm text-fg hover:bg-panel/70"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">Document download links are placeholders in V1.</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold tracking-tight">Payment schedule</p>
              <p className="mt-1 text-sm text-muted">Your upcoming and past payments.</p>
              <div className="mt-4">
                <PaymentScheduleTable 
                  rows={agreement.paymentSchedule}
                  showNextDueHighlight={true}
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="/dashboard/payments">Make a payment</ButtonLink>
                <ButtonLink variant="secondary" href="/rates-fees">
                  Cost categories
                </ButtonLink>
              </div>
            </Card>
            <Card className="p-6 md:col-span-2">
              <p className="text-sm font-semibold tracking-tight">Early payoff (placeholder)</p>
              <p className="mt-1 text-sm text-muted">
                Early payoff terms and calculations are policy-dependent and should be shown based on your agreement documents.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-border/60 bg-bg/25 p-5">
                  <p className="text-xs text-muted">Estimated payoff amount (example)</p>
                  <p className="mt-1 text-lg font-semibold tracking-tight">{formatUsd(Math.max(0, agreement.balance))}</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-bg/25 p-5">
                  <p className="text-xs text-muted">Payoff date</p>
                  <p className="mt-1 text-lg font-semibold tracking-tight">{new Date().toLocaleDateString()}</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-bg/25 p-5">
                  <p className="text-xs text-muted">Disclaimer</p>
                  <p className="mt-1 text-sm text-muted">Example only — see your agreement documents for actual payoff details.</p>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <Card className="p-6">
            <Notice tone="warn" title="No active agreements">
              Start with <span className="text-fg">Get Cash</span>. If approved, agreement documents appear here after signing.
            </Notice>
            <div className="mt-5">
              <ButtonLink href="/dashboard/get-cash">Get Cash</ButtonLink>
            </div>
          </Card>
        )}

        <Notice tone="cab" title="CAB disclosure reminder">
          You will receive required CAB disclosures before signing any agreement. See <Link className="underline underline-offset-4 hover:text-fg" href="/legal/cab-disclosures">CAB disclosures</Link>.
        </Notice>
    </div>
  );
}
