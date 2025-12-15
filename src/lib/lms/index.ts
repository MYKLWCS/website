/**
 * Totality LMS Integration - Public API
 * Central export point for all LMS functionality
 */

export {
  getTotalityLMS,
  type LMSEventType,
  type LMSUserProfile,
  type LMSEvent,
  type LMSProgress,
} from "@/lib/lms/totality";

export {
  useLMS,
  useLMSWizardTracking,
  useLMSDocumentTracking,
  useLMSComplianceTracking,
} from "@/lib/lms/useLMS";

export { LMSEventLogger } from "@/lib/lms/logger";
