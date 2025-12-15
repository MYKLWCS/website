export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  identityStatus: "unverified" | "pending" | "verified";
  createdAt: string;
};

export type Vehicle = {
  id: string;
  userId: string;
  vin?: string;
  plate?: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  mileage: number;
  condition: "excellent" | "good" | "fair";
  titleStatus: "clear" | "lien" | "other";
  photos: Array<{ key: string; label: string; status: "missing" | "uploaded" | "approved" }>;
  valuationSnapshot?: { low: number; high: number; updatedAt: string };
};

export type Application = {
  id: string;
  userId: string;
  vehicleId?: string;
  status:
    | "draft"
    | "in_review"
    | "needs_docs"
    | "offer_ready"
    | "accepted"
    | "signed"
    | "funded"
    | "declined";
  requestedAmount?: number;
  estimateRange?: { low: number; high: number };
  finalOffer?: { amount: number; feeCategories: Array<{ label: string; amount: number }>; termMonths: number };
  cabDisclosureVersion?: string;
  createdAt: string;
  updatedAt: string;
};

export type Agreement = {
  id: string;
  applicationId: string;
  label: "CAB Title Access Agreement";
  balance: number;
  paymentSchedule: Array<{ dueDate: string; amount: number; status: "upcoming" | "paid" }>;
  signedDocs: Array<{ name: string; url: string }>;
};

export type Payment = {
  id: string;
  agreementId: string;
  amount: number;
  method: "bank" | "card";
  status: "processing" | "succeeded" | "failed";
  timestamp: string;
};

export type WizardDraft = {
  id: string;
  userId: string;
  updatedAt: string;
  data: Record<string, unknown>;
};

