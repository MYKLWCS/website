import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="Locations"
      lead={<>Online-first in Texas with location/authority placeholders for SEO and trust. Update with real addresses if applicable.</>}
      primaryCta={{ label: "Check your estimate", href: "/#prequal" }}
      secondaryCta={{ label: "Contact", href: "/contact" }}
      sections={[
        {
          eyebrow: "Texas",
          title: "State-first compliance posture",
          body: <>This site is scoped for Texas CAB operations. Future jurisdictions should have jurisdiction-specific disclosures and UX rules.</>,
          infographic: { variant: "cabWhoDoesWhat", title: "Texas CAB model", caption: "Role clarity in Texas-only scope." }
        },
        {
          eyebrow: "Authority",
          title: "Location pages as trust assets",
          body: <>Even online-first brands benefit from clear “where we operate” clarity. Add real contact details before launch.</>
        }
      ]}
    />
  );
}

