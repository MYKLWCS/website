/**
 * Totality Applications API
 *
 * Handles application submission and status retrieval from Totality LMS.
 * STUB IMPLEMENTATION - Replace with actual Totality API integration.
 */

import { TOTALITY_CONFIG, isMockMode } from "./config";
import type { TotalityApplication, TotalityAPIResponse } from "./types";
import type { Application } from "@/lib/types";

/**
 * Submit application to Totality LMS
 */
export async function submitApplicationToTotality(
  application: Application,
  accessToken: string
): Promise<TotalityAPIResponse<TotalityApplication>> {
  if (isMockMode()) {
    console.log("[Totality Apps] Mock mode: submitting application...", application);
    // Return mock success response
    return {
      success: true,
      data: {
        id: `tot_app_${Date.now()}`,
        applicantId: application.userId,
        tenantId: "tenant_demo",
        requestedAmount: application.requestedAmount || 0,
        estimateRange: application.estimateRange || { low: 1000, high: 3000 },
        vehicleInfo: {
          year: 2020,
          make: "Unknown",
          model: "Unknown",
          mileage: 0,
          condition: "good"
        },
        status: "submitted",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      meta: {
        requestId: crypto.randomUUID(),
        timestamp: new Date().toISOString()
      }
    };
  }

  try {
    const response = await fetch(`${TOTALITY_CONFIG.apiBaseUrl}/applications`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "X-Tenant-ID": TOTALITY_CONFIG.tenantId
      },
      body: JSON.stringify({
        applicantId: application.userId,
        requestedAmount: application.requestedAmount,
        estimateRange: application.estimateRange,
        vehicleInfo: {
          vin: application.vehicleId, // TODO: Get actual vehicle details
          year: 2020,
          make: "Unknown",
          model: "Unknown",
          mileage: 0,
          condition: "good"
        },
        status: application.status,
        metadata: {
          internalApplicationId: application.id,
          source: "dollar-loans-website"
        }
      }),
      signal: AbortSignal.timeout(TOTALITY_CONFIG.timeouts.default)
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: {
          code: `HTTP_${response.status}`,
          message: data.message || "Failed to submit application",
          details: data
        }
      };
    }

    return {
      success: true,
      data,
      meta: {
        requestId: response.headers.get("X-Request-ID") || crypto.randomUUID(),
        timestamp: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error("[Totality Apps] Error submitting application:", error);
    return {
      success: false,
      error: {
        code: "NETWORK_ERROR",
        message: error instanceof Error ? error.message : "Unknown error",
        details: error
      }
    };
  }
}

/**
 * Get application status from Totality
 */
export async function getApplicationStatus(
  applicationId: string,
  accessToken: string
): Promise<TotalityAPIResponse<TotalityApplication>> {
  if (isMockMode()) {
    console.log("[Totality Apps] Mock mode: fetching application status...", applicationId);
    return {
      success: true,
      data: {
        id: applicationId,
        applicantId: "mock_user_123",
        tenantId: "tenant_demo",
        requestedAmount: 2500,
        estimateRange: { low: 2000, high: 3000 },
        vehicleInfo: {
          year: 2020,
          make: "Toyota",
          model: "Camry",
          mileage: 50000,
          condition: "good"
        },
        status: "in_review",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };
  }

  try {
    const response = await fetch(`${TOTALITY_CONFIG.apiBaseUrl}/applications/${applicationId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Tenant-ID": TOTALITY_CONFIG.tenantId
      },
      signal: AbortSignal.timeout(TOTALITY_CONFIG.timeouts.default)
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: {
          code: `HTTP_${response.status}`,
          message: data.message || "Failed to fetch application",
          details: data
        }
      };
    }

    return {
      success: true,
      data
    };
  } catch (error) {
    console.error("[Totality Apps] Error fetching application:", error);
    return {
      success: false,
      error: {
        code: "NETWORK_ERROR",
        message: error instanceof Error ? error.message : "Unknown error"
      }
    };
  }
}

/**
 * List all applications for a user
 */
export async function listUserApplications(
  userId: string,
  accessToken: string
): Promise<TotalityAPIResponse<TotalityApplication[]>> {
  if (isMockMode()) {
    console.log("[Totality Apps] Mock mode: listing applications...", userId);
    return {
      success: true,
      data: []
    };
  }

  try {
    const response = await fetch(
      `${TOTALITY_CONFIG.apiBaseUrl}/applications?applicantId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Tenant-ID": TOTALITY_CONFIG.tenantId
        },
        signal: AbortSignal.timeout(TOTALITY_CONFIG.timeouts.default)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: {
          code: `HTTP_${response.status}`,
          message: data.message || "Failed to list applications"
        }
      };
    }

    return {
      success: true,
      data: data.applications || []
    };
  } catch (error) {
    console.error("[Totality Apps] Error listing applications:", error);
    return {
      success: false,
      error: {
        code: "NETWORK_ERROR",
        message: error instanceof Error ? error.message : "Unknown error"
      }
    };
  }
}
