import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";
import { Button, ButtonLink } from "@/components/ui/Button";
import { FAQSearch } from "@/components/dashboard/FAQSearch";
import { SupportForm } from "@/components/dashboard/SupportForm";
import Link from "next/link";

export default function Page() {
  const contactMethods = [
    {
      name: "Email Support",
      description: "24-hour response time",
      contact: "support@dollarloans.com",
      hours: "Monday - Friday, 9 AM - 6 PM EST"
    },
    {
      name: "Phone Support",
      description: "Speak with a specialist",
      contact: "(844) LOANS-4U",
      hours: "Monday - Friday, 8 AM - 8 PM EST"
    },
    {
      name: "In-App Chat",
      description: "Quick questions answered",
      contact: "Available 24/7",
      hours: "Chat support in your dashboard"
    },
    {
      name: "Mailing Address",
      description: "Send documents or checks",
      contact: "Dollar Loans Inc.\n123 Lending Street\nAustin, TX 78701",
      hours: ""
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Help</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Support Center</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Find answers to common questions or contact our support team.
        </p>
      </div>

      <Notice tone="info" title="We're Here to Help">
        Our support team is available 24/7 to answer your questions about your account, payments, and documents.
      </Notice>

      {/* FAQ Search */}
      <FAQSearch />

      {/* Contact Methods */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight">Get in Touch</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {contactMethods.map((method) => (
            <Card key={method.name} className="p-6">
              <h3 className="font-semibold tracking-tight">{method.name}</h3>
              <p className="mt-1 text-sm text-muted">{method.description}</p>

              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-sm font-medium text-fg whitespace-pre-wrap break-words">
                    {method.contact}
                  </p>
                  {method.hours && (
                    <p className="mt-1 text-xs text-muted">{method.hours}</p>
                  )}
                </div>

                {method.name === "Email Support" && (
                  <a
                    href="mailto:support@dollarloans.com"
                    className="inline-block mt-3 px-4 py-2 text-sm font-medium rounded-lg bg-brand/10 text-brand hover:bg-brand/20 transition-colors"
                  >
                    Send Email
                  </a>
                )}
                {method.name === "Phone Support" && (
                  <a
                    href="tel:+18445626748"
                    className="inline-block mt-3 px-4 py-2 text-sm font-medium rounded-lg bg-brand/10 text-brand hover:bg-brand/20 transition-colors"
                  >
                    Call Now
                  </a>
                )}
                {method.name === "In-App Chat" && (
                  <button className="mt-3 px-4 py-2 text-sm font-medium rounded-lg bg-brand/10 text-brand hover:bg-brand/20 transition-colors">
                    Open Chat
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Support Ticket Form */}
      <SupportForm />

      {/* Helpful Links */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight">Knowledge Base</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Link
            href="/legal/cab-disclosures"
            className="p-4 rounded-lg border border-border/40 hover:border-brand/40 hover:bg-bg/40 transition-colors"
          >
            <p className="font-medium text-sm">CAB Disclosures</p>
            <p className="mt-1 text-xs text-muted">Learn about Certificate of Automobile Breakdown</p>
          </Link>

          <Link
            href="/legal/terms"
            className="p-4 rounded-lg border border-border/40 hover:border-brand/40 hover:bg-bg/40 transition-colors"
          >
            <p className="font-medium text-sm">Terms of Service</p>
            <p className="mt-1 text-xs text-muted">Review our service agreement and policies</p>
          </Link>

          <Link
            href="/legal/privacy"
            className="p-4 rounded-lg border border-border/40 hover:border-brand/40 hover:bg-bg/40 transition-colors"
          >
            <p className="font-medium text-sm">Privacy Policy</p>
            <p className="mt-1 text-xs text-muted">How we protect your personal information</p>
          </Link>

          <Link
            href="/faq"
            className="p-4 rounded-lg border border-border/40 hover:border-brand/40 hover:bg-bg/40 transition-colors"
          >
            <p className="font-medium text-sm">Frequently Asked Questions</p>
            <p className="mt-1 text-xs text-muted">Common questions and answers</p>
          </Link>
        </div>
      </div>

      {/* Status Page */}
      <Card className="p-6">
        <h2 className="text-sm font-semibold tracking-tight">System Status</h2>
        <p className="mt-1 text-sm text-muted">All systems operational</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Website & Dashboard</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-green-600">Operational</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Payment Processing</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-green-600">Operational</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Document Uploads</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-green-600">Operational</span>
            </span>
          </div>
        </div>
        <a href="#" className="mt-3 inline-block text-xs text-brand hover:underline">
          View detailed status →
        </a>
      </Card>
    </div>
  );
}
