import { Badge } from "@/components/ui/Badge";

export function TrustStrip() {
  return (
    <div className="grid gap-3 rounded-2xl border border-border/70 bg-panel/50 p-5 md:grid-cols-4">
      <div>
        <p className="text-xs text-muted">Compliance</p>
        <p className="mt-1 text-sm font-semibold tracking-tight">CAB-first disclosure UX</p>
        <p className="mt-1 text-xs text-muted">Clear “who does what” and non-guarantee microcopy.</p>
      </div>
      <div>
        <p className="text-xs text-muted">Security</p>
        <p className="mt-1 text-sm font-semibold tracking-tight">Encrypted data handling</p>
        <p className="mt-1 text-xs text-muted">Modern secure-by-default patterns (V1 placeholder).</p>
      </div>
      <div>
        <p className="text-xs text-muted">Speed</p>
        <p className="mt-1 text-sm font-semibold tracking-tight">Fast estimate workflow</p>
        <p className="mt-1 text-xs text-muted">Save/resume wizard with autosave.</p>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-muted">Transparency</p>
          <p className="mt-1 text-sm font-semibold tracking-tight">Fee categories in plain language</p>
          <p className="mt-1 text-xs text-muted">Example scenarios only — not promises.</p>
        </div>
        <Badge variant="brand">Texas</Badge>
      </div>
    </div>
  );
}

