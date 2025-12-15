import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";

export default function Page() {
  return (
    <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Settings</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Preferences</h1>
          <p className="mt-2 max-w-prose text-sm text-muted">Communication preferences, security, and account settings (placeholders).</p>
        </div>

        <Card className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-bg/25 p-5">
              <p className="text-sm font-semibold tracking-tight">Communication</p>
              <p className="mt-1 text-sm text-muted">Email/SMS preferences (placeholder)</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-bg/25 p-5">
              <p className="text-sm font-semibold tracking-tight">Security</p>
              <p className="mt-1 text-sm text-muted">MFA controls and device sessions (placeholder)</p>
            </div>
          </div>
          <div className="mt-5">
            <Notice tone="warn" title="V1 stub">
              Add real auth (NextAuth/Supabase) and secure settings persistence in production.
            </Notice>
          </div>
        </Card>
    </div>
  );
}
