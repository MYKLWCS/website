import type { MetadataRoute } from "next";

const marketingRoutes = [
  "",
  "/about",
  "/how-it-works",
  "/cab-model-explained",
  "/rates-fees",
  "/calculator",
  "/eligibility",
  "/vehicle-value",
  "/faq",
  "/reviews",
  "/security-trust",
  "/partners",
  "/partners/affiliate-program",
  "/developers",
  "/locations",
  "/careers",
  "/press",
  "/contact",
  "/help",
  "/blog",
  "/legal/cab-disclosures",
  "/legal/texas-disclosures",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
  "/legal/complaints"
] as const;

function getSiteUrl() {
  const env = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  return (env || "http://localhost:3000").replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return marketingRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}
