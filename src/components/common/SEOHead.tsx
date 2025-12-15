import { Metadata } from "next";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  canonicalUrl?: string;
  noindex?: boolean;
}

/**
 * Generate metadata for Next.js pages
 * Use this in page.tsx files with `export const metadata = generateMetadata(...)`
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonicalUrl,
  noindex = false
}: SEOProps): Metadata {
  const siteName = "Dollar Loans";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://dollarloans.com";
  const defaultKeywords = [
    "texas title loans",
    "CAB title access",
    "vehicle equity",
    "car title loans texas",
    "credit access business"
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...defaultKeywords].join(", "),
    authors: [{ name: "Dollar Loans" }],
    creator: "Dollar Loans",
    publisher: "Dollar Loans",
    robots: noindex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
          }
        },
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl.startsWith("http") ? canonicalUrl : `${baseUrl}${canonicalUrl}`
        }
      : undefined,
    openGraph: {
      type: ogType,
      locale: "en_US",
      url: canonicalUrl || baseUrl,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`]
    },
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default"
    }
  };
}

// Pre-configured metadata for common pages
export const homeMetadata = generateMetadata({
  title: "Premium Vehicle Title Loans in Texas",
  description:
    "Dollar Loans offers fast, transparent vehicle title loans in Texas. Licensed CAB with competitive rates. Get cash in hours with no prepayment penalties.",
  keywords: [
    "best title loans texas",
    "fast title loans",
    "vehicle equity access",
    "online title loans"
  ],
  canonicalUrl: "/"
});

export const calculatorMetadata = generateMetadata({
  title: "Title Loan Calculator",
  description:
    "Calculate your potential title loan amount. See estimated payments, rates, and total costs before applying. Free, instant estimates.",
  keywords: ["title loan calculator", "loan calculator", "payment estimator"],
  canonicalUrl: "/calculator"
});

export const ratesFeesMetadata = generateMetadata({
  title: "Rates & Fees",
  description:
    "Transparent pricing for title loans. View our fee structure, APR ranges, and total cost examples. No hidden fees.",
  keywords: ["title loan rates", "title loan fees", "APR", "pricing"],
  canonicalUrl: "/rates-fees"
});

export const faqMetadata = generateMetadata({
  title: "Frequently Asked Questions",
  description:
    "Get answers about Texas title loans, CAB licensing, eligibility requirements, and the application process.",
  keywords: ["title loan FAQ", "common questions", "help"],
  canonicalUrl: "/faq"
});
