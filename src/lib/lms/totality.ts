/**
 * Totality LMS Integration Module
 * Handles integration with the Totality Learning Management System
 * for education, tracking, and compliance purposes
 */

import { track } from "@/lib/analytics";

export type LMSEventType =
  | "user_registered"
  | "user_completed_lesson"
  | "user_passed_assessment"
  | "user_failed_assessment"
  | "user_completed_course"
  | "application_started"
  | "application_completed"
  | "document_verified"
  | "compliance_acknowledged"
  | "wizard_step_completed"
  | "offer_accepted"
  | "agreement_signed"
  | "payment_made"
  | "support_ticket_created";

export interface LMSUserProfile {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  totalityId?: string;
  registeredAt: string;
  completedLessons: string[];
  completedCourses: string[];
  progress: number; // 0-100
  customAttributes?: Record<string, any>;
}

export interface LMSEvent {
  type: LMSEventType;
  userId: string;
  timestamp: string;
  data?: Record<string, any>;
  metadata?: {
    source: string;
    version: string;
    environment: string;
  };
}

export interface LMSProgress {
  userId: string;
  courseId: string;
  completionPercentage: number;
  lessonsCompleted: number;
  lessonsTotal: number;
  lastAccessedAt: string;
  assessmentsPassed: number;
  assessmentsFailed: number;
}

class TotalityLMSIntegration {
  private baseUrl: string;
  private apiKey: string;
  private clientId: string;
  private sessionId: string | null = null;
  private enabled: boolean;

  constructor() {
    this.baseUrl = process.env.TOTALITY_LMS_URL || "https://api.totality-lms.com";
    this.apiKey = process.env.TOTALITY_LMS_API_KEY || "";
    this.clientId = process.env.TOTALITY_CLIENT_ID || "dollar-loans";
    this.enabled = this.apiKey.length > 0;
  }

  /**
   * Initialize LMS session
   */
  async initialize(userId: string): Promise<boolean> {
    if (!this.enabled) return false;

    try {
      const response = await fetch(`${this.baseUrl}/session/initialize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
          "X-Client-ID": this.clientId,
        },
        body: JSON.stringify({
          userId,
          clientId: this.clientId,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error("[LMS] Session initialization failed:", response.statusText);
        return false;
      }

      const data = (await response.json()) as any;
      this.sessionId = data.sessionId;
      return true;
    } catch (error) {
      console.error("[LMS] Initialization error:", error);
      return false;
    }
  }

  /**
   * Track an event in the LMS
   */
  async trackEvent(event: LMSEvent): Promise<boolean> {
    if (!this.enabled || !this.sessionId) return false;

    try {
      // Also track locally (cast to avoid type mismatch)
      await track(event.type as any, {
        userId: event.userId,
        ...event.data,
      });

      const response = await fetch(`${this.baseUrl}/events/track`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
          "X-Session-ID": this.sessionId,
          "X-Client-ID": this.clientId,
        },
        body: JSON.stringify({
          ...event,
          metadata: {
            source: "dollar-loans-web",
            version: "1.0.0",
            environment: process.env.NODE_ENV,
          },
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("[LMS] Event tracking error:", error);
      return false;
    }
  }

  /**
   * Get user profile from LMS
   */
  async getUserProfile(userId: string): Promise<LMSUserProfile | null> {
    if (!this.enabled) return null;

    try {
      const response = await fetch(`${this.baseUrl}/users/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "X-Client-ID": this.clientId,
        },
      });

      if (!response.ok) return null;

