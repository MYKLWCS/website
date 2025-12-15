import { getSessionUserId } from "@/lib/session";
import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";

export default function Page() {
  const userId = getSessionUserId()!;
  const link = `https://dollarloans.example/?ref=${encodeURIComponent(userId)}`;

  return (
    <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Referrals</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Share your link</h1>
          <p className="mt-2 max-w-prose text-sm text-muted">
            Tiered rewards UI placeholder. This is not a promise of rewards or program terms.
          </p>
        </div>
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Your referral link (placeholder)</p>
          <p className="mt-1 break-all rounded-2xl border border-border/60 bg-bg/25 p-4 text-sm text-fg">{link}</p>
          <p className="mt-3 text-xs text-muted">Add UTM capture + attribution rules in production.</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              ["Tier 1", "X referrals → reward (placeholder)"],
              ["Tier 2", "Y referrals → reward (placeholder)"],
              ["Tier 3", "Z referrals → reward (placeholder)"]
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border/60 bg-panel/45 p-5">
                <p className="text-sm font-semibold tracking-tight">{t}</p>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Notice tone="info" title="Compliance note">
              Referral programs must include clear terms and prohibited marketing claims (especially around guaranteed approval).
            </Notice>
          </div>
        </Card>
    </div>
  );
}
