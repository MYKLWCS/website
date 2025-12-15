import { getSessionUserId } from "@/lib/session";
import { getPrimaryVehicle } from "@/lib/mockDb";
import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export default function Page() {
  const userId = getSessionUserId()!;
  const vehicle = getPrimaryVehicle(userId);

  return (
    <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Documents</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Upload + review</h1>
          <p className="mt-2 max-w-prose text-sm text-muted">
            Organize uploads by category with clear status tags (Uploaded / Pending / Approved). V1 scaffold view.
          </p>
        </div>

        <Card className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Notice tone="info" title="Why we ask for documents">
              We request documents to verify eligibility, identity, and vehicle details. This supports accurate disclosures and a smoother process.
            </Notice>
            <Notice tone="cab" title="CAB-first workflow">
              Disclosures appear before signing. See <Link className="underline underline-offset-4 hover:text-fg" href="/legal/cab-disclosures">CAB disclosures</Link>.
            </Notice>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ["Identity", "Government ID, proof of address (if needed)."],
              ["Income", "Paystubs or other verification (as applicable)."],
              ["Vehicle", "Photos, title documentation, additional verification."]
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border/60 bg-bg/25 p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold tracking-tight">{t}</p>
                  <Badge variant="default">Pending</Badge>
                </div>
                <p className="mt-1 text-sm text-muted">{d}</p>
                <p className="mt-3 text-xs text-muted">Status tags are placeholders in V1.</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            For guided photo overlays, use the <span className="text-fg">Vehicle Photos</span> step in the Get Cash wizard.
          </p>
        </Card>

        {vehicle ? (
          <Card className="p-6">
            <p className="text-sm font-semibold tracking-tight">Vehicle photo checklist</p>
            <p className="mt-1 text-sm text-muted">Based on your primary vehicle (mock).</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {vehicle.photos.map((p) => (
                <div key={p.key} className="rounded-2xl border border-border/60 bg-panel/45 p-4">
                  <p className="text-sm font-semibold tracking-tight">{p.label}</p>
                  <p className="mt-1 text-xs text-muted">Status: {p.status}</p>
                </div>
              ))}
            </div>
          </Card>
        ) : null}
    </div>
  );
}
