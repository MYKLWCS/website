export type WizardStepId =
  | "goal_amount"
  | "vehicle_quick"
  | "instant_estimate"
  | "vehicle_deep"
  | "vehicle_photos"
  | "identity"
  | "income"
  | "banking"
  | "cab_disclosures"
  | "offer"
  | "esign"
  | "funding";

export const WIZARD_STEPS: Array<{ id: WizardStepId; title: string; subtitle: string }> = [
  { id: "goal_amount", title: "Goal & Amount", subtitle: "Your target and urgency" },
  { id: "vehicle_quick", title: "Vehicle Quick Details", subtitle: "Basics for estimate" },
  { id: "instant_estimate", title: "Instant Estimate", subtitle: "Range + disclaimers" },
  { id: "vehicle_deep", title: "Vehicle Deep Profile", subtitle: "Eligibility details" },
  { id: "vehicle_photos", title: "Vehicle Photos", subtitle: "Guided upload" },
  { id: "identity", title: "Borrower Identity", subtitle: "Who you are" },
  { id: "income", title: "Income & Employment", subtitle: "Proof of income" },
  { id: "banking", title: "Banking", subtitle: "Payout method" },
  { id: "cab_disclosures", title: "CAB Disclosures", subtitle: "Acknowledge notices" },
  { id: "offer", title: "Offer", subtitle: "Review categories" },
  { id: "esign", title: "E-sign", subtitle: "Review + confirm" },
  { id: "funding", title: "Funding Tracker", subtitle: "Status timeline" }
];

