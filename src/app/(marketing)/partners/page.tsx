"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "api" | "pricing">("overview");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-panel border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <Badge variant="default" className="mb-4">Partner Program</Badge>
            <h1 className="text-5xl font-bold tracking-tight">Send Leads. Earn Revenue.</h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Connect your customers to Dollar Loans through our comprehensive API. Earn competitive payouts in USD or USDT (crypto) for qualified leads.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Link href="#pricing">
                <Button>View Pricing</Button>
              </Link>
              <Link href="#api-docs">
                <Button variant="secondary">API Documentation</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-brand">$25</p>
            <p className="text-sm text-muted mt-2">Per Qualified Lead</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-brand">24hr</p>
            <p className="text-sm text-muted mt-2">Payment Processing</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-ok">99.9%</p>
            <p className="text-sm text-muted mt-2">API Uptime</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-brand">USD/USDT</p>
            <p className="text-sm text-muted mt-2">Payment Options</p>
          </Card>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="border-b border-border">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-brand text-brand"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("api")}
              className={`pb-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "api"
                  ? "border-brand text-brand"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              API Documentation
            </button>
            <button
              onClick={() => setActiveTab("pricing")}
              className={`pb-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "pricing"
                  ? "border-brand text-brand"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              Pricing & Payouts
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {activeTab === "overview" && (
          <div className="space-y-12">
            {/* How It Works */}
            <div>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-6">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <h3 className="text-lg font-semibold mb-2">Integrate API</h3>
                  <p className="text-sm text-muted">
                    Use our RESTful API to submit qualified leads. Simple authentication with API keys.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <h3 className="text-lg font-semibold mb-2">We Qualify</h3>
                  <p className="text-sm text-muted">
                    Our team reviews and qualifies each lead within 24 hours based on eligibility criteria.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <h3 className="text-lg font-semibold mb-2">Get Paid</h3>
                  <p className="text-sm text-muted">
                    Receive payment via USD (ACH) or USDT (Tether) crypto within 24 hours of qualification.
                  </p>
                </Card>
              </div>
            </div>

            {/* Lead Requirements */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Lead Qualification Requirements</h2>
              <Card className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-3">Required Information</h4>
                    <ul className="space-y-2 text-sm text-muted">
                      <li>✓ Full name and contact information</li>
                      <li>✓ Valid email address and phone number</li>
                      <li>✓ Vehicle details (year, make, model, mileage)</li>
                      <li>✓ Estimated vehicle value</li>
                      <li>✓ Requested loan amount ($1,000 - $10,000)</li>
                      <li>✓ Texas residency confirmation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Disqualifying Factors</h4>
                    <ul className="space-y-2 text-sm text-muted">
                      <li>✗ Vehicle older than 15 years</li>
                      <li>✗ Salvage or rebuilt title</li>
                      <li>✗ Commercial vehicles over 1 ton</li>
                      <li>✗ Motorcycles or recreational vehicles</li>
                      <li>✗ Outstanding liens on vehicle</li>
                      <li>✗ Non-Texas residents</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Compliance */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Compliance & Guidelines</h2>
              <Card className="p-6 bg-brand/5 border-brand/30">
                <h3 className="font-semibold mb-4 text-brand">Partner Requirements</h3>
                <div className="space-y-2 text-sm text-muted">
                  <p>• <strong>No Guaranteed Approval Claims:</strong> Never promise guaranteed loan approval</p>
                  <p>• <strong>Accurate Rate Disclosure:</strong> All rate information must include APR ranges and CAB disclosures</p>
                  <p>• <strong>CAB-Compliant Terminology:</strong> Use approved language that reflects our CAB business model</p>
                  <p>• <strong>Data Privacy:</strong> Full GDPR and CCPA compliance required for customer data handling</p>
                  <p>• <strong>Quality Standards:</strong> Maintain minimum 60% lead qualification rate</p>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "api" && (
          <div className="space-y-8" id="api-docs">
            <div>
              <h2 className="text-3xl font-bold mb-4">API Documentation</h2>
              <p className="text-muted mb-8">
                RESTful API for submitting leads and tracking status. Base URL: <code className="bg-panel px-2 py-1 rounded text-sm">https://api.dollarloans.com/v1</code>
              </p>
            </div>

            {/* Authentication */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Authentication</h3>
              <p className="text-sm text-muted mb-4">
                All API requests require an API key passed in the Authorization header.
              </p>
              <div className="bg-fg/5 p-4 rounded-lg border border-border font-mono text-sm">
                <pre className="overflow-x-auto">
{`curl -X POST https://api.dollarloans.com/v1/leads \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
            </Card>

            {/* Submit Lead Endpoint */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="ok">POST</Badge>
                <h3 className="text-xl font-semibold">/leads</h3>
              </div>
              <p className="text-sm text-muted mb-4">Submit a new lead for qualification.</p>

              <h4 className="font-semibold mb-3">Request Body</h4>
              <div className="bg-fg/5 p-4 rounded-lg border border-border font-mono text-xs mb-6">
                <pre className="overflow-x-auto">
{`{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "state": "TX",
  "zipCode": "78701",
  "vehicle": {
    "year": 2019,
    "make": "Honda",
    "model": "Civic",
    "mileage": 45000,
    "estimatedValue": 12500
  },
  "requestedAmount": 2500,
  "source": "partner_website",
  "referenceId": "YOUR_INTERNAL_ID"
}`}
                </pre>
              </div>

              <h4 className="font-semibold mb-3">Response (201 Created)</h4>
              <div className="bg-fg/5 p-4 rounded-lg border border-border font-mono text-xs">
                <pre className="overflow-x-auto">
{`{
  "leadId": "lead_abc123xyz",
  "status": "pending_review",
  "createdAt": "2024-01-15T10:30:00Z",
  "estimatedReviewTime": "24 hours"
}`}
                </pre>
              </div>
            </Card>

            {/* Get Lead Status */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default">GET</Badge>
                <h3 className="text-xl font-semibold">/leads/:leadId</h3>
              </div>
              <p className="text-sm text-muted mb-4">Retrieve the status and qualification details of a lead.</p>

              <h4 className="font-semibold mb-3">Response (200 OK)</h4>
              <div className="bg-fg/5 p-4 rounded-lg border border-border font-mono text-xs">
                <pre className="overflow-x-auto">
{`{
  "leadId": "lead_abc123xyz",
  "status": "qualified",
  "qualifiedAt": "2024-01-16T14:20:00Z",
  "payout": {
    "amount": 25.00,
    "currency": "USD",
    "status": "processing",
    "estimatedPayment": "2024-01-17T14:20:00Z"
  },
  "applicant": {
    "applicationStarted": true,
    "applicationId": "APP-001234"
  }
}`}
                </pre>
              </div>
            </Card>

            {/* Status Codes */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Lead Status Values</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="warn">pending_review</Badge>
                  <span className="text-sm text-muted">Lead submitted, awaiting review</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="ok">qualified</Badge>
                  <span className="text-sm text-muted">Lead approved, payout processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="error">disqualified</Badge>
                  <span className="text-sm text-muted">Lead did not meet qualification criteria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default">duplicate</Badge>
                  <span className="text-sm text-muted">Lead already exists in system</span>
                </div>
              </div>
            </Card>

            {/* Webhooks */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Webhooks</h3>
              <p className="text-sm text-muted mb-4">
                Receive real-time notifications when lead status changes. Configure webhook URL in your partner dashboard.
              </p>
              <div className="bg-fg/5 p-4 rounded-lg border border-border font-mono text-xs">
                <pre className="overflow-x-auto">
{`{
  "event": "lead.qualified",
  "leadId": "lead_abc123xyz",
  "timestamp": "2024-01-16T14:20:00Z",
  "data": {
    "status": "qualified",
    "payout": {
      "amount": 25.00,
      "currency": "USD"
    }
  }
}`}
                </pre>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "pricing" && (
          <div className="space-y-8" id="pricing">
            <div>
              <h2 className="text-3xl font-bold mb-4">Pricing & Payouts</h2>
              <p className="text-muted">Competitive payouts with volume bonuses. Choose USD or crypto payments.</p>
            </div>

            {/* Pricing Tiers */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-sm text-muted mb-4">0-50 qualified leads/month</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand">$25</span>
                  <span className="text-muted">/lead</span>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li>✓ 24hr payment processing</li>
                  <li>✓ USD or USDT payments</li>
                  <li>✓ API access</li>
                  <li>✓ Webhook notifications</li>
                  <li>✓ Email support</li>
                </ul>
              </Card>

              <Card className="p-6 border-brand bg-brand/5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Growth</h3>
                  <Badge variant="default">Popular</Badge>
                </div>
                <p className="text-sm text-muted mb-4">51-200 qualified leads/month</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand">$30</span>
                  <span className="text-muted">/lead</span>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li>✓ All Starter features</li>
                  <li>✓ <strong>+$5 bonus per lead</strong></li>
                  <li>✓ Priority support</li>
                  <li>✓ Custom reporting</li>
                  <li>✓ Dedicated account manager</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-sm text-muted mb-4">200+ qualified leads/month</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand">$35</span>
                  <span className="text-muted">/lead</span>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  <li>✓ All Growth features</li>
                  <li>✓ <strong>+$10 bonus per lead</strong></li>
                  <li>✓ Custom integration</li>
                  <li>✓ SLA guarantees</li>
                  <li>✓ White-label options</li>
                </ul>
              </Card>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Payment Options</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">💵</div>
                    <h4 className="text-lg font-semibold">USD Payments (ACH)</h4>
                  </div>
                  <p className="text-sm text-muted mb-4">
                    Standard bank transfer to your business account. Processed within 24 hours of lead qualification.
                  </p>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>✓ Free bank transfers</li>
                    <li>✓ Weekly or monthly batching</li>
                    <li>✓ Automatic reconciliation</li>
                    <li>✓ Tax reporting (1099)</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-panel/45 border-brand/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">₮</div>
                    <h4 className="text-lg font-semibold">USDT Crypto Payments</h4>
                  </div>
                  <p className="text-sm text-muted mb-4">
                    Receive payouts in USDT (Tether) stablecoin on Ethereum, Tron, or Polygon networks.
                  </p>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>✓ Instant settlements (15min)</li>
                    <li>✓ No bank required</li>
                    <li>✓ Lower transaction fees</li>
                    <li>✓ Global accessibility</li>
                    <li>✓ Supports ERC-20, TRC-20, Polygon</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Payout Schedule */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Payout Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-brand text-white rounded-lg px-3 py-1 text-sm font-semibold">Day 0</div>
                  <div>
                    <p className="font-semibold">Lead Submitted</p>
                    <p className="text-sm text-muted">Partner submits lead via API</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand text-white rounded-lg px-3 py-1 text-sm font-semibold">Day 1</div>
                  <div>
                    <p className="font-semibold">Qualification Review</p>
                    <p className="text-sm text-muted">Our team reviews lead against criteria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-ok text-white rounded-lg px-3 py-1 text-sm font-semibold">Day 2</div>
                  <div>
                    <p className="font-semibold">Payment Processed</p>
                    <p className="text-sm text-muted">USD: ACH initiated | USDT: Crypto sent</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-panel border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Sending Leads?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Join our partner program and start earning competitive payouts for qualified title loan leads.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button>Apply to Partner</Button>
            </Link>
            <Link href="/partners/affiliate-program">
              <Button variant="secondary">View Affiliate Program</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <Card className="p-6 bg-panel/45 border-brand/30">
          <p className="text-xs text-muted leading-relaxed">
            <strong className="text-brand">Partner Program Terms:</strong> All partners must comply with Texas CAB regulations and Dollar Loans compliance guidelines. Payouts are contingent upon lead qualification meeting minimum eligibility criteria. Volume bonuses calculated monthly based on qualified leads only. USDT payments subject to network confirmation times and gas fees (paid by recipient). Partners are responsible for tax reporting and compliance in their jurisdiction. Dollar Loans reserves the right to modify payout terms with 30 days notice.
          </p>
        </Card>
      </div>
    </div>
  );
}
