import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { ApplicationsList } from "@/components/dashboard/ApplicationsList";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Applications</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Application status</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          View your CAB title access-to-credit applications, estimates, offers, and funding status.
        </p>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold tracking-tight">Your applications</p>
            <p className="mt-1 text-sm text-muted">Real-time data from server</p>
          </div>
          <ButtonLink href="/dashboard/get-cash">New Application</ButtonLink>
        </div>
      </Card>

      <ApplicationsList />
    </div>
  );
}
