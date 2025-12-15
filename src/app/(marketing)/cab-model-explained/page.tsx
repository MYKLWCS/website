import Link from "next/link";
import { MarketingPageShell } from "@/components/pages/MarketingPageShell";
import { Accordion } from "@/components/ui/Accordion";

export default function Page() {
  return (
    <MarketingPageShell
      title="CAB model explained"
      lead={
        <>
          A calm, educational explanation of the Texas Credit Access Business (CAB) model — designed to increase clarity
          and trust, not confusion.
        </>
      }
      primaryCta={{ label: "Check your estimate", href: "/#prequal" }}
      secondaryCta={{ label: "CAB disclosures", href: "/legal/cab-disclosures" }}
      sections={[
        {
          eyebrow: "What it is",
          title: "What a Credit Access Business is",
          body: (
            <>
              Dollar Loans is a Texas Credit Access Business (CAB). We facilitate access to credit and provide required
              disclosures. If approved, a third-party creditor may extend credit.
            </>
          ),
          infographic: { variant: "cabWhoDoesWhat", title: "Who does what", caption: "CAB facilitation vs. creditor extension (placeholder)." }
        },
        {
          eyebrow: "Costs",
          title: "Transparent fee categories (plain language)",
          body: (
            <>
              You’ll see costs by category (example): CAB access fees, creditor charges, and third-party costs if
              applicable. We pair estimates with non-guarantee language and show disclosures before signing.
            </>
          ),
          infographic: { variant: "feeComposition", title: "Cost taxonomy chart", caption: "Example-only categories and composition." }
        },
        {
          eyebrow: "Why it exists",
          title: "Why this model exists (and how it protects processes)",
          body: (
            <>
              The CAB model is designed to clarify roles and ensure disclosures are provided in the process. Our UX makes
              the “who does what” and “what you pay” story explicit, so you can make informed decisions before signing.
            </>
          ),
          infographic: { variant: "howItWorksFlow", title: "Disclosure-forward flow", caption: "Disclosures appear before signing any agreement." }
        },
        {
          eyebrow: "Your rights",
          title: "Consumer rights + complaint pathway",
          body: (
            <>
              If you have concerns, you can contact support, request clarification on disclosures, or use the complaints
              pathway described in our legal pages.{" "}
              <Link className="underline underline-offset-4 hover:text-fg" href="/legal/complaints">
                View complaints information
              </Link>
              .
            </>
          ),
          infographic: { variant: "securityDataJourney", title: "Support + escalation", caption: "A clear path for questions and issues (placeholder)." }
        },
        {
          eyebrow: "Total cost",
          title: "Learn your total cost (mini FAQ)",
          body: (
            <Accordion
              items={[
                {
                  q: "Why do you show categories instead of a single number?",
                  a: "Because categories help you understand what you’re paying for. Final totals and schedules are shown in disclosures and agreement documents before signing."
                },
                {
                  q: "Are examples and estimates commitments?",
                  a: "No. They are ranges and examples only and do not guarantee approval or final terms."
                },
                {
                  q: "When do I see the disclosures?",
                  a: "Before signing any agreement. The wizard includes a CAB disclosures acknowledgement step."
                }
              ]}
            />
          )
        }
      ]}
    />
  );
}
