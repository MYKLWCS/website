/**
 * Totality LMS Integration Configuration
 *
 * This file contains all configuration for integrating with Totality LMS.
 * Update these values with actual Totality endpoints and credentials.
 */

export const TOTALITY_CONFIG = {
  // API Configuration
  apiBaseUrl: process.env.NEXT_PUBLIC_TOTALITY_API_URL || "https://api.totality.example.com/v1",

  // SSO Configuration
  ssoEndpoint: process.env.NEXT_PUBLIC_TOTALITY_SSO_URL || "https://sso.totality.example.com",
  ssoClientId: process.env.TOTALITY_SSO_CLIENT_ID || "",
  ssoClientSecret: process.env.TOTALITY_SSO_CLIENT_SECRET || "",
  ssoRedirectUri: process.env.NEXT_PUBLIC_TOTALITY_REDIRECT_URI || "http://localhost:3000/auth/callback",

  // Analytics Configuration (xAPI/SCORM)
  analyticsEndpoint: process.env.NEXT_PUBLIC_TOTALITY_ANALYTICS_URL || "https://analytics.totality.example.com/xapi",
  analyticsEnabled: process.env.NEXT_PUBLIC_TOTALITY_ANALYTICS_ENABLED === "true",

  // Tenant Configuration
  tenantId: process.env.TOTALITY_TENANT_ID || "",

  // Feature Flags
  features: {
    ssoEnabled: process.env.NEXT_PUBLIC_TOTALITY_SSO_ENABLED === "true",
    documentsEnabled: process.env.NEXT_PUBLIC_TOTALITY_DOCUMENTS_ENABLED === "true",
    applicationsEnabled: process.env.NEXT_PUBLIC_TOTALITY_APPLICATIONS_ENABLED === "true",
    webhooksEnabled: process.env.NEXT_PUBLIC_TOTALITY_WEBHOOKS_ENABLED === "true",
  },

  // API Timeout Configuration
  timeouts: {
    default: 30000, // 30 seconds
    upload: 120000, // 2 minutes for file uploads
    longRunning: 300000, // 5 minutes for long operations
  },

  // Retry Configuration
  retry: {
    maxAttempts: 3,
    backoff: [2000, 4000, 8000], // Exponential backoff in ms
  }
} as const;

// Helper to check if Totality integration is configured
export function isTotalityConfigured(): boolean {
  return !!(
    TOTALITY_CONFIG.apiBaseUrl &&
    TOTALITY_CONFIG.tenantId &&
    TOTALITY_CONFIG.ssoClientId
  );
}

// Helper to check if in mock mode (development)
export function isMockMode(): boolean {
  return !isTotalityConfigured() || process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true";
}
