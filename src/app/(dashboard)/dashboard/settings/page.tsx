import { getSessionUserId } from "@/lib/session";
import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";
import { SettingsForm } from "@/components/dashboard/SettingsForm";

export default function Page() {
  const userId = getSessionUserId()!;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Settings</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Account Settings</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Manage your account security, notifications, and privacy preferences.
        </p>
      </div>

      <Notice tone="info" title="Account Security">
        Keep your account secure by using a strong password and enabling two-factor authentication. You can change these settings at any time.
      </Notice>

      <SettingsForm userId={userId} />

      <Card className="p-6 border-red-500/30 bg-red-500/5">
        <h2 className="text-sm font-semibold tracking-tight text-red-600">Danger Zone</h2>
        <p className="mt-1 text-sm text-muted">Irreversible account actions</p>
        <div className="mt-4 space-y-3">
          <p className="text-sm text-muted">
            Closing your account will permanently delete all your data and remove access to Dollar Loans services.
          </p>
          <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-500/30 rounded-lg hover:bg-red-500/10 transition-colors">
            Close Account
          </button>
        </div>
      </Card>
    </div>
  );
}
