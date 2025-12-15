import type { Agreement, Application, Document, Payment, User, Vehicle, WizardDraft } from "@/lib/types";

type Db = {
  users: User[];
  vehicles: Vehicle[];
  applications: Application[];
  agreements: Agreement[];
  payments: Payment[];
  documents: Document[];
  wizardDrafts: WizardDraft[];
};

function now() {
  return new Date().toISOString();
}

function uid(prefix: string) {
  return `${prefix}_${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
}

export const db: Db = {
  users: [
    {
      id: "u_demo",
      name: "Jordan Taylor",
      email: "demo@dollarloans.example",
      phone: "(555) 013-2048",
      address: "Austin, TX",
      identityStatus: "pending",
      createdAt: now()
    }
  ],
  vehicles: [
    {
      id: "v_demo",
      userId: "u_demo",
      vin: "1HGBH41JXMN109186",
      plate: "TX-DEMO1",
      year: 2017,
      make: "Toyota",
      model: "Camry",
      trim: "SE",
      mileage: 104120,
      condition: "good",
      titleStatus: "clear",
      photos: [
        { key: "front", label: "Front", status: "uploaded" },
        { key: "back", label: "Back", status: "missing" },
        { key: "side_left", label: "Left side", status: "missing" },
        { key: "side_right", label: "Right side", status: "missing" },
        { key: "odometer", label: "Odometer", status: "missing" },
        { key: "vin_plate", label: "VIN plate", status: "missing" },
        { key: "title", label: "Title photo", status: "missing" }
      ],
      valuationSnapshot: { low: 1200, high: 2400, updatedAt: now() }
    }
  ],
  applications: [
    {
      id: "a_demo",
      userId: "u_demo",
      vehicleId: "v_demo",
      status: "offer_ready",
      requestedAmount: 1400,
      estimateRange: { low: 1200, high: 2400 },
      finalOffer: {
        amount: 1500,
        termMonths: 6,
        feeCategories: [
          { label: "CAB access fee (example)", amount: 180 },
          { label: "Creditor charge(s) (example)", amount: 210 }
        ]
      },
      cabDisclosureVersion: "v1",
      createdAt: now(),
      updatedAt: now()
    }
  ],
  agreements: [
    {
      id: "ag_demo",
      applicationId: "a_demo",
      label: "CAB Title Access Agreement",
      balance: 980,
      paymentSchedule: Array.from({ length: 6 }).map((_, i) => ({
        dueDate: new Date(Date.now() + (i + 1) * 14 * 24 * 3600 * 1000).toISOString(),
        amount: 215,
        status: i === 0 ? "upcoming" : "upcoming"
      })),
      signedDocs: [{ name: "CAB Title Access Agreement (sample)", url: "/legal/cab-disclosures" }]
    }
  ],
  payments: [
    {
      id: "p_demo",
      agreementId: "ag_demo",
      amount: 215,
      method: "bank",
      status: "succeeded",
      timestamp: now()
    }
  ],
  documents: [],
  wizardDrafts: []
};

export function ensureUser(email: string, name?: string) {
  const existing = db.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existing) return existing;
  const user: User = {
    id: uid("u"),
    name: name?.trim() || "New Customer",
    email,
    identityStatus: "unverified",
    createdAt: now()
  };
  db.users.push(user);
  return user;
}

export function getUserById(id: string) {
  return db.users.find((u) => u.id === id) || null;
}

export function getPrimaryVehicle(userId: string) {
  return db.vehicles.find((v) => v.userId === userId) || null;
}

export function getLatestApplication(userId: string) {
  const apps = db.applications.filter((a) => a.userId === userId);
  return apps.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))[0] || null;
}

export function getActiveAgreementForUser(userId: string) {
  const app = getLatestApplication(userId);
  if (!app) return null;
  return db.agreements.find((ag) => ag.applicationId === app.id) || null;
}

export function upsertWizardDraft(userId: string, data: Record<string, unknown>) {
  const existing = db.wizardDrafts.find((d) => d.userId === userId);
  const draft: WizardDraft = existing
    ? { ...existing, data, updatedAt: now() }
    : { id: uid("wd"), userId, data, updatedAt: now() };
  if (!existing) db.wizardDrafts.push(draft);
  if (existing) Object.assign(existing, draft);
  return draft;
}

export function getWizardDraft(userId: string) {
  return db.wizardDrafts.find((d) => d.userId === userId) || null;
}

export function listVehicles(userId: string) {
  return db.vehicles.filter((v) => v.userId === userId);
}

export function addVehicle(userId: string, input: Partial<Vehicle>) {
  const vehicle: Vehicle = {
    id: uid("v"),
    userId,
    vin: input.vin,
    plate: input.plate,
    year: Number(input.year || 2016),
    make: String(input.make || "Unknown"),
    model: String(input.model || "Vehicle"),
    trim: input.trim,
    mileage: Number(input.mileage || 0),
    condition: (input.condition as any) || "good",
    titleStatus: (input.titleStatus as any) || "clear",
    photos: [
      { key: "front", label: "Front", status: "missing" },
      { key: "back", label: "Back", status: "missing" },
      { key: "side_left", label: "Left side", status: "missing" },
      { key: "side_right", label: "Right side", status: "missing" },
      { key: "odometer", label: "Odometer", status: "missing" },
      { key: "vin_plate", label: "VIN plate", status: "missing" },
      { key: "title", label: "Title photo", status: "missing" }
    ],
    valuationSnapshot: undefined
  };
  db.vehicles.push(vehicle);
  return vehicle;
}

export function listPaymentsForUser(userId: string) {
  const appIds = db.applications.filter((a) => a.userId === userId).map((a) => a.id);
  const agreementIds = db.agreements.filter((ag) => appIds.includes(ag.applicationId)).map((ag) => ag.id);
  return db.payments.filter((p) => agreementIds.includes(p.agreementId));
}

export function addPayment(agreementId: string, amount: number, method: Payment["method"]) {
  const payment: Payment = {
    id: uid("p"),
    agreementId,
    amount,
    method,
    status: "succeeded",
    timestamp: now()
  };
  db.payments.push(payment);
  return payment;
}

export function listDocumentsForUser(userId: string) {
  return db.documents
    .filter((d) => d.userId === userId)
    .sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1));
}

export function addDocuments(
  userId: string,
  input: Array<{
    category: string;
    name: string;
    size: number;
    type: string;
    applicationId?: string;
    vehicleId?: string;
  }>
) {
  const docs: Document[] = input.map((x) => ({
    id: uid("doc"),
    userId,
    category: x.category,
    name: x.name,
    size: x.size,
    type: x.type,
    applicationId: x.applicationId,
    vehicleId: x.vehicleId,
    status: "pending",
    uploadedAt: now()
  }));
  db.documents.push(...docs);
  return docs;
}
