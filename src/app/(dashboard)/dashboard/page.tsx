import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Metric } from "@/components/common/Metric";
import { Timeline } from "@/components/dashboard/Timeline";
import { Infographic } from "@/components/infographics/Infographic";
import { getSessionUserId } from "@/lib/session";
import { getActiveAgreementForUser, getLatestApplication, getPrimaryVehicle, getUserById } from "@/lib/mockDb";
import { formatUsd } from "@/lib/format";
import { Notice } from "@/components/ui/Notice";

export default function Page() {
  const userId = getSessionUserId()!;
  const user = getUserById(userId);
  const vehicle = getPrimaryVehicle(userId);
  const app = getLatestApplication(userId);
  const agreement = getActiveAgreementForUser(userId);

  const nextDue = agreement?.paymentSchedule.find((p) => p.status === "upcoming") || null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Dashboard</p>
        <h1 className="text-3xl font-semibold tracking-tight">Welcome{user?.name ? `, ${user.name}` : ""}</h1>
        <p className="max-w-prose text-sm text-muted">
          Track your application and agreements, upload documents, and make payments — with CAB-first transparency.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <Metric
          label="Application status"
          value={app ? app.status.replaceAll("_", " ") : "No application"}
          hint="Save/resume is available in Get Cash."
        />
        <Metric
          label="Next payment due"
          value={nextDue ? `${formatUsd(nextDue.amount)}` : "—"}
          hint={nextDue ? new Date(nextDue.dueDate).toLocaleDateString() : "No upcoming payment scheduled."}
        />
        <Metric
          label="Vehicle value snapshot"
          value={
            vehicle?.valuationSnapshot
              ? `${formatUsd(vehicle.valuationSnapshot.low)}–${formatUsd(vehicle.valuationSnapshot.high)}`
              : "—"
          }
          hint={
            vehicle?.valuationSnapshot
              ? `Updated ${new Date(vehicle.valuationSnapshot.updatedAt).toLocaleDateString()}`
              : "Add a vehicle to see a snapshot."
          }
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 md:col-span-2">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold tracking-tight">Application timeline</p>
              <p className="mt-1 text-sm text-muted">A clear lifecycle view (placeholder), designed to reduce anxiety.</p>
            </div>
            <ButtonLink href="/dashboard/get-cash">Get Cash</ButtonLink>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <Timeline
              items={[
                {
                  title: "Estimate",
                  detail: "Non-guarantee range based on vehicle basics.",
                  status: "done"
                },
                { title: "Verification", detail: "Upload photos and confirm identity/income.", status: "active" },
                { title: "Offer + disclosures", detail: "Review fee categories and CAB disclosures.", status: "todo" },
                { title: "E-sign", detail: "Sign the CAB Title Access Agreement (if approved).", status: "todo" },
                { title: "Funding", detail: "Track status updates through funding.", status: "todo" }
              ]}
            />
            <Infographic
              variant="lifecycleTimeline"
              title="Lifecycle timeline"
              caption="A simple high-trust view of progress (placeholder)."
            />
          </div>
        </Card>

        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Quick actions</p>
          <div className="mt-4 grid gap-2">
            <ButtonLink variant="secondary" href="/dashboard/documents">
              Upload documents
            </ButtonLink>
            <ButtonLink variant="secondary" href="/dashboard/payments">
              Make a payment
            </ButtonLink>
            <ButtonLink variant="secondary" href="/dashboard/support">
              Contact support
            </ButtonLink>
          </div>
          <div className="mt-5">
            <Notice tone="cab" title="CAB note">
              Dollar Loans facilitates access to credit. A third-party creditor may extend credit if approved. Estimates
              are ranges only.
            </Notice>
          </div>
          <p className="mt-4 text-xs text-muted">
            Need help understanding fee categories? See{" "}
            <Link className="underline underline-offset-4 hover:text-fg" href="/cab-model-explained">
              CAB model explained
            </Link>
            .
          </p>
        </Card>
      </div>
    </div>
  );
}
