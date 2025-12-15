import { Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Rules</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">Texas-first underwriting + CAB disclosure configuration placeholders.</p>
      </div>
      <Card className="p-6">
        <p className="text-sm font-semibold tracking-tight">Rules config (placeholder)</p>
      </Card>
    </div>
  );
}

