/**
 * React hook for Totality LMS integration
 * Provides easy access to LMS tracking and progress management
 */

"use client";

import { useEffect, useCallback, useRef } from "react";
import { getTotalityLMS, type LMSProgress } from "@/lib/lms/totality";

interface UseLMSOptions {
  userId?: string;
  autoInitialize?: boolean;
}

export function useLMS(options: UseLMSOptions = {}) {
  const { autoInitialize = true } = options;
  const lmsRef = useRef(getTotalityLMS());
  const initializedRef = useRef(false);

  // Initialize LMS session on mount
  useEffect(() => {
    if (!autoInitialize || initializedRef.current) return;

    const initializeLMS = async () => {
      if (options.userId) {
        const initialized = await lmsRef.current.initialize(options.userId);
        if (initialized) {
          initializedRef.current = true;
        }
      }
    };

    initializeLMS();

    // Cleanup: close session on unmount
    return () => {
      if (initializedRef.current) {
        lmsRef.current.closeSession().catch(console.error);
      }
    };
  }, [autoInitialize, options.userId]);

  const trackApplicationStep = useCallback(
    async (applicationId: string, step: string) => {
      if (options.userId) {
        return lmsRef.current.trackApplicationProgress(options.userId, applicationId, step);
      }
      return false;
    },
    [options.userId]
  );

  const trackDocumentVerification = useCallback(
    async (applicationId: string, documentType: string, verified: boolean) => {
      if (options.userId) {
        return lmsRef.current.trackDocumentVerification(
          options.userId,
          applicationId,
          documentType,
          verified
        );
      }
      return false;
    },
    [options.userId]
  );

  const trackComplianceAcknowledgement = useCallback(
    async (acknowledgementType: string) => {
      if (options.userId) {
        return lmsRef.current.trackComplianceAcknowledgement(options.userId, acknowledgementType);
      }
      return false;
    },
    [options.userId]
  );

  const trackOfferAcceptance = useCallback(
    async (applicationId: string, offeredAmount: number) => {
      if (options.userId) {
        return lmsRef.current.trackOfferAcceptance(options.userId, applicationId, offeredAmount);
      }
      return false;
    },
    [options.userId]
  );

  const trackAgreementSigning = useCallback(
    async (applicationId: string, agreementType: string) => {
      if (options.userId) {
        return lmsRef.current.trackAgreementSigning(options.userId, applicationId, agreementType);
      }
      return false;
    },
    [options.userId]
  );

  const trackPayment = useCallback(
    async (applicationId: string, amount: number, paymentMethod: string) => {
      if (options.userId) {
        return lmsRef.current.trackPayment(options.userId, applicationId, amount, paymentMethod);
      }
      return false;
    },
    [options.userId]
  );

  const trackSupportTicket = useCallback(
    async (ticketType: string, description: string) => {
      if (options.userId) {
        return lmsRef.current.trackSupportTicket(options.userId, ticketType, description);
      }
      return false;
    },
    [options.userId]
  );

  const updateProgress = useCallback(
    async (courseId: string, progress: Partial<LMSProgress>) => {
      if (options.userId) {
        return lmsRef.current.updateUserProgress(options.userId, courseId, progress);
      }
      return false;
    },
    [options.userId]
  );

  const getLearningRecommendations = useCallback(async () => {
    if (options.userId) {
      return lmsRef.current.getLearningRecommendations(options.userId);
    }
    return [];
  }, [options.userId]);

  const isEnabled = useCallback(() => {
    return lmsRef.current.isEnabled();
  }, []);

  return {
    trackApplicationStep,
    trackDocumentVerification,
    trackComplianceAcknowledgement,
    trackOfferAcceptance,
    trackAgreementSigning,
    trackPayment,
    trackSupportTicket,
    updateProgress,
    getLearningRecommendations,
    isEnabled,
  };
}

/**
 * Hook for tracking wizard progress through LMS
 */
export function useLMSWizardTracking(userId: string, applicationId: string) {
  const lms = useLMS({ userId });

  const trackStep = useCallback(
    async (step: string) => {
      return lms.trackApplicationStep(applicationId, step);
    },
    [applicationId, lms]
  );

  return { trackStep };
}

/**
 * Hook for tracking document uploads through LMS
 */
export function useLMSDocumentTracking(userId: string, applicationId: string) {
  const lms = useLMS({ userId });

  const trackDocumentUpload = useCallback(
    async (documentType: string, verified: boolean = true) => {
      return lms.trackDocumentVerification(applicationId, documentType, verified);
    },
    [applicationId, lms]
  );

  return { trackDocumentUpload };
}

/**
 * Hook for tracking compliance acknowledgements through LMS
 */
export function useLMSComplianceTracking(userId: string) {
  const lms = useLMS({ userId });

  const trackCABAcknowledgement = useCallback(async () => {
    return lms.trackComplianceAcknowledgement("cab_disclosure");
  }, [lms]);

  const trackDisclosureAcknowledgement = useCallback(
    async (type: string) => {
      return lms.trackComplianceAcknowledgement(`disclosure_${type}`);
    },
    [lms]
  );

  return {
    trackCABAcknowledgement,
    trackDisclosureAcknowledgement,
  };
}
