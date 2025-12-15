"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Notice } from "@/components/ui/Notice";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("rates");

  const underwritingRules = [
    {
      id: "RULE-001",
      name: "Minimum Vehicle Value",
      value: "$3,000",
      description: "Minimum acceptable vehicle valuation",
      status: "active",
      lastModified: "Dec 10, 2025"
    },
    {
      id: "RULE-002",
      name: "Maximum Vehicle Age",
      value: "15 years",
      description: "Maximum age of vehicle from current model year",
      status: "active",
      lastModified: "Dec 10, 2025"
    },
    {
      id: "RULE-003",
      name: "Maximum Loan-to-Value",
      value: "85%",
      description: "Highest LTV ratio allowed for loans",
      status: "active",
      lastModified: "Dec 8, 2025"
    },
    {
      id: "RULE-004",
      name: "Minimum Credit Score",
      value: "550",
      description: "Minimum acceptable credit score for approval",
      status: "active",
      lastModified: "Dec 5, 2025"
    }
  ];

  const rateRules = [
    {
      id: "RATE-001",
      condition: "Credit Score 600+",
      minRate: "16.5%",
      maxRate: "18.9%",
      applicableLoans: "65%",
      status: "active"
    },
    {
      id: "RATE-002",
      condition: "Credit Score 550-599",
      minRate: "18.0%",
      maxRate: "19.9%",
      applicableLoans: "25%",
      status: "active"
    },
    {
      id: "RATE-003",
      condition: "LTV 80%+",
      minRate: "19.0%",
      maxRate: "21.9%",
      applicableLoans: "10%",
      status: "active"
    }
  ];

  const cabRules = [
    {
      id: "CAB-001",
      requirement: "CAB Notice - Finance Charge",
      description: "Required for all agreements",
      compliance: "100%",
      status: "active"
    },
    {
      id: "CAB-002",
      requirement: "CAB Notice - Total Amount Due",
      description: "Must include principal, fees, and interest",
      compliance: "100%",
      status: "active"
    },
    {
      id: "CAB-003",
      requirement: "Right to Cancel - 3 Day Period",
      description: "Customer must be informed of cancellation rights",
      compliance: "100%",
      status: "active"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Underwriting Rules</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Configure automated underwriting rules, interest rate policies, and CAB compliance requirements.
        </p>
      </div>

      <Notice tone="info" title="Rule Management">
        Changes to underwriting rules apply immediately to new applications. Historical approvals are not affected. All rule changes are logged for audit purposes.
      </Notice>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border/40">
        <button
          onClick={() => setActiveTab("underwriting")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "underwriting"
              ? "border-brand text-brand"
              : "border-transparent text-muted hover:text-fg"
          }`}
        >
          Underwriting Rules
        </button>
        <button
          onClick={() => setActiveTab("rates")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "rates"
              ? "border-brand text-brand"
              : "border-transparent text-muted hover:text-fg"
          }`}
        >
          Interest Rates
        </button>
        <button
          onClick={() => setActiveTab("cab")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "cab"
              ? "border-brand text-brand"
              : "border-transparent text-muted hover:text-fg"
          }`}
        >
          CAB Compliance
        </button>
      </div>

      {/* Underwriting Rules Tab */}
      {activeTab === "underwriting" && (
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-sm font-semibold tracking-tight">Eligibility Requirements</h2>
            <p className="mt-1 text-sm text-muted">Core underwriting rules for application approval</p>

            <div className="mt-4 space-y-3">
              {underwritingRules.map((rule) => (
                <div key={rule.id} className="flex items-start justify-between p-4 border border-border/40 rounded-lg hover:bg-bg/40 transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{rule.name}</p>
                    <p className="text-xs text-muted mt-1">{rule.description}</p>
                    <p className="text-sm font-medium mt-2 text-brand">{rule.value}</p>
                    <p className="text-xs text-muted mt-1">Modified: {rule.lastModified}</p>
                  </div>
                  <div className="ml-4 flex items-center gap-2">
                    <Badge variant="ok">Active</Badge>
                    <Button variant="tertiary" size="sm">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-sm font-semibold tracking-tight">Add New Rule</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted">Rule Name</label>
                <Input type="text" placeholder="e.g., Maximum Loan Amount" className="mt-2" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted">Rule Value</label>
                <Input type="text" placeholder="e.g., $10,000" className="mt-2" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-muted">Description</label>
                <textarea
                  placeholder="Explain when and why this rule applies"
                  className="mt-2 w-full px-3 py-2 rounded-lg border border-border/60 bg-panel text-fg placeholder:text-muted resize-none h-20"
                />
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button size="sm">Add Rule</Button>
              <Button variant="secondary" size="sm">Cancel</Button>
            </div>
          </Card>
        </div>
      )}

      {/* Interest Rates Tab */}
      {activeTab === "rates" && (
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-sm font-semibold tracking-tight">Interest Rate Tiers</h2>
            <p className="mt-1 text-sm text-muted">Rate adjustments based on credit profile and loan characteristics</p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/40">
                    <th className="px-4 py-3 text-left font-semibold">Condition</th>
                    <th className="px-4 py-3 text-left font-semibold">Min Rate</th>
                    <th className="px-4 py-3 text-left font-semibold">Max Rate</th>
                    <th className="px-4 py-3 text-left font-semibold">Applicable</th>
                    <th className="px-4 py-3 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rateRules.map((rate) => (
                    <tr key={rate.id} className="border-b border-border/20 hover:bg-bg/40">
                      <td className="px-4 py-3 font-medium">{rate.condition}</td>
                      <td className="px-4 py-3 text-brand font-semibold">{rate.minRate}</td>
                      <td className="px-4 py-3 text-brand font-semibold">{rate.maxRate}</td>
                      <td className="px-4 py-3">{rate.applicableLoans}</td>
                      <td className="px-4 py-3 flex gap-1">
                        <Button variant="tertiary" size="sm">Edit</Button>
                        <Button variant="tertiary" size="sm">Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6 bg-orange-500/5 border-orange-500/30">
            <h2 className="text-sm font-semibold tracking-tight text-orange-600">Rate Floor & Ceiling</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted">Minimum Rate (Floor)</label>
                <Input type="text" placeholder="16.5%" className="mt-2" />
                <p className="text-xs text-muted mt-1">Lowest rate allowed across all loans</p>
              </div>
              <div>
                <label className="text-xs font-medium text-muted">Maximum Rate (Ceiling)</label>
                <Input type="text" placeholder="21.9%" className="mt-2" />
                <p className="text-xs text-muted mt-1">Highest rate allowed across all loans</p>
              </div>
            </div>
            <div className="mt-4">
              <Button size="sm">Update Rate Limits</Button>
            </div>
          </Card>
        </div>
      )}

      {/* CAB Compliance Tab */}
      {activeTab === "cab" && (
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-sm font-semibold tracking-tight">CAB Notice Requirements</h2>
            <p className="mt-1 text-sm text-muted">Motor Vehicle Installment Sales Law compliance checklist</p>

            <div className="mt-4 space-y-3">
              {cabRules.map((rule) => (
                <div key={rule.id} className="flex items-start justify-between p-4 border border-border/40 rounded-lg bg-green-500/5 border-green-500/30">
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{rule.requirement}</p>
                    <p className="text-xs text-muted mt-1">{rule.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-medium text-green-600">✓ {rule.compliance} Compliance</span>
                    </div>
                  </div>
                  <Badge variant="ok">Required</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-sm font-semibold tracking-tight">Notice Templates</h2>
            <p className="mt-1 text-sm text-muted">Customize CAB notice text and formatting</p>

            <div className="mt-4 space-y-3">
              <div>
                <label className="text-xs font-medium text-muted">Finance Charge Disclosure</label>
                <textarea
                  placeholder="The finance charge on this agreement is..."
                  className="mt-2 w-full px-3 py-2 rounded-lg border border-border/60 bg-panel text-fg placeholder:text-muted resize-none h-24"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted">Cancellation Rights Notice</label>
                <textarea
                  placeholder="You have the right to cancel this agreement..."
                  className="mt-2 w-full px-3 py-2 rounded-lg border border-border/60 bg-panel text-fg placeholder:text-muted resize-none h-24"
                />
              </div>
            </div>
            <div className="mt-4">
              <Button size="sm">Update Templates</Button>
            </div>
          </Card>

          <Card className="p-6 border-blue-500/30 bg-blue-500/5">
            <h2 className="text-sm font-semibold tracking-tight text-blue-600">Compliance Monitoring</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs font-medium text-muted">Documents Requiring CAB</p>
                <p className="mt-1 text-2xl font-semibold">100</p>
                <p className="text-xs text-muted">Last 30 days</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted">Compliance Rate</p>
                <p className="mt-1 text-2xl font-semibold text-green-600">100%</p>
                <p className="text-xs text-muted">All compliant</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted">Missing Notices</p>
                <p className="mt-1 text-2xl font-semibold">0</p>
                <p className="text-xs text-muted">Perfect record</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

