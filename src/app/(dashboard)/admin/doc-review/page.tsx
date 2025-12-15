import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";

export default function Page() {
  const documents = [
    {
      id: "DOC-001",
      filename: "Government ID (front).pdf",
      applicant: "Sarah Johnson",
      applicationId: "APP-001",
      category: "Identity",
      uploadedDate: "Dec 14, 2025",
      status: "pending",
      quality: "clear"
    },
    {
      id: "DOC-002",
      filename: "Proof of address.pdf",
      applicant: "Sarah Johnson",
      applicationId: "APP-001",
      category: "Identity",
      uploadedDate: "Dec 14, 2025",
      status: "pending",
      quality: "clear"
    },
    {
      id: "DOC-003",
      filename: "Vehicle front photo.jpg",
      applicant: "Michael Chen",
      applicationId: "APP-002",
      category: "Vehicle",
      uploadedDate: "Dec 13, 2025",
      status: "rejected",
      quality: "blurry"
    },
    {
      id: "DOC-004",
      filename: "Pay stub - December.pdf",
      applicant: "Jennifer Lee",
      applicationId: "APP-003",
      category: "Income",
      uploadedDate: "Dec 13, 2025",
      status: "approved",
      quality: "clear"
    },
    {
      id: "DOC-005",
      filename: "Bank statement.pdf",
      applicant: "David Martinez",
      applicationId: "APP-004",
      category: "Income",
      uploadedDate: "Dec 12, 2025",
      status: "pending",
      quality: "clear"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "approved":
        return "ok" as const;
      case "pending":
        return "warn" as const;
      case "rejected":
        return "warn" as const;
      default:
        return "default" as const;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "approved":
        return "Approved";
      case "pending":
        return "Pending Review";
      case "rejected":
        return "Rejected";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Document Review</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Review, approve, or reject customer documents. All decisions are logged with audit trails.
        </p>
      </div>

      <Notice tone="info" title="Document Review Queue">
        Review documents for clarity, completeness, and compliance. All rejections must include a reason for customer guidance.
      </Notice>

      {/* Queue Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Pending Review</p>
          <p className="mt-2 text-3xl font-semibold">8</p>
          <p className="mt-1 text-xs text-muted">Average wait: 2.3 days</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Approved Today</p>
          <p className="mt-2 text-3xl font-semibold">23</p>
          <p className="mt-1 text-xs text-muted">98% approval rate</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Rejected Today</p>
          <p className="mt-2 text-3xl font-semibold">2</p>
          <p className="mt-1 text-xs text-muted">Quality issues</p>
        </Card>
      </div>

      {/* Documents Queue */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Document Queue</h2>
        <p className="mt-1 text-sm text-muted">Showing {documents.length} documents</p>

        <div className="mt-4 space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="border border-border/40 rounded-lg p-4 hover:bg-bg/40 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm">{doc.filename}</p>
                    <Badge variant={getStatusVariant(doc.status)}>
                      {getStatusLabel(doc.status)}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted">
                    <span>{doc.applicant}</span>
                    <span>•</span>
                    <span>{doc.applicationId}</span>
                    <span>•</span>
                    <span className="bg-bg/25 px-2 py-1 rounded">{doc.category}</span>
                    <span>•</span>
                    <span>{doc.uploadedDate}</span>
                  </div>
                  <p className="mt-2 text-xs">
                    Quality: <span className="text-fg font-medium">{doc.quality.charAt(0).toUpperCase() + doc.quality.slice(1)}</span>
                  </p>
                </div>

                {doc.status === "pending" && (
                  <div className="ml-4 flex gap-2">
                    <Button variant="secondary" size="sm">
                      Preview
                    </Button>
                    <Button size="sm">
                      Approve
                    </Button>
                    <Button variant="danger" size="sm">
                      Reject
                    </Button>
                  </div>
                )}
                {doc.status === "approved" && (
                  <div className="ml-4 text-xs text-ok font-medium">
                    ✓ Approved
                  </div>
                )}
                {doc.status === "rejected" && (
                  <div className="ml-4 text-xs text-brand2 font-medium">
                    ✕ Rejected
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Audit Trail */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">Recent Actions</h2>
        <p className="mt-1 text-sm text-muted">All document review decisions</p>

        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3 text-sm">
            <span className="text-xs text-ok font-semibold mt-0.5">✓</span>
            <div className="flex-1">
              <p className="font-medium">Sarah Johnson - Pay stub approved</p>
              <p className="text-xs text-muted">James Rodriguez • 2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="text-xs text-danger font-semibold mt-0.5">✕</span>
            <div className="flex-1">
              <p className="font-medium">Michael Chen - Vehicle photo rejected</p>
              <p className="text-xs text-muted">Maria Garcia • 4 hours ago • Reason: Blurry image, resubmit</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="text-xs text-ok font-semibold mt-0.5">✓</span>
            <div className="flex-1">
              <p className="font-medium">Jennifer Lee - Government ID approved</p>
              <p className="text-xs text-muted">James Rodriguez • 1 day ago</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
