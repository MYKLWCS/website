import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Notice } from "@/components/ui/Notice";

export default function Page() {
  const applications = [
    {
      id: "APP-001",
      applicant: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 123-4567",
      amount: "$2,500",
      vehicle: "2019 Honda Civic",
      status: "in_review",
      submittedDate: "Dec 14, 2025",
      underwriter: "James Rodriguez"
    },
    {
      id: "APP-002",
      applicant: "Michael Chen",
      email: "m.chen@email.com",
      phone: "(555) 234-5678",
      amount: "$3,200",
      vehicle: "2020 Toyota Corolla",
      status: "needs_docs",
      submittedDate: "Dec 13, 2025",
      underwriter: "Unassigned"
    },
    {
      id: "APP-003",
      applicant: "Jennifer Lee",
      email: "jen.lee@email.com",
      phone: "(555) 345-6789",
      amount: "$1,800",
      vehicle: "2018 Nissan Altima",
      status: "offer_ready",
      submittedDate: "Dec 13, 2025",
      underwriter: "Maria Garcia"
    },
    {
      id: "APP-004",
      applicant: "David Martinez",
      email: "david.m@email.com",
      phone: "(555) 456-7890",
      amount: "$4,000",
      vehicle: "2021 Ford F-150",
      status: "accepted",
      submittedDate: "Dec 12, 2025",
      underwriter: "James Rodriguez"
    },
    {
      id: "APP-005",
      applicant: "Emily Wilson",
      email: "emily.w@email.com",
      phone: "(555) 567-8901",
      amount: "$2,100",
      vehicle: "2017 Chevy Malibu",
      status: "signed",
      submittedDate: "Dec 12, 2025",
      underwriter: "Maria Garcia"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in_review":
        return "warn" as const;
      case "needs_docs":
        return "warn" as const;
      case "offer_ready":
        return "brand" as const;
      case "accepted":
        return "ok" as const;
      case "signed":
        return "ok" as const;
      default:
        return "default" as const;
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
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Applications Management</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Review, underwrite, and manage all customer applications. Assign underwriters and monitor document status.
        </p>
      </div>

      <Notice tone="info" title="Underwriter Tools">
        Use this dashboard to review applications, request documents, create offers, and track the entire application lifecycle. All changes are logged for audit purposes.
      </Notice>

      {/* Filters */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Filters & Search</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <label className="text-xs font-medium text-muted">Search by Name or Email</label>
            <Input
              type="text"
              placeholder="Sarah Johnson, sarah.j@email.com"
              className="mt-2"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted">Status</label>
            <select className="mt-2 w-full h-10 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg focus:outline-none focus:ring-2 focus:ring-brand/60">
              <option>All Statuses</option>
              <option>In Review</option>
              <option>Needs Documents</option>
              <option>Offer Ready</option>
              <option>Accepted</option>
              <option>Signed</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted">Underwriter</label>
            <select className="mt-2 w-full h-10 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg focus:outline-none focus:ring-2 focus:ring-brand/60">
              <option>All Underwriters</option>
              <option>James Rodriguez</option>
              <option>Maria Garcia</option>
              <option>Unassigned</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Button size="sm">Search</Button>
          <Button variant="secondary" size="sm">Reset Filters</Button>
        </div>
      </Card>

      {/* Applications Table */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">All Applications</h2>
        <p className="mt-1 text-sm text-muted">Total: {applications.length} applications</p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40">
                <th className="px-4 py-3 text-left font-semibold">ID</th>
                <th className="px-4 py-3 text-left font-semibold">Applicant</th>
                <th className="px-4 py-3 text-left font-semibold">Amount</th>
                <th className="px-4 py-3 text-left font-semibold">Vehicle</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Underwriter</th>
                <th className="px-4 py-3 text-left font-semibold">Submitted</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b border-border/20 hover:bg-bg/40">
                  <td className="px-4 py-3 font-medium text-brand">{app.id}</td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium">{app.applicant}</p>
                      <p className="text-xs text-muted">{app.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold">{app.amount}</td>
                  <td className="px-4 py-3 text-sm text-muted">{app.vehicle}</td>
                  <td className="px-4 py-3">
                    <Badge variant={getStatusColor(app.status)}>
                      {getStatusLabel(app.status)}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className={app.underwriter === "Unassigned" ? "text-muted" : ""}>
                      {app.underwriter}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted">{app.submittedDate}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <Button variant="tertiary" size="sm">
                      Review
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Next Steps */}
      <Card className="p-6 border-amber-500/30 bg-amber-500/5">
        <h2 className="text-sm font-semibold tracking-tight text-amber-600">Production Enhancements</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>• Implement role-based access control (RBAC) for underwriter permissions</li>
          <li>• Add audit logging for all application changes and document reviews</li>
          <li>• Create batch operations for bulk document requests</li>
          <li>• Build automated underwriting rules engine</li>
          <li>• Integrate with external credit and vehicle value services</li>
          <li>• Add compliance monitoring and reporting dashboard</li>
        </ul>
      </Card>
    </div>
  );
}

