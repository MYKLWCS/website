/**
 * Totality Analytics (xAPI/SCORM Integration)
 *
 * Converts internal analytics events to xAPI statements for Totality LMS.
 * STUB IMPLEMENTATION - Update based on Totality's xAPI requirements.
 */

import { TOTALITY_CONFIG, isMockMode } from "./config";
import type { XAPIStatement } from "./types";

// Map internal event names to xAPI verbs
const verbMap: Record<string, { id: string; display: string }> = {
  visit_home: { id: "http://activitystrea.ms/schema/1.0/view", display: "viewed" },
  wizard_step_view: { id: "http://activitystrea.ms/schema/1.0/view", display: "viewed" },
  wizard_step_complete: { id: "http://adlnet.gov/expapi/verbs/completed", display: "completed" },
  application_created: { id: "http://activitystrea.ms/schema/1.0/create", display: "created" },
  offer_view: { id: "http://activitystrea.ms/schema/1.0/view", display: "viewed" },
  offer_accept: { id: "http://adlnet.gov/expapi/verbs/interacted", display: "accepted" },
  esign_start: { id: "http://adlnet.gov/expapi/verbs/attempted", display: "started" },
  esign_complete: { id: "http://adlnet.gov/expapi/verbs/completed", display: "completed" },
  upload_started: { id: "http://adlnet.gov/expapi/verbs/attempted", display: "started upload" },
  upload_completed: { id: "http://adlnet.gov/expapi/verbs/completed", display: "completed upload" }
};

/**
 * Track event to Totality Analytics
 */
export async function trackToTotality(
  event: {
    name: string;
    properties?: Record<string, unknown>;
  },
  userId: string,
  accessToken?: string
): Promise<boolean> {
  if (!TOTALITY_CONFIG.analyticsEnabled) {
    console.log("[Totality Analytics] Analytics disabled, skipping event:", event.name);
    return true;
  }

  if (isMockMode()) {
    console.log("[Totality Analytics] Mock mode: tracking event", event.name, event.properties);
    return true;
  }

  try {
    const statement = createXAPIStatement(event, userId);

    const response = await fetch(TOTALITY_CONFIG.analyticsEndpoint, {
      method: "POST",
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
        "Content-Type": "application/json",
        "X-Experience-API-Version": "1.0.3",
        "X-Tenant-ID": TOTALITY_CONFIG.tenantId
      },
      body: JSON.stringify(statement),
      signal: AbortSignal.timeout(TOTALITY_CONFIG.timeouts.default)
    });

    if (!response.ok) {
      console.error("[Totality Analytics] Failed to track event:", response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[Totality Analytics] Error tracking event:", error);
    return false;
  }
}

/**
 * Convert internal event to xAPI statement
 */
function createXAPIStatement(
  event: { name: string; properties?: Record<string, unknown> },
  userId: string
): XAPIStatement {
  const verb = verbMap[event.name] || {
    id: "http://adlnet.gov/expapi/verbs/interacted",
    display: "interacted"
  };

  return {
    actor: {
      objectType: "Agent",
      account: {
        homePage: TOTALITY_CONFIG.apiBaseUrl,
        name: userId
      }
    },
    verb: {
      id: verb.id,
      display: {
        "en-US": verb.display
      }
    },
    object: {
      id: `dollar-loans/${event.name}`,
      definition: {
        name: { "en-US": event.name },
        description: { "en-US": `User ${verb.display} ${event.name}` },
        type: "http://adlnet.gov/expapi/activities/interaction"
      }
    },
    context: {
      platform: "Dollar Loans Website",
      language: "en-US",
      extensions: event.properties
    },
    timestamp: new Date().toISOString()
  };
}

/**
 * Track wizard completion
 */
export async function trackWizardCompletion(
  userId: string,
  steps: string[],
  totalTime: number,
  accessToken?: string
): Promise<boolean> {
  const statement: XAPIStatement = {
    actor: {
      objectType: "Agent",
      account: {
        homePage: TOTALITY_CONFIG.apiBaseUrl,
        name: userId
      }
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/completed",
      display: { "en-US": "completed" }
    },
    object: {
      id: "dollar-loans/get-cash-wizard",
      definition: {
        name: { "en-US": "Get Cash Wizard" },
        description: { "en-US": "Complete 12-step application wizard" },
        type: "http://adlnet.gov/expapi/activities/module"
      }
    },
    result: {
      completion: true,
      success: true,
      duration: `PT${Math.floor(totalTime / 1000)}S`, // ISO 8601 duration
      score: {
        scaled: steps.length / 12,
        raw: steps.length,
        min: 0,
        max: 12
      }
    },
    context: {
      platform: "Dollar Loans Website",
      extensions: {
        steps,
        totalTime
      }
    },
    timestamp: new Date().toISOString()
  };

  return trackStatement(statement, accessToken);
}

/**
 * Send raw xAPI statement
 */
async function trackStatement(statement: XAPIStatement, accessToken?: string): Promise<boolean> {
  if (isMockMode()) {
    console.log("[Totality Analytics] Mock mode: tracking statement", statement);
    return true;
  }

  try {
    const response = await fetch(TOTALITY_CONFIG.analyticsEndpoint, {
      method: "POST",
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
        "Content-Type": "application/json",
        "X-Experience-API-Version": "1.0.3"
      },
      body: JSON.stringify(statement)
    });

    return response.ok;
  } catch (error) {
    console.error("[Totality Analytics] Error tracking statement:", error);
    return false;
  }
}
