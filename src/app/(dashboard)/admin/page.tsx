import { getSessionUserId } from "@/lib/session";
import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { getMockApplications, getApplicationStats } from "@/lib/mockApplicationData";

export default function Page() {
  const userId = getSessionUserId()!;
  const appStats = getApplicationStats();
  const recentApplications = getMockApplications()
    .sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime())
    .slice(0, 5);

  // Calculate real stats from mock data
  const stats = [
    {
      label: "Pending Review",
      value: (appStats.inReview + appStats.needsDocs).toString(),
      subtext: `${appStats.inReview} in review, ${appStats.needsDocs} waiting`,
      valueClass: "text-brand2"
    },
    {
      label: "Ready for Offer",
      value: appStats.offerReady.toString(),
      subtext: "Documents verified",
      valueClass: "text-brand"
    },
    {
      label: "Active Pipeline",
      value: `$${(appStats.totalValue / 1000).toFixed(0)}K`,
      subtext: `Avg: $${appStats.averageAmount}`,
      valueClass: "text-ok"
    },
    {
      label: "Funded This Month",
      value: appStats.funded.toString(),
      subtext: "Active agreements",
      valueClass: "text-ok"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in_review":
        return "text-brand2 bg-brand2/10";
      case "needs_docs":
        return "text-brand2 bg-brand2/10";
      case "offer_ready":
        return "text-brand bg-brand/10";
      case "accepted":
        return "text-ok bg-ok/10";
      case "signed":
        return "text-ok bg-ok/10";
      case "funded":
        return "text-ok bg-ok/10";
      case "declined":
        return "text-danger bg-danger/10";
      default:
        return "text-muted bg-white/5";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "in_review":
        return "In Review";
      case "needs_docs":
        return "Needs Docs";
      case "offer_ready":
        return "Offer Ready";
      case "accepted":
        return "Accepted";
      case "signed":
        return "Signed";
      case "funded":
        return "Funded";
      case "declined":
        return "Declined";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Manage applications, customers, documents, and offers. All actions are logged for compliance and audit purposes.
        </p>
      </div>

      <Notice tone="info" title="Admin Access">
        You have full administrative access. Monitor application pipeline, manage underwriters, and review compliance metrics.
      </Notice>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              {stat.label}
            </p>
            <p className={`mt-2 text-3xl font-semibold tracking-tight ${stat.valueClass}`}>
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted">{stat.subtext}</p>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Quick Actions</h2>
        <div className="mt-4 grid gap-2 md:grid-cols-4">
          <Link href="/dashboard/admin/applications">
            <Button variant="secondary" className="w-full">
              All Applications
            </Button>
          </Link>
          <Link href="/dashboard/admin/doc-review">
            <Button variant="secondary" className="w-full">
              Document Review
            </Button>
          </Link>
          <Link href="/dashboard/admin/customers">
            <Button variant="secondary" className="w-full">
              Customers
            </Button>
          </Link>
          <Link href="/dashboard/admin/offers">
            <Button variant="secondary" className="w-full">
              Manage Offers
            </Button>
          </Link>
        </div>
      </Card>

      {/* Application Pipeline */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Application Pipeline</h2>
        <p className="mt-1 text-sm text-muted">Breakdown by status</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-border/40 p-4">
            <p className="text-xs font-medium text-muted">In Review</p>
            <p className="mt-1 text-2xl font-semibold text-brand2">{appStats.inReview}</p>
            <p className="mt-1 text-xs text-muted">Actively being reviewed</p>
          </div>
          <div className="rounded-lg border border-border/40 p-4">
            <p className="text-xs font-medium text-muted">Needs Documents</p>
            <p className="mt-1 text-2xl font-semibold text-brand2">{appStats.needsDocs}</p>
            <p className="mt-1 text-xs text-muted">Awaiting applicant documents</p>
          </div>
          <div className="rounded-lg border border-border/40 p-4">
            <p className="text-xs font-medium text-muted">Offer Ready</p>
            <p className="mt-1 text-2xl font-semibold text-brand">{appStats.offerReady}</p>
            <p className="mt-1 text-xs text-muted">Ready to generate offers</p>
          </div>
        </div>
      </Card>

      {/* Recent Applications Table */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Recent Applications</h2>
        <p className="mt-1 text-sm text-muted">Latest submissions and status updates</p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40">
                <th className="px-4 py-3 text-left font-semibold">Application</th>
                <th className="px-4 py-3 text-left font-semibold">Applicant</th>
                <th className="px-4 py-3 text-left font-semibold">Amount</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Underwriter</th>
                <th className="px-4 py-3 text-left font-semibold">Date</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app) => (
                <tr key={app.id} className="border-b border-border/20 hover:bg-bg/40">
                  <td className="px-4 py-3 font-medium text-brand">{app.id}</td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium">{app.applicantName}</p>
                      <p className="text-xs text-muted">{app.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold">${app.requestedAmount.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getStatusColor(app.status)}`}>
                      {getStatusLabel(app.status)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className={app.assignedUnderwriter ? "" : "text-muted"}>
                      {app.assignedUnderwriter || "Unassigned"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted">
                    {app.createdDate.toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/dashboard/admin/applications`}>
                      <Button variant="tertiary" size="sm">
                        View
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href="/dashboard/admin/applications">
          <Button variant="tertiary" className="mt-4">
            View All Applications →
          </Button>
        </Link>
      </Card>

      {/* System Status */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Underwriter Status */}
        <Card className="p-6">
          <h2 className="text-sm font-semibold tracking-tight">Underwriter Workload</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-border/40 p-3">
              <div>
                <p className="text-sm font-medium">James Rodriguez</p>
                <p className="text-xs text-muted">3 applications assigned</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted">2 in progress</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/40 p-3">
              <div>
                <p className="text-sm font-medium">Maria Garcia</p>
                <p className="text-xs text-muted">2 applications assigned</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted">1 in progress</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/40 p-3">
              <div>
                <p className="text-sm font-medium">Jessica Brown</p>
                <p className="text-xs text-muted">1 application assigned</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted">1 in progress</p>
              </div>
            </div>
          </div>
        </Card>

        {/* System Health */}
        <Card className="p-6">
          <h2 className="text-sm font-semibold tracking-tight">System Health</h2>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Database Connection</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 bg-ok rounded-full"></span>
                <span className="text-xs text-ok">Healthy</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">API Response Time</span>
              <span className="text-xs text-ok">45ms avg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Document Storage</span>
              <span className="text-xs text-muted">287 GB / 500 GB</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Last Audit Log</span>
              <span className="text-xs text-muted">5 mins ago</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Compliance Reminders */}
      <Card className="p-6 border-brand2/30 bg-brand2/5">
        <h2 className="text-sm font-semibold tracking-tight text-brand2">Compliance Reminders</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>✓ CAB disclosures provided to {appStats.signed + appStats.funded} applicants</li>
          <li>✓ {appStats.total} total applications in system</li>
          <li>• Audit log accessible via Admin → Audit Log</li>
          <li>• Texas-first underwriting rules active</li>
        </ul>
      </Card>
    </div>
  );
}
