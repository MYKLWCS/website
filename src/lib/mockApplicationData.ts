/**
 * Mock application data for admin panels
 * In production, this would be replaced with database queries
 */

export interface Application {
  id: string;
  applicantName: string;
  email: string;
  phone: string;
  requestedAmount: number;
  vehicle: {
    year: number;
    make: string;
    model: string;
    vin?: string;
  };
  status: "draft" | "in_review" | "needs_docs" | "offer_ready" | "accepted" | "signed" | "funded" | "declined";
  documentsReceived: string[];
  documentsNeeded: string[];
  assignedUnderwriter?: string;
  createdDate: Date;
  estimatedAmount: {
    low: number;
    high: number;
  };
  offerAmount?: number;
  offerTerm?: number;
  offerCreatedDate?: Date;
  verificationStatus: {
    identity: "pending" | "verified" | "failed";
    income: "pending" | "verified" | "failed";
    vehicle: "pending" | "verified" | "failed";
    creditCheck: "pending" | "approved" | "declined";
  };
  notes: string[];
  agreementSignedDate?: Date;
  fundingDate?: Date;
}

const mockUnderwriters = ["James Rodriguez", "Maria Garcia", "Robert Wilson", "Jessica Brown"];

const mockDocuments = [
  "Driver License",
  "Proof of Income",
  "Paystub",
  "Tax Return",
  "Vehicle Title",
  "Vehicle Registration",
  "Odometer Reading",
  "Vehicle Photos",
  "Insurance Proof"
];

