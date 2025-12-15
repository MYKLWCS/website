export type AnalyticsEvent =
  | "visit_home"
  | "prequal_start"
  | "prequal_complete"
  | "signup_start"
  | "signup_complete"
  | "login_success"
  | "wizard_step_view"
  | "wizard_step_complete"
  | "upload_started"
  | "upload_completed"
  | "cab_disclosure_view"
  | "cab_disclosure_accept"
  | "offer_view"
  | "offer_accept"
  | "esign_start"
  | "esign_complete"
  | "funding_status_view"
  | "payment_initiated"
  | "payment_success"
  | "support_contact"
  | "application_created"
  | "application_create_error"
  | "application_estimate_updated"
  | "application_estimate_error"
  | "application_submitted"
  | "application_submit_error"
  | "bank_link_connected";

export async function track(event: AnalyticsEvent, props?: Record<string, unknown>) {
  try {
    await fetch("/api/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ event, props })
    });
  } catch {
    // Best-effort stub
  }
}
