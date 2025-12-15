"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { formatUsd } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import type { Application } from "@/lib/types";

type Props = {
  params: { id: string };
};

const STATUS_COLORS: Record<Application["status"], "default" | "brand" | "ok" | "warn"> = {
  draft: "default",
  in_review: "warn",
  offer_ready: "brand",
  funded: "ok",
  declined: "warn"
};

const STATUS_LABELS: Record<Application["status"], string> = {
  draft: "Draft",
  in_review: "In Review",
  offer_ready: "Offer Ready",
  funded: "Funded",
  declined: "Declined"
};

export default function ApplicationDetailPage({ params }: Props) {
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/applications/${params.id}`);
        if (!response.ok) {
          throw new Error("Application not found");
        }
        const data = await response.json();
        setApplication(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load application");
        setApplication(null);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [params.id]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-10 w-48 animate-pulse rounded-lg bg-bg/50"></div>
        <div className="h-32 w-full animate-pulse rounded-lg bg-bg/50"></div>
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Application</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Not Found</h1>
        </div>
        <Card className="p-6">
          <Notice tone="warn" title="Application Not Found">
            We couldn&apos;t find this application. It may have been deleted or the ID is incorrect.
          </Notice>
          <div className="mt-4">
            <ButtonLink href="/dashboard/applications">Back to Applications</ButtonLink>
          </div>
        </Card>
      </div>
    );
  }

  // Calculate total fees from estimate
  const estimateTotal = application.estimateRange
    ? (application.estimateRange.high - application.estimateRange.low) * 0.1
    : 0;

  // Determine next step based on status
  const getNextSteps = () => {
    switch (application.status) {
      case "draft":
        return [
          { title: "Complete Information", detail: "Finish filling out your application details.", status: "active" },
          { title: "Document Review", detail: "Upload required documents and photos.", status: "todo" },
          { title: "Offer & Agreement", detail: "Review your offer and CAB disclosures.", status: "todo" }
        ];
      case "in_review":
        return [
          { title: "Document Review", detail: "We&apos;re reviewing your submitted documents and vehicle info.", status: "active" },
          { title: "Offer Confirmation", detail: "Once verified, you&apos;ll see your final offer.", status: "todo" },
          { title: "E-Sign & Funding", detail: "Review and sign the CAB agreement.", status: "todo" }
        ];
      case "offer_ready":
        return [
          { title: "Document Review", detail: "Your documents have been verified.", status: "done" },
          { title: "Offer Confirmation", detail: "Your offer is ready for review.", status: "active" },
          { title: "E-Sign & Funding", detail: "Review and sign the CAB agreement.", status: "todo" }
        ];
      case "funded":
        return [
          { title: "Document Review", detail: "Completed", status: "done" },
          { title: "Offer Confirmation", detail: "Completed", status: "done" },
          { title: "E-Sign & Funding", detail: "Your agreement is funded.", status: "done" }
        ];
      case "declined":
        return [
          { title: "Application Declined", detail: "Unfortunately, we couldn&apos;t approve this application.", status: "done" }
        ];
      default:
        return [];
    }
  };

  const nextSteps = getNextSteps();
  const isDeclined = application.status === "declined";

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Application</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Application {application.id}</h1>
        <p className="mt-1 text-sm text-muted">Application status, offer details, and next steps</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Status */}
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Status</p>
          <div className="mt-3 flex items-end justify-between">
            <Badge variant={STATUS_COLORS[application.status]}>
              {STATUS_LABELS[application.status]}
            </Badge>
            <p className="text-xs text-muted">
              Updated: {new Date(application.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </Card>

        {/* Requested Amount */}
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Requested Amount</p>
          <p className="mt-2 text-2xl font-bold text-fg">{formatUsd(application.requestedAmount)}</p>
          <p className="mt-1 text-xs text-muted">From initial pre-qualify form</p>
        </Card>
      </div>

      {/* Estimate Range */}
      {application.estimateRange && !isDeclined && (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Estimated Range</p>
          <div className="mt-4 rounded-2xl border border-brand/30 bg-brand/5 p-5">
            <p className="text-xs text-muted">Estimated cash access range (not guaranteed)</p>
            <p className="mt-2 text-3xl font-bold text-fg">
              {formatUsd(application.estimateRange.low)}–{formatUsd(application.estimateRange.high)}
            </p>
            <p className="mt-2 text-sm text-muted">
              Final amount depends on vehicle verification, title review, and creditor approval.
            </p>
          </div>
        </Card>
      )}

      {/* Final Offer */}
      {application.finalOffer && !isDeclined && (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Final Offer</p>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between rounded-lg border border-border/40 bg-bg/25 p-3">
              <span className="text-sm">Approved Amount</span>
              <span className="font-semibold text-fg">{formatUsd(application.finalOffer.amount)}</span>
            </div>
            <div className="flex justify-between rounded-lg border border-border/40 bg-bg/25 p-3">
              <span className="text-sm">Total Fees</span>
              <span className="font-semibold text-fg">{formatUsd(application.finalOffer.totalFees)}</span>
            </div>
            <div className="mt-3 border-t border-border/50 pt-3">
              <div className="flex justify-between">
                <span className="font-semibold">You&apos;ll Receive</span>
                <span className="text-lg font-bold text-fg">
                  {formatUsd(application.finalOffer.amount - application.finalOffer.totalFees)}
                </span>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Decline Message */}
      {isDeclined && (
        <Card className="p-6">
          <Notice tone="warn" title="Application Declined">
            Unfortunately, we weren&apos;t able to approve this application at this time. You&apos;re welcome to submit a new application or contact support to discuss alternatives.
          </Notice>
        </Card>
      )}

      {/* Next Steps */}
      {nextSteps.length > 0 && !isDeclined && (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Next Steps</p>
          <div className="mt-4 space-y-3">
            {nextSteps.map((step, idx) => (
              <div
                key={idx}
                className={`rounded-lg border p-4 ${
                  step.status === "active"
                    ? "border-brand/50 bg-brand/5"
                    : step.status === "done"
                      ? "border-ok/30 bg-ok/5"
                      : "border-border/40 bg-bg/25"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="mt-1 text-xs text-muted">{step.detail}</p>
                  </div>
                  {step.status === "done" && <span className="text-xs font-semibold text-ok">✓</span>}
                  {step.status === "active" && (
                    <span className="text-xs font-semibold text-brand">In Progress</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/dashboard/applications">Back to Applications</ButtonLink>
        {!isDeclined && application.status === "draft" && (
          <ButtonLink href="/dashboard/get-cash" variant="secondary">
            Resume Application
          </ButtonLink>
        )}
        {application.status === "offer_ready" && (
          <Button variant="secondary">Review and Sign Agreement</Button>
        )}
      </div>

      <Notice tone="cab" title="CAB Disclosure">
        You will receive required CAB disclosures before signing any agreement. See{" "}
        <a href="/legal/cab-disclosures" className="underline underline-offset-4 hover:text-fg">
          CAB disclosures
        </a>
        .
      </Notice>
    </div>
  );
}
