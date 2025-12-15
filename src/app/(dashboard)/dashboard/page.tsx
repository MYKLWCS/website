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

      {/* Next Payment Due Highlight */}
      {nextDue && (
        <Card className="border-l-4 border-l-brand bg-gradient-to-r from-brand/5 to-transparent p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Next Payment Due</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-3xl font-bold text-fg">{formatUsd(nextDue.amount)}</p>
              <p className="mt-1 text-sm text-muted">
                {new Date(nextDue.dueDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </div>
            <ButtonLink href="/dashboard/payments">Make Payment</ButtonLink>
          </div>
        </Card>
      )}

      {/* Key Metrics */}
      <div className="grid gap-3 md:grid-cols-3">
        <Metric
          label="Application status"
          value={app ? app.status.replaceAll("_", " ") : "No application"}
          hint={app ? "View your application details" : "Start with Get Cash wizard"}
        />
        <Metric
          label="Active agreements"
          value={agreement ? "1" : "0"}
          hint={agreement ? "View payment schedule and details" : "No active agreements yet"}
        />
        <Metric
          label="Vehicle on file"
          value={vehicle ? `${vehicle.year} ${vehicle.make}` : "No vehicle"}
          hint={vehicle ? `Mileage: ${vehicle.mileage.toLocaleString()}` : "Add a vehicle to continue"}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 md:col-span-2">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold tracking-tight">Application Timeline</p>
              <p className="mt-1 text-sm text-muted">Track your progress through our CAB title access process.</p>
            </div>
            {!app && <ButtonLink href="/dashboard/get-cash">Get Cash</ButtonLink>}
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
                { title: "Offer & disclosures", detail: "Review fee categories and CAB disclosures.", status: "todo" },
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

        {/* Quick Actions Sidebar */}
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Quick Actions</p>
          <div className="mt-4 grid gap-2">
            {agreement && (
              <>
                <ButtonLink variant="secondary" href="/dashboard/agreements">
                  View Agreements
                </ButtonLink>
                <ButtonLink variant="secondary" href="/dashboard/payments">
                  Make Payment
                </ButtonLink>
              </>
            )}
            <ButtonLink variant="secondary" href="/dashboard/documents">
              Upload Documents
            </ButtonLink>
            <ButtonLink variant="secondary" href="/dashboard/vehicles">
              Manage Vehicles
            </ButtonLink>
            <ButtonLink variant="secondary" href="/dashboard/profile">
              Update Profile
            </ButtonLink>
            <ButtonLink variant="secondary" href="/dashboard/support">
              Get Help
            </ButtonLink>
          </div>

          {/* CAB Disclosure */}
          <div className="mt-6 space-y-4">
            <Notice tone="cab" title="CAB Disclosure">
              Dollar Loans facilitates access to credit. A third-party creditor may extend credit if approved. Estimates
              are ranges only. See{" "}
              <Link className="underline underline-offset-4 hover:text-fg" href="/legal/cab-disclosures">
                CAB disclosures
              </Link>
              .
            </Notice>
          </div>

          <p className="mt-4 text-xs text-muted">
            <Link className="underline underline-offset-4 hover:text-fg" href="/cab-model-explained">
              Learn how CAB title access works →
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
