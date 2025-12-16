import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        { title: "How to Apply for a Title Loan", href: "/help/articles/how-to-apply" },
        { title: "Required Documents", href: "/help/articles/required-documents" },
        { title: "Eligibility Requirements", href: "/help/articles/eligibility" },
        { title: "Loan Approval Timeline", href: "/help/articles/approval-timeline" }
      ]
    },
    {
      title: "Loan Terms & Payments",
      icon: "💰",
      articles: [
        { title: "Understanding Interest Rates", href: "/help/articles/interest-rates" },
        { title: "Payment Options & Scheduling", href: "/help/articles/payment-options" },
        { title: "Setting Up Autopay", href: "/help/articles/autopay-setup" },
        { title: "Late Payment Policy", href: "/help/articles/late-payments" }
      ]
    },
    {
      title: "Your Vehicle",
      icon: "🚗",
      articles: [
        { title: "Vehicle Eligibility", href: "/help/articles/vehicle-eligibility" },
        { title: "Title Requirements", href: "/help/articles/title-requirements" },
        { title: "Using Your Car During Loan", href: "/help/articles/using-your-car" },
        { title: "Vehicle Valuation Process", href: "/help/articles/valuation" }
      ]
    },
    {
      title: "Account Management",
      icon: "⚙️",
      articles: [
        { title: "Accessing Your Dashboard", href: "/help/articles/dashboard-access" },
        { title: "Updating Contact Information", href: "/help/articles/update-info" },
        { title: "Document Upload Guide", href: "/help/articles/upload-documents" },
        { title: "Security & Privacy", href: "/help/articles/security" }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: "📋",
      articles: [
        { title: "Texas CAB Law Explained", href: "/help/articles/cab-law" },
        { title: "Your Rights as a Borrower", href: "/help/articles/borrower-rights" },
        { title: "Cancellation Policy", href: "/help/articles/cancellation" },
        { title: "Privacy Policy", href: "/help/articles/privacy" }
      ]
    },
    {
      title: "Troubleshooting",
      icon: "🔧",
      articles: [
        { title: "Login Issues", href: "/help/articles/login-issues" },
        { title: "Payment Problems", href: "/help/articles/payment-problems" },
        { title: "Document Upload Errors", href: "/help/articles/upload-errors" },
        { title: "Contact Support", href: "/help/articles/contact-support" }
      ]
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get my money?",
      answer: "Once approved and all documents are verified, funds can be available within 24 hours via direct deposit or same-day with in-person pickup."
    },
    {
      question: "Do I need good credit?",
      answer: "No! We consider your vehicle's value and your ability to repay, not your credit score. Bad credit or no credit is welcome."
    },
    {
      question: "Can I still drive my car?",
      answer: "Yes! You keep driving your car throughout the entire loan period. We only hold your title as collateral."
    },
    {
      question: "What if I can't make a payment?",
      answer: "Contact us immediately. We offer flexible payment arrangements and can work with you to avoid late fees or repossession."
    },
    {
      question: "How much can I borrow?",
      answer: "Loan amounts range from $1,000 to $10,000 based on your vehicle's value. Most customers qualify for 50-85% of their car's appraised value."
    },
    {
      question: "What documents do I need?",
      answer: "You'll need: (1) Valid government ID, (2) Clear vehicle title in your name, (3) Proof of income, (4) Proof of residence, (5) Vehicle photos."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-panel border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight">Help Center</h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Find answers to your questions about title loans, payments, and account management
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  className="h-14 pl-12 pr-4 text-lg"
                />
                <svg
                  className="absolute left-4 top-4 h-6 w-6 text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <Link href="/apply" className="group">
            <Card className="p-6 text-center hover:border-brand transition-all hover:shadow-lg">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="font-semibold group-hover:text-brand transition-colors">Apply Now</h3>
              <p className="text-xs text-muted mt-2">Start your application</p>
            </Card>
          </Link>
          <Link href="/dashboard" className="group">
            <Card className="p-6 text-center hover:border-brand transition-all hover:shadow-lg">
              <div className="text-4xl mb-3">👤</div>
              <h3 className="font-semibold group-hover:text-brand transition-colors">My Account</h3>
              <p className="text-xs text-muted mt-2">Access your dashboard</p>
            </Card>
          </Link>
          <Link href="/calculator" className="group">
            <Card className="p-6 text-center hover:border-brand transition-all hover:shadow-lg">
              <div className="text-4xl mb-3">🧮</div>
              <h3 className="font-semibold group-hover:text-brand transition-colors">Calculator</h3>
              <p className="text-xs text-muted mt-2">Estimate your loan</p>
            </Card>
          </Link>
          <Link href="/help/articles/contact-support" className="group">
            <Card className="p-6 text-center hover:border-brand transition-all hover:shadow-lg">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-semibold group-hover:text-brand transition-colors">Contact Us</h3>
              <p className="text-xs text-muted mt-2">Get in touch</p>
            </Card>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.title} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.articles.map((article) => (
                  <li key={article.href}>
                    <Link
                      href={article.href}
                      className="text-sm text-muted hover:text-brand transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="h-4 w-4 text-muted group-hover:text-brand transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-panel border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Card className="p-12 text-center bg-panel/45 border-brand/20">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Our support team is available 7 days a week to assist you with any questions or concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/help/articles/contact-support">
              <button className="px-8 py-4 bg-brand text-white rounded-xl font-semibold hover:bg-brand/90 transition-colors">
                Contact Support
              </button>
            </Link>
            <Link href="/partners">
              <button className="px-8 py-4 border-2 border-border bg-white rounded-xl font-semibold hover:border-brand transition-colors">
                Partner Portal
              </button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
