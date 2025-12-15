import { Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Audit</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">Audit log (placeholder). Required for partner activity and policy changes.</p>
      </div>
      <Card className="p-6">
        <p className="text-sm font-semibold tracking-tight">Audit events (placeholder)</p>
      </Card>
    </div>
  );
}

