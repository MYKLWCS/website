import { MarketingPageShell } from "@/components/pages/MarketingPageShell";

export default function Page() {
  return (
    <MarketingPageShell
      title="Press"
      lead={<>Corporate legitimacy page with press kit placeholders.</>}
      primaryCta={{ label: "Contact", href: "/contact" }}
      secondaryCta={{ label: "Partners", href: "/partners" }}
      sections={[
        {
          eyebrow: "Press kit",
          title: "Brand assets (placeholder)",
          body: <>Add logos, screenshots, leadership bios, and boilerplate. Keep messaging CAB-safe and avoid “lender” claims.</>
        },
        {
          eyebrow: "Announcements",
          title: "News (placeholder)",
          body: <>Add press releases and updates as the company grows.</>
        }
      ]}
    />
  );
}

