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
    <div className="space-y-8">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/30 w-fit">
          <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand">Your Dashboard</p>
        </div>
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-br from-fg to-fg/80 bg-clip-text text-transparent">
          Welcome{user?.name ? `, ${user.name}` : ""}
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          Track your application, manage agreements, and access all your loan details in one place.
        </p>
      </div>

      {/* Next Payment Due Highlight */}
      {nextDue && (
        <Card className="relative overflow-hidden border-2 border-brand/30 bg-gradient-to-br from-brand/5 via-white to-brand2/5 p-8 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand/20 to-transparent rounded-bl-full"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/20 border border-brand/40 mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">Payment Due</p>
            </div>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-6xl font-bold bg-gradient-to-r from-brand to-brand2 bg-clip-text text-transparent mb-2">
                  {formatUsd(nextDue.amount)}
                </p>
                <p className="text-lg text-muted font-medium">
                  Due {new Date(nextDue.dueDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </p>
              </div>
              <ButtonLink href="/dashboard/payments" size="lg" className="shadow-lg">
                Make Payment →
              </ButtonLink>
            </div>
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
      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="p-8 lg:col-span-2 border-2 border-border/50 shadow-lg">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">Your Progress</p>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-fg">Application Timeline</h2>
              <p className="mt-2 text-base text-muted">Track your journey from estimate to funded</p>
            </div>
            {!app && (
              <ButtonLink href="/dashboard/get-cash" size="lg" className="shadow-lg">
                Start Application →
              </ButtonLink>
            )}
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <Timeline
              items={[
                {
                  title: "Estimate",
                  detail: "Get your loan range instantly",
                  status: "done"
                },
                { title: "Verification", detail: "Quick photo uploads", status: "active" },
                { title: "Offer & Disclosures", detail: "Review transparent terms", status: "todo" },
                { title: "E-sign", detail: "Secure digital signing", status: "todo" },
                { title: "Funding", detail: "Money in your account", status: "todo" }
              ]}
            />
            <Infographic
              variant="lifecycleTimeline"
              title="Your loan lifecycle"
              caption="Simple, transparent progress tracking"
            />
          </div>
        </Card>

        {/* Quick Actions Sidebar */}
        <Card className="p-8 border-2 border-border/50 shadow-lg h-fit">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-3">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">Quick Access</p>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-fg">Quick Actions</h2>
          </div>
          <div className="grid gap-3">
            {agreement && (
              <>
                <ButtonLink variant="secondary" href="/dashboard/agreements" className="justify-start h-12 font-semibold">
                  📄 View Agreements
                </ButtonLink>
                <ButtonLink variant="secondary" href="/dashboard/payments" className="justify-start h-12 font-semibold">
                  💳 Make Payment
                </ButtonLink>
              </>
            )}
            <ButtonLink variant="secondary" href="/dashboard/documents" className="justify-start h-12 font-semibold">
              📎 Upload Documents
            </ButtonLink>
            <ButtonLink variant="secondary" href="/dashboard/vehicles" className="justify-start h-12 font-semibold">
              🚗 Manage Vehicles
            </ButtonLink>
            <ButtonLink variant="secondary" href="/dashboard/profile" className="justify-start h-12 font-semibold">
              👤 Update Profile
            </ButtonLink>
            <ButtonLink variant="secondary" href="/dashboard/support" className="justify-start h-12 font-semibold">
              💬 Get Help
            </ButtonLink>
          </div>

          {/* CAB Disclosure */}
          <div className="mt-8 pt-6 border-t-2 border-border/30">
            <Notice tone="cab" title="CAB Disclosure" className="text-xs">
              Dollar Loans facilitates access to credit. A third-party creditor may extend credit if approved.{" "}
              <Link className="underline underline-offset-2 hover:text-fg font-semibold" href="/legal/cab-disclosures">
                View disclosures →
              </Link>
            </Notice>
          </div>
        </Card>
      </div>
    </div>
  );
}
