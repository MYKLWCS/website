/**
 * Totality LMS Integration Module
 *
 * This module provides all integration points with Totality LMS.
 * Import from this module to use Totality functionality.
 */

// Configuration
export { TOTALITY_CONFIG, isTotalityConfigured, isMockMode } from "./config";

// Types
export type {
  TotalityUser,
  TotalitySession,
  TotalityApplication,
  TotalityDocument,
  XAPIStatement,
  TotalityAPIResponse,
  TotalityWebhookPayload
} from "./types";

// Authentication
export {
  validateSSOToken,
  exchangeCodeForToken,
  refreshAccessToken,
  getSSOLoginUrl,
  logout
} from "./auth";

// Applications
export {
  submitApplicationToTotality,
  getApplicationStatus,
  listUserApplications
} from "./applications";

// Analytics
export { trackToTotality, trackWizardCompletion } from "./analytics";
