import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Notice } from "@/components/ui/Notice";

export default function Page() {
  const offers = [
    {
      id: "OFFER-001",
      applicant: "Sarah Johnson",
      applicationId: "APP-001",
      loanAmount: "$2,500",
      rate: "18.9%",
      term: "24 months",
      monthlyPayment: "$123.45",
      totalFees: "$461.80",
      status: "pending",
      createdDate: "Dec 14, 2025",
      expiresDate: "Dec 21, 2025"
    },
    {
      id: "OFFER-002",
      applicant: "Jennifer Lee",
      applicationId: "APP-003",
      loanAmount: "$1,800",
      rate: "17.5%",
      term: "18 months",
      monthlyPayment: "$106.20",
      totalFees: "$313.60",
      status: "accepted",
      createdDate: "Dec 13, 2025",
      expiresDate: "Dec 20, 2025"
    },
    {
      id: "OFFER-003",
      applicant: "David Martinez",
      applicationId: "APP-004",
      loanAmount: "$4,000",
      rate: "19.2%",
      term: "30 months",
      monthlyPayment: "$155.80",
      totalFees: "$673.40",
      status: "pending",
      createdDate: "Dec 12, 2025",
      expiresDate: "Dec 19, 2025"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "accepted":
        return "ok" as const;
      case "pending":
        return "warn" as const;
      case "expired":
        return "warn" as const;
      case "rejected":
        return "warn" as const;
      default:
        return "default" as const;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Offer Management</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Create, review, and adjust loan offers. All rates and terms must comply with CAB compliance requirements.
        </p>
      </div>

      <Notice tone="info" title="Offer Compliance">
        All offers must include CAB disclosures. Ensure accuracy before sending to customers. Rate and term adjustments require underwriter approval.
      </Notice>

      {/* Offer Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Pending Offers</p>
          <p className="mt-2 text-3xl font-semibold">5</p>
          <p className="mt-1 text-xs text-muted">Awaiting acceptance</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Accepted</p>
          <p className="mt-2 text-3xl font-semibold">23</p>
          <p className="mt-1 text-xs text-muted">Total value: $45.6K</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Avg Interest Rate</p>
          <p className="mt-2 text-3xl font-semibold">18.2%</p>
          <p className="mt-1 text-xs text-muted">Based on vehicle value</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Avg Term</p>
          <p className="mt-2 text-3xl font-semibold">24</p>
          <p className="mt-1 text-xs text-muted">months</p>
        </Card>
      </div>

      {/* Active Offers */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Active Offers</h2>
        <p className="mt-1 text-sm text-muted">Showing {offers.length} offers</p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40">
                <th className="px-4 py-3 text-left font-semibold">Offer ID</th>
                <th className="px-4 py-3 text-left font-semibold">Applicant</th>
                <th className="px-4 py-3 text-left font-semibold">Amount</th>
                <th className="px-4 py-3 text-left font-semibold">Rate</th>
                <th className="px-4 py-3 text-left font-semibold">Term</th>
                <th className="px-4 py-3 text-left font-semibold">Monthly</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Expires</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id} className="border-b border-border/20 hover:bg-bg/40">
                  <td className="px-4 py-3 font-medium text-brand">{offer.id}</td>
                  <td className="px-4 py-3">{offer.applicant}</td>
                  <td className="px-4 py-3 font-semibold">{offer.loanAmount}</td>
                  <td className="px-4 py-3">{offer.rate}</td>
                  <td className="px-4 py-3">{offer.term}</td>
                  <td className="px-4 py-3 font-medium">{offer.monthlyPayment}</td>
                  <td className="px-4 py-3">
                    <Badge variant={getStatusVariant(offer.status)}>
                      {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted">{offer.expiresDate}</td>
                  <td className="px-4 py-3 flex gap-1">
                    <Button variant="tertiary" size="sm">
                      Review
                    </Button>
                    {offer.status === "pending" && (
                      <Button variant="secondary" size="sm">
                        Edit
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Offer Guidelines */}
      <Card className="p-6 border-brand2/30 bg-brand2/5">
        <h2 className="text-sm font-semibold tracking-tight text-brand2">Offer Guidelines</h2>
        <div className="mt-4 space-y-2 text-sm text-muted">
          <p>• <strong>Rate Range:</strong> 16.5% - 21.9% based on vehicle value</p>
          <p>• <strong>Term Options:</strong> 12, 18, 24, 30, or 36 months</p>
          <p>• <strong>Loan Amount:</strong> Vehicle value × 0.5 to 0.9</p>
          <p>• <strong>CAB Fees:</strong> Automatically calculated and disclosed</p>
          <p>• <strong>Offer Validity:</strong> 7 days from creation</p>
          <p>• <strong>Adjustments:</strong> Requires manager approval if outside policy</p>
        </div>
      </Card>

      {/* Create New Offer */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Create New Offer</h2>
        <p className="mt-1 text-sm text-muted">For application APP-002 (Michael Chen)</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-muted">Loan Amount</label>
            <Input type="text" placeholder="$3,200" className="mt-2" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted">Interest Rate (%)</label>
            <Input type="text" placeholder="18.5" className="mt-2" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted">Term (months)</label>
            <select className="mt-2 w-full h-10 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg focus:outline-none focus:ring-2 focus:ring-brand/60">
              <option>12</option>
              <option>18</option>
              <option>24</option>
              <option>30</option>
              <option>36</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted">CAB Fee</label>
            <Input type="text" placeholder="$285.00" disabled className="mt-2 opacity-50" />
          </div>
        </div>

        <div className="mt-4 p-3 bg-bg/25 rounded-lg border border-border/40">
          <p className="text-xs font-medium">Preview:</p>
          <p className="mt-2 text-sm">Monthly Payment: <span className="font-semibold">$156.23</span></p>
          <p className="mt-1 text-sm">Total Amount: <span className="font-semibold">$3,748.92</span></p>
        </div>

        <div className="mt-4 flex gap-2">
          <Button>Create & Send Offer</Button>
          <Button variant="secondary">Save Draft</Button>
        </div>
      </Card>
    </div>
  );
}
