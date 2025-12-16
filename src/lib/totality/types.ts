/**
 * Totality LMS Type Definitions
 *
 * These types define the data structures expected by Totality LMS.
 * Update these based on actual Totality API documentation.
 */

// SSO Types
export interface TotalityUser {
  id: string;
  email: string;
  name: string;
  tenantId: string;
  roles: string[];
  metadata?: Record<string, unknown>;
}

export interface TotalitySession {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
  user: TotalityUser;
}

// Application Types (internal → Totality mapping)
export interface TotalityApplication {
  id?: string;
  applicantId: string;
  tenantId: string;
  requestedAmount: number;
  estimateRange: {
    low: number;
    high: number;
  };
  vehicleInfo: {
    vin?: string;
    year: number;
    make: string;
    model: string;
    mileage: number;
    condition: "excellent" | "good" | "fair";
  };
  applicantInfo?: {
    fullName?: string;
    email?: string;
    phone?: string;
    address?: string;
  };
  status: "draft" | "submitted" | "in_review" | "approved" | "declined" | "funded";
  submittedAt?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}

// Document Types
export interface TotalityDocument {
  id?: string;
  applicationId: string;
  userId: string;
  documentType: "vehicle_photo" | "id" | "proof_of_income" | "title" | "other";
  fileName: string;
  fileSize: number;
  mimeType: string;
  status: "pending" | "approved" | "rejected";
  uploadedAt: string;
  url?: string;
  metadata?: Record<string, unknown>;
}

// xAPI Event Types (for analytics)
export interface XAPIStatement {
  actor: {
    objectType: "Agent";
    account: {
      homePage: string;
      name: string;
    };
  };
  verb: {
    id: string;
    display: {
      "en-US": string;
    };
  };
  object: {
    id: string;
    definition?: {
      name?: { "en-US": string };
      description?: { "en-US": string };
      type?: string;
    };
  };
  context?: {
    platform?: string;
    language?: string;
    extensions?: Record<string, unknown>;
  };
  result?: {
    score?: {
      scaled?: number;
      raw?: number;
      min?: number;
      max?: number;
    };
    completion?: boolean;
    success?: boolean;
    duration?: string;
  };
  timestamp: string;
}

// API Response Types
export interface TotalityAPIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta?: {
    requestId: string;
    timestamp: string;
  };
}

// Webhook Types
export interface TotalityWebhookPayload {
  event: string;
  timestamp: string;
  tenantId: string;
  data: Record<string, unknown>;
  signature?: string;
}
