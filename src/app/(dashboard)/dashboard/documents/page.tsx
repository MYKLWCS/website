import { getSessionUserId } from "@/lib/session";
import { getPrimaryVehicle, listDocumentsForUser } from "@/lib/mockDb";
import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";
import { DocumentUploadForm } from "@/components/dashboard/DocumentUploadForm";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function Page() {
  const userId = getSessionUserId()!;
  const vehicle = getPrimaryVehicle(userId);
  const uploadedDocuments = listDocumentsForUser(userId);

  const documentCategories = [
    {
      name: "Identity Documents",
      description: "Government-issued ID and proof of residency",
      items: ["Government ID (Driver's License, Passport)", "Proof of Address (Utility Bill, Lease)"]
    },
    {
      name: "Vehicle Documents",
      description: "Vehicle title and photos for verification",
      items: ["Vehicle Title", "Vehicle Photos (Front, Rear, Side, Odometer)"]
    },
    {
      name: "Income Verification",
      description: "Recent pay stubs or income statements",
      items: ["Recent Pay Stubs (2-4 weeks)", "Bank Statement (last 30 days)", "Tax Returns (if self-employed)"]
    },
    {
      name: "Agreements & Receipts",
      description: "Signed agreements and transaction records",
      items: ["Signed CAB Agreement", "Payment Receipts"]
    }
  ];

  const getStatusBadgeVariant = (status: "pending" | "approved" | "rejected") => {
    switch (status) {
      case "approved":
        return "ok" as const;
      case "pending":
        return "warn" as const;
      case "rejected":
        return "warn" as const;
    }
  };

  const getStatusLabel = (status: "pending" | "approved" | "rejected") => {
    switch (status) {
      case "approved":
        return "Approved";
      case "pending":
        return "Under Review";
      case "rejected":
        return "Rejected";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Documents</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Document Center</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Upload, manage, and track your documents. We require specific documents to verify eligibility and identity.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Notice tone="info" title="Why we ask for documents">
          We request documents to verify eligibility, identity, and vehicle details. This supports accurate CAB
          disclosures and a smoother approval process.
        </Notice>
        <Notice tone="cab" title="CAB Compliance">
          All disclosures appear before you sign any agreement. See{" "}
          <Link className="underline underline-offset-4 hover:text-fg" href="/legal/cab-disclosures">
            CAB disclosures
          </Link>
          .
        </Notice>
      </div>

      {/* Upload Form */}
      <DocumentUploadForm />

      {/* Uploaded Documents List */}
      {uploadedDocuments.length > 0 && (
        <Card className="p-6">
          <h2 className="text-sm font-semibold tracking-tight">Your Documents</h2>
          <p className="mt-1 text-sm text-muted">Documents you have uploaded and their current status</p>

          <div className="mt-4 space-y-3">
            {uploadedDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-border/40 bg-bg/25 p-4"
              >
                <div className="flex-1">
                  <p className="font-medium text-fg">{doc.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs text-muted">{doc.category}</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-muted">{new Date(doc.uploadedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <Badge variant={getStatusBadgeVariant(doc.status)}>
                  {getStatusLabel(doc.status)}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Required Documents by Category */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight">Required Documents by Category</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {documentCategories.map((category) => (
            <Card key={category.name} className="p-6">
              <h3 className="font-semibold tracking-tight">{category.name}</h3>
              <p className="mt-1 text-sm text-muted">{category.description}</p>
              <ul className="mt-3 space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-xs text-brand">✓</span>
                    <span className="text-sm text-fg">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Vehicle Photos Checklist */}
      {vehicle && (
        <Card className="p-6">
          <h2 className="text-sm font-semibold tracking-tight">Vehicle Photo Checklist</h2>
          <p className="mt-1 text-sm text-muted">
            Based on your primary vehicle: {vehicle.year} {vehicle.make} {vehicle.model}
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {vehicle.photos.map((photo) => (
              <div
                key={photo.key}
                className="flex items-center justify-between rounded-lg border border-border/40 bg-bg/25 p-4"
              >
                <div>
                  <p className="font-medium text-fg">{photo.label}</p>
                  <p className="mt-1 text-xs text-muted">Status: {photo.status}</p>
                </div>
                <Badge variant={photo.status === "approved" ? "ok" : "default"}>
                  {photo.status === "approved" ? "✓" : "—"}
                </Badge>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            For guided photo overlays with specific positioning requirements, use the{" "}
            <Link href="/dashboard/get-cash" className="underline underline-offset-4 hover:text-fg">
              Get Cash wizard
            </Link>
            .
          </p>
        </Card>
      )}

      <Notice tone="info" title="File Guidelines">
        <ul className="mt-2 space-y-1 text-sm">
          <li>• Accepted formats: PDF, JPG, PNG, DOCX</li>
          <li>• Maximum file size: 10MB per document</li>
          <li>• Ensure all document text is clearly legible</li>
          <li>• All four corners of IDs and titles must be visible</li>
        </ul>
      </Notice>
    </div>
  );
}
