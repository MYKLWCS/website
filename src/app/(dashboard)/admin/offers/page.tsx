import { Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Offers</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">Offer adjustment within policy (placeholder). Ensure CAB-first disclosures remain consistent.</p>
      </div>
      <Card className="p-6">
        <p className="text-sm font-semibold tracking-tight">Offer policy editor (placeholder)</p>
      </Card>
    </div>
  );
}

