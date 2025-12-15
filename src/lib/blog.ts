export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  body: Array<{ type: "p" | "h2" | "ul"; content: string | string[] }>;
};

export const posts: BlogPost[] = [
  {
    slug: "cab-model-in-plain-english",
    title: "The Texas CAB model — in plain English",
    excerpt: "A calm, straightforward breakdown of what a Credit Access Business is and why disclosures matter.",
    date: "2025-01-01",
    tags: ["CAB", "Education", "Transparency"],
    body: [
      { type: "p", content: "Dollar Loans is a Texas Credit Access Business (CAB). In CAB terms, the CAB facilitates access to credit and provides required disclosures in the process." },
      { type: "h2", content: "Who does what?" },
      { type: "p", content: "A third-party creditor may extend credit if approved. The CAB’s role is facilitation and disclosure — not presenting itself as a traditional lender in marketing." },
      { type: "h2", content: "Why this matters" },
      { type: "ul", content: ["It helps you understand roles clearly.", "It helps you understand categories of fees and charges.", "It supports a disclosure-first experience before signing any agreement."] },
      { type: "p", content: "This post is educational. For full disclosure language, always read the disclosures pages." }
    ]
  }
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}

