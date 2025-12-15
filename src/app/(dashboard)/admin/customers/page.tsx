import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Notice } from "@/components/ui/Notice";

export default function Page() {
  const customers = [
    {
      id: "C-001",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 123-4567",
      status: "active",
      joinDate: "Oct 15, 2024",
      totalLoans: 1,
      lastActivity: "Dec 14, 2025"
    },
    {
      id: "C-002",
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "(555) 234-5678",
      status: "active",
      joinDate: "Nov 2, 2024",
      totalLoans: 0,
      lastActivity: "Dec 13, 2025"
    },
    {
      id: "C-003",
      name: "Jennifer Lee",
      email: "jen.lee@email.com",
      phone: "(555) 345-6789",
      status: "active",
      joinDate: "Sep 22, 2024",
      totalLoans: 2,
      lastActivity: "Dec 12, 2025"
    },
    {
      id: "C-004",
      name: "David Martinez",
      email: "david.m@email.com",
      phone: "(555) 456-7890",
      status: "suspended",
      joinDate: "Aug 10, 2024",
      totalLoans: 1,
      lastActivity: "Nov 28, 2025"
    },
    {
      id: "C-005",
      name: "Emily Wilson",
      email: "emily.w@email.com",
      phone: "(555) 567-8901",
      status: "active",
      joinDate: "Dec 1, 2024",
      totalLoans: 1,
      lastActivity: "Dec 13, 2025"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "ok" as const;
      case "suspended":
        return "warn" as const;
      case "inactive":
        return "default" as const;
      default:
        return "default" as const;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Customer Management</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Search, verify, and manage customer accounts. View account history and support tickets.
        </p>
      </div>

      <Notice tone="info" title="Customer Support">
        Use this dashboard to access customer information, verify identities, resolve issues, and manage account status. All customer interactions are logged.
      </Notice>

      {/* Search & Filters */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Find Customer</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-muted">Name or Email</label>
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
              <option>Active</option>
              <option>Suspended</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Button size="sm">Search</Button>
          <Button variant="secondary" size="sm">Advanced Search</Button>
        </div>
      </Card>

      {/* Customers Table */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">All Customers</h2>
        <p className="mt-1 text-sm text-muted">Total: {customers.length} customers</p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40">
                <th className="px-4 py-3 text-left font-semibold">ID</th>
                <th className="px-4 py-3 text-left font-semibold">Name</th>
                <th className="px-4 py-3 text-left font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Loans</th>
                <th className="px-4 py-3 text-left font-semibold">Joined</th>
                <th className="px-4 py-3 text-left font-semibold">Last Active</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-border/20 hover:bg-bg/40">
                  <td className="px-4 py-3 font-medium text-brand">{customer.id}</td>
                  <td className="px-4 py-3">{customer.name}</td>
                  <td className="px-4 py-3 text-sm text-muted">{customer.email}</td>
                  <td className="px-4 py-3">
                    <Badge variant={getStatusVariant(customer.status)}>
                      {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 font-semibold">{customer.totalLoans}</td>
                  <td className="px-4 py-3 text-sm text-muted">{customer.joinDate}</td>
                  <td className="px-4 py-3 text-sm text-muted">{customer.lastActivity}</td>
                  <td className="px-4 py-3 flex gap-1">
                    <Button variant="tertiary" size="sm">
                      View
                    </Button>
                    <Button variant="tertiary" size="sm">
                      Contact
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center text-xs text-muted">
          <span>Showing 1-5 of {customers.length}</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded hover:bg-bg/40">Previous</button>
            <button className="px-3 py-1 rounded bg-bg/40">1</button>
            <button className="px-3 py-1 rounded hover:bg-bg/40">Next</button>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Active Customers</p>
          <p className="mt-2 text-3xl font-semibold">245</p>
          <p className="mt-1 text-xs text-muted">↑ 12 this month</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Support Tickets</p>
          <p className="mt-2 text-3xl font-semibold">8</p>
          <p className="mt-1 text-xs text-muted">3 pending response</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Verifications Pending</p>
          <p className="mt-2 text-3xl font-semibold">12</p>
          <p className="mt-1 text-xs text-muted">Awaiting documents</p>
        </Card>
      </div>
    </div>
  );
}

