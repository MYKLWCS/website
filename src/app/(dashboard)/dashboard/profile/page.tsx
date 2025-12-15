import { getSessionUserId } from "@/lib/session";
import { getUserById } from "@/lib/mockDb";
import { ProfileEditForm } from "@/components/dashboard/ProfileEditForm";
import { Notice } from "@/components/ui/Notice";

export default function Page() {
  const userId = getSessionUserId()!;
  const user = getUserById(userId);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Profile</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Your Profile</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Manage your personal information, address, employment, and income details.
        </p>
      </div>

      <ProfileEditForm initialUser={user} />

      <Notice tone="info" title="Data Storage">
        Changes to your profile are stored in a mock database for demonstration. In production, all
        updates would be encrypted and securely stored with full audit logging.
      </Notice>
    </div>
  );
}
