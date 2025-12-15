import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="Vehicle value"
      lead={
        <>
          Understand the factors that affect vehicle equity access estimates. This page is educational only — estimates are ranges and not guaranteed.
        </>
      }
      primaryCta={{ label: "Use the calculator", href: "/calculator" }}
      secondaryCta={{ label: "Check your estimate", href: "/#prequal" }}
      sections={[
        {
          eyebrow: "Factors",
          title: "What impacts your estimate range",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Year, make, model, trim</li>
              <li>Mileage and condition</li>
              <li>Title status and verification</li>
              <li>Market demand and comparable values</li>
            </ul>
          ),
          infographic: { variant: "vehicleValueHeatmap", title: "Valuation factors heatmap", caption: "A placeholder heat-map visualization." }
        },
        {
          eyebrow: "Uploads",
          title: "Why photo quality matters",
          body: <>Guided upload overlays in the wizard help you capture clean, legible photos — reducing review time and back-and-forth.</>,
          infographic: { variant: "securityDataJourney", title: "Verification journey", caption: "What happens after you upload (placeholder)." }
        }
      ]}
    />
  );
}

