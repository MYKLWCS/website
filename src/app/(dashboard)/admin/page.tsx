import { getSessionUserId } from "@/lib/session";
import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Page() {
  const userId = getSessionUserId()!;

  // Mock admin stats
  const stats = [
    {
      label: "Pending Applications",
      value: "12",
      subtext: "Awaiting review",
      color: "amber"
    },
    {
      label: "Total Users",
      value: "245",
      subtext: "Active accounts",
      color: "blue"
    },
    {
      label: "Monthly Revenue",
      value: "$187.5K",
      subtext: "+12% from last month",
      color: "green"
    },
    {
      label: "Document Reviews",
      value: "34",
      subtext: "Pending action",
      color: "orange"
    }
  ];

  const recentApplications = [
    {
      id: "APP-001",
      applicant: "Sarah Johnson",
      amount: "$2,500",
      status: "in_review",
      date: "Dec 14, 2025"
    },
    {
      id: "APP-002",
      applicant: "Michael Chen",
      amount: "$3,200",
      status: "needs_docs",
      date: "Dec 13, 2025"
    },
    {
      id: "APP-003",
      applicant: "Jennifer Lee",
      amount: "$1,800",
      status: "offer_ready",
      date: "Dec 13, 2025"
    },
    {
      id: "APP-004",
      applicant: "David Martinez",
      amount: "$4,000",
      status: "accepted",
      date: "Dec 12, 2025"
    },
    {
      id: "APP-005",
      applicant: "Emily Wilson",
      amount: "$2,100",
      status: "signed",
      date: "Dec 12, 2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in_review":
        return "text-amber-600 bg-amber-500/10";
      case "needs_docs":
        return "text-orange-600 bg-orange-500/10";
      case "offer_ready":
        return "text-blue-600 bg-blue-500/10";
      case "accepted":
        return "text-green-600 bg-green-500/10";
      case "signed":
        return "text-green-600 bg-green-500/10";
      default:
        return "text-gray-600 bg-gray-500/10";
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
          Manage applications, customers, documents, and offers.
        </p>
      </div>

      <Notice tone="info" title="Admin Only">
        This section is restricted to authorized administrators. All actions are logged for compliance and audit purposes.
      </Notice>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              {stat.label}
            </p>
            <p className={`mt-2 text-3xl font-semibold tracking-tight text-${stat.color}-600`}>
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted">{stat.subtext}</p>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Quick Actions</h2>
        <div className="mt-4 grid gap-2 md:grid-cols-3">
          <Link href="/dashboard/admin/applications">
            <Button variant="secondary" className="w-full">
              View All Applications
            </Button>
          </Link>
          <Link href="/dashboard/admin/customers">
            <Button variant="secondary" className="w-full">
              Search Customers
            </Button>
          </Link>
          <Link href="/dashboard/admin/doc-review">
            <Button variant="secondary" className="w-full">
              Review Documents
            </Button>
          </Link>
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
                <th className="px-4 py-3 text-left font-semibold">Date</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app) => (
                <tr key={app.id} className="border-b border-border/20 hover:bg-bg/40">
                  <td className="px-4 py-3 font-medium">{app.id}</td>
                  <td className="px-4 py-3">{app.applicant}</td>
                  <td className="px-4 py-3">{app.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getStatusColor(app.status)}`}>
                      {getStatusLabel(app.status)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted">{app.date}</td>
                  <td className="px-4 py-3">
                    <Button variant="tertiary" size="sm">
                      View
                    </Button>
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

      {/* System Health */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">System Health</h2>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Database Connection</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-green-600">Healthy</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">API Response Time</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-xs text-green-600">45ms avg</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Document Storage</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-xs text-muted">287 GB / 500 GB</span>
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