      const profile = (await response.json()) as LMSUserProfile;
      return profile;
    } catch (error) {
      console.error("[LMS] Get user profile error:", error);
      return null;
    }
  }

  /**
   * Update user progress in a course
   */
  async updateUserProgress(
    userId: string,
    courseId: string,
    progress: Partial<LMSProgress>
  ): Promise<boolean> {
    if (!this.enabled) return false;

    try {
      const response = await fetch(`${this.baseUrl}/progress/${userId}/${courseId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
          "X-Client-ID": this.clientId,
        },
        body: JSON.stringify({
          ...progress,
          lastAccessedAt: new Date().toISOString(),
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("[LMS] Update progress error:", error);
      return false;
    }
  }

  /**
   * Track application progress
   */
  async trackApplicationProgress(userId: string, applicationId: string, step: string): Promise<boolean> {
    return this.trackEvent({
      type: "wizard_step_completed",
      userId,
      timestamp: new Date().toISOString(),
      data: {
        applicationId,
        step,
        completedAt: new Date().toISOString(),
      },
    });
  }

  /**
   * Track document verification
   */
  async trackDocumentVerification(
    userId: string,
    applicationId: string,
    documentType: string,
    verified: boolean
  ): Promise<boolean> {
    return this.trackEvent({
      type: "document_verified",
      userId,
      timestamp: new Date().toISOString(),
      data: {
        applicationId,
        documentType,
        verified,
        verifiedAt: new Date().toISOString(),
      },
    });
  }

  /**
   * Track compliance acknowledgement
   */
  async trackComplianceAcknowledgement(userId: string, acknowledgementType: string): Promise<boolean> {
    return this.trackEvent({
      type: "compliance_acknowledged",
      userId,
      timestamp: new Date().toISOString(),
      data: {
        acknowledgementType,
        acknowledgedAt: new Date().toISOString(),
      },
    });
  }

  /**
   * Track offer acceptance
   */
  async trackOfferAcceptance(
    userId: string,
    applicationId: string,
    offeredAmount: number
  ): Promise<boolean> {
    return this.trackEvent({
      type: "offer_accepted",
      userId,
      timestamp: new Date().toISOString(),
      data: {
        applicationId,
        offeredAmount,
        acceptedAt: new Date().toISOString(),
      },
    });
  }

  /**
   * Track agreement signing
   */
  async trackAgreementSigning(
    userId: string,
    applicationId: string,
    agreementType: string
  ): Promise<boolean> {
    return this.trackEvent({
      type: "agreement_signed",
      userId,
      timestamp: new Date().toISOString(),
      data: {
        applicationId,
        agreementType,
        signedAt: new Date().toISOString(),
      },
    });
  }

  /**
   * Track payment
   */
  async trackPayment(
    userId: string,
    applicationId: string,
    amount: number,
    paymentMethod: string
  ): Promise<boolean> {
    return this.trackEvent({
      type: "payment_made",
      userId,
      timestamp: new Date().toISOString(),
      data: {
        applicationId,
        amount,
        paymentMethod,
        paidAt: new Date().toISOString(),
      },
    });
  }

  /**
   * Track support ticket creation
   */
  async trackSupportTicket(
    userId: string,
    ticketType: string,
    description: string
  ): Promise<boolean> {
    return this.trackEvent({
      type: "support_ticket_created",
      userId,
      timestamp: new Date().toISOString(),
      data: {
        ticketType,
        description,
        createdAt: new Date().toISOString(),
      },
    });
  }

  /**
   * Get learning recommendations based on user progress
   */
  async getLearningRecommendations(userId: string): Promise<string[]> {
    if (!this.enabled) return [];

    try {
      const response = await fetch(`${this.baseUrl}/recommendations/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "X-Client-ID": this.clientId,
        },
      });

      if (!response.ok) return [];

      const data = (await response.json()) as any;
      return data.recommendations || [];
    } catch (error) {
      console.error("[LMS] Get recommendations error:", error);
      return [];
    }
  }

  /**
   * Close LMS session
   */
  async closeSession(): Promise<boolean> {
    if (!this.enabled || !this.sessionId) return false;

    try {
      const response = await fetch(`${this.baseUrl}/session/close`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "X-Session-ID": this.sessionId,
          "X-Client-ID": this.clientId,
        },
        body: JSON.stringify({
          sessionId: this.sessionId,
          closedAt: new Date().toISOString(),
        }),
      });

      this.sessionId = null;
      return response.ok;
    } catch (error) {
      console.error("[LMS] Close session error:", error);
      return false;
    }
  }

  /**
   * Check if LMS is enabled
   */
  isEnabled(): boolean {
    return this.enabled;
  }
}

// Singleton instance
let lmsInstance: TotalityLMSIntegration | null = null;

export function getTotalityLMS(): TotalityLMSIntegration {
  if (!lmsInstance) {
    lmsInstance = new TotalityLMSIntegration();
  }
  return lmsInstance;
}

export default getTotalityLMS;