export const getMockApplications = (): Application[] => {
  const today = new Date();

  return [
    {
      id: "APP-001",
      applicantName: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 123-4567",
      requestedAmount: 2500,
      vehicle: { year: 2019, make: "Honda", model: "Civic", vin: "19XHZ1F76KE123456" },
      status: "in_review",
      documentsReceived: ["Driver License", "Proof of Income", "Vehicle Title"],
      documentsNeeded: ["Odometer Reading", "Vehicle Photos"],
      assignedUnderwriter: "James Rodriguez",
      createdDate: new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000),
      estimatedAmount: { low: 2000, high: 2800 },
      verificationStatus: {
        identity: "verified",
        income: "verified",
        vehicle: "pending",
        creditCheck: "pending"
      },
      notes: [
        "Waiting for vehicle photos",
        "Income verification complete"
      ]
    },
    {
      id: "APP-002",
      applicantName: "Michael Chen",
      email: "m.chen@email.com",
      phone: "(555) 234-5678",
      requestedAmount: 3200,
      vehicle: { year: 2020, make: "Toyota", model: "Corolla", vin: "20XYZ2G87JF234567" },
      status: "needs_docs",
      documentsReceived: ["Driver License"],
      documentsNeeded: ["Proof of Income", "Vehicle Title", "Vehicle Registration", "Vehicle Photos"],
      assignedUnderwriter: undefined,
      createdDate: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000),
      estimatedAmount: { low: 2500, high: 3500 },
      verificationStatus: {
        identity: "verified",
        income: "pending",
        vehicle: "pending",
        creditCheck: "pending"
      },
      notes: [
        "Auto-request documents sent to applicant",
        "Awaiting response"
      ]
    },
    {
      id: "APP-003",
      applicantName: "Jennifer Lee",
      email: "jen.lee@email.com",
      phone: "(555) 345-6789",
      requestedAmount: 1800,
      vehicle: { year: 2018, make: "Nissan", model: "Altima", vin: "18XBC3H98KM345678" },
      status: "offer_ready",
      documentsReceived: ["Driver License", "Proof of Income", "Vehicle Title", "Vehicle Photos"],
      documentsNeeded: [],
      assignedUnderwriter: "Maria Garcia",
      createdDate: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000),
      estimatedAmount: { low: 1500, high: 2200 },
      offerAmount: 1850,
      offerTerm: 6,
      offerCreatedDate: new Date(today.getTime() - 6 * 60 * 60 * 1000),
      verificationStatus: {
        identity: "verified",
        income: "verified",
        vehicle: "verified",
        creditCheck: "approved"
      },
      notes: [
        "All documents verified",
        "Ready for e-signature",
        "Offer sent to applicant"
      ]
    },
    {
      id: "APP-004",
      applicantName: "David Martinez",
      email: "david.m@email.com",
      phone: "(555) 456-7890",
      requestedAmount: 4000,
      vehicle: { year: 2021, make: "Ford", model: "F-150", vin: "21XDE4J09LN456789" },
      status: "accepted",
      documentsReceived: ["Driver License", "Proof of Income", "Vehicle Title", "Vehicle Photos", "Vehicle Registration"],
      documentsNeeded: [],
      assignedUnderwriter: "James Rodriguez",
      createdDate: new Date(today.getTime() - 4 * 24 * 60 * 60 * 1000),
      estimatedAmount: { low: 3500, high: 4500 },
      offerAmount: 4200,
      offerTerm: 6,
      offerCreatedDate: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000),
      verificationStatus: {
        identity: "verified",
        income: "verified",
        vehicle: "verified",
        creditCheck: "approved"
      },
      notes: [
        "Applicant accepted offer",
        "Waiting for document signing",
        "Scheduled for e-sign on Dec 16"
      ]
    },
    {
      id: "APP-005",
      applicantName: "Emily Wilson",
      email: "emily.w@email.com",
      phone: "(555) 567-8901",
      requestedAmount: 2100,
      vehicle: { year: 2017, make: "Chevrolet", model: "Malibu", vin: "17XEF5K10MP567890" },
      status: "signed",
      documentsReceived: ["Driver License", "Proof of Income", "Vehicle Title", "Vehicle Photos", "Vehicle Registration"],
      documentsNeeded: [],
      assignedUnderwriter: "Maria Garcia",
      createdDate: new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000),
      estimatedAmount: { low: 1800, high: 2400 },
      offerAmount: 2150,
      offerTerm: 6,
      offerCreatedDate: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000),
      agreementSignedDate: new Date(today.getTime() - 12 * 60 * 60 * 1000),
      verificationStatus: {
        identity: "verified",
        income: "verified",
        vehicle: "verified",
        creditCheck: "approved"
      },
      notes: [
        "Agreement signed",
        "Ready for funding",
        "Scheduled funding for Dec 17"
      ]
    },
    {
      id: "APP-006",
      applicantName: "Robert Thompson",
      email: "robert.t@email.com",
      phone: "(555) 678-9012",
      requestedAmount: 3500,
      vehicle: { year: 2019, make: "BMW", model: "3 Series", vin: "19XFG6L21NQ678901" },
      status: "declined",
      documentsReceived: ["Driver License", "Proof of Income", "Vehicle Photos"],
      documentsNeeded: ["Vehicle Title"],
      assignedUnderwriter: "Robert Wilson",
      createdDate: new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000),
      estimatedAmount: { low: 3000, high: 4000 },
      verificationStatus: {
        identity: "verified",
        income: "failed",
        vehicle: "verified",
        creditCheck: "declined"
      },
      notes: [
        "Income verification failed",
        "Credit check declined",
        "Applicant notified of decline"
      ]
    },
    {
      id: "APP-007",
      applicantName: "Amanda Garcia",
      email: "amanda.g@email.com",
      phone: "(555) 789-0123",
      requestedAmount: 2800,
      vehicle: { year: 2020, make: "Honda", model: "CR-V", vin: "20XGH7M32OR789012" },
      status: "funded",
      documentsReceived: ["Driver License", "Proof of Income", "Vehicle Title", "Vehicle Photos", "Vehicle Registration"],
      documentsNeeded: [],
      assignedUnderwriter: "Jessica Brown",
      createdDate: new Date(today.getTime() - 8 * 24 * 60 * 60 * 1000),
      estimatedAmount: { low: 2400, high: 3200 },
      offerAmount: 2900,
      offerTerm: 6,
      offerCreatedDate: new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000),
      agreementSignedDate: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000),
      fundingDate: new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000),
      verificationStatus: {
        identity: "verified",
        income: "verified",
        vehicle: "verified",
        creditCheck: "approved"
      },
      notes: [
        "Funds disbursed successfully",
        "Title transferred to creditor",
        "Loan agreement active"
      ]
    }
  ];
};

export const getApplicationById = (id: string): Application | undefined => {
  return getMockApplications().find(app => app.id === id);
};

export const getApplicationsByStatus = (status: Application["status"]): Application[] => {
  return getMockApplications().filter(app => app.status === status);
};

export const getApplicationsByUnderwriter = (underwriter: string): Application[] => {
  return getMockApplications().filter(app => app.assignedUnderwriter === underwriter);
};

export const getUnderwriterList = (): string[] => {
  return mockUnderwriters;
};

export const getApplicationStats = () => {
  const all = getMockApplications();

  return {
    total: all.length,
    inReview: all.filter(a => a.status === "in_review").length,
    needsDocs: all.filter(a => a.status === "needs_docs").length,
    offerReady: all.filter(a => a.status === "offer_ready").length,
    accepted: all.filter(a => a.status === "accepted").length,
    signed: all.filter(a => a.status === "signed").length,
    funded: all.filter(a => a.status === "funded").length,
    declined: all.filter(a => a.status === "declined").length,
    totalValue: all.reduce((sum, a) => sum + a.requestedAmount, 0),
    averageAmount: Math.round(all.reduce((sum, a) => sum + a.requestedAmount, 0) / all.length)
  };
};
