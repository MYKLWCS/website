"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Badge } from "@/components/ui/Badge";
import { Notice } from "@/components/ui/Notice";
import { useToast } from "@/hooks/useToast";

export function AutopaySetup() {
  const [autopayEnabled, setAutopayEnabled] = useState(false);
  const [setupMode, setSetupMode] = useState<"method" | "confirm" | "complete">("method");
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [paymentDay, setPaymentDay] = useState("14");
  const [isProcessing, setIsProcessing] = useState(false);
  const { showToast } = useToast();

  const paymentMethods = [
    {
      id: "bank",
      label: "Bank Account",
      icon: "🏦",
      description: "Connect your checking or savings account",
      fields: [
        { name: "bankName", label: "Bank Name", placeholder: "e.g., Chase, Wells Fargo" },
        { name: "accountType", label: "Account Type", type: "select", options: ["Checking", "Savings"] },
        { name: "lastFour", label: "Last 4 Digits", placeholder: "1234" }
      ]
    },
    {
      id: "card",
      label: "Debit Card",
      icon: "💳",
      description: "Use your debit card for autopay",
      fields: [
        { name: "cardName", label: "Cardholder Name", placeholder: "John Doe" },
        { name: "lastFour", label: "Last 4 Digits", placeholder: "5678" }
      ]
    }
  ];

  const handleEnableAutopay = async () => {
    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setAutopayEnabled(true);
      setSetupMode("complete");
      showToast({
        title: "Autopay enabled successfully",
        description: `Monthly payments of $215 will be charged on the ${paymentDay}th of each month`,
        tone: "ok"
      });
      setTimeout(() => setSetupMode("method"), 3000);
    } catch (error) {
      showToast({ title: "Failed to enable autopay", tone: "warn" });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDisableAutopay = async () => {
    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAutopayEnabled(false);
      showToast({
        title: "Autopay disabled",
        description: "You will need to make manual payments",
        tone: "ok"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (autopayEnabled) {
    return (
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm font-semibold tracking-tight">Autopay Settings</h2>
            <p className="mt-1 text-sm text-muted">Autopay is currently enabled</p>
          </div>
          <Badge variant="ok">Active</Badge>
        </div>

        <div className="mt-6 space-y-4">
          <div className="p-4 bg-bg/25 rounded-lg border border-border/40">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Payment Details</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Monthly Amount</span>
                <span className="font-semibold">$215.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Due Date</span>
                <span className="font-semibold">{paymentDay}th of each month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Payment Method</span>
                <span className="font-semibold">Bank Account ending in 1234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Status</span>
                <span className="font-semibold text-green-600">Active</span>
              </div>
            </div>
          </div>

          <Notice tone="info" title="Upcoming Payments">
            Next payment scheduled for December 14, 2025. You can cancel autopay anytime with no penalties.
          </Notice>

          <div className="flex gap-2 pt-4">
            <Button variant="secondary" size="sm">
              Change Payment Day
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={handleDisableAutopay}
              disabled={isProcessing}
              className={isProcessing ? "opacity-75" : ""}
            >
              {isProcessing ? "Processing..." : "Disable Autopay"}
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h2 className="text-sm font-semibold tracking-tight">Enable Autopay</h2>
      <p className="mt-1 text-sm text-muted">Set up automatic monthly payments</p>

      {setupMode === "method" && (
        <div className="mt-6 space-y-4">
          <Notice tone="info" title="Autopay Benefits">
            Never miss a payment and avoid late fees. You can modify or cancel autopay anytime.
          </Notice>

          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className="flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all"
                style={{
                  borderColor: selectedMethod === method.id ? "var(--color-brand)" : "var(--color-border-40)",
                  backgroundColor: selectedMethod === method.id ? "rgba(var(--color-brand-rgb), 0.1)" : "transparent"
                }}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedMethod === method.id}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{method.icon}</span>
                    <div>
                      <p className="font-medium text-sm">{method.label}</p>
                      <p className="text-xs text-muted mt-0.5">{method.description}</p>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-6">
            <Label>Payment Day (of month)</Label>
            <select
              value={paymentDay}
              onChange={(e) => setPaymentDay(e.target.value)}
              className="mt-2 w-full h-10 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg focus:outline-none focus:ring-2 focus:ring-brand/60"
            >
              {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}th of each month
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 p-4 bg-blue-500/5 rounded-lg border border-blue-500/20 text-xs text-muted">
            ℹ️ Your monthly payment of <strong>$215.00</strong> will be automatically charged on the{" "}
            <strong>{paymentDay}th</strong> of each month starting next month.
          </div>

          <div className="mt-6 flex gap-2">
            <Button
              onClick={() => setSetupMode("confirm")}
              disabled={isProcessing}
            >
              Continue
            </Button>
            <Button variant="secondary" onClick={() => setSelectedMethod("bank")}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {setupMode === "confirm" && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-bg/25 rounded-lg border border-border/40 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Payment Method</span>
              <span className="font-semibold">Bank Account</span>
            </div>
            <div className="flex justify-between text-sm border-t border-border/40 pt-3">
              <span className="text-muted">Monthly Amount</span>
              <span className="font-semibold">$215.00</span>
            </div>
            <div className="flex justify-between text-sm border-t border-border/40 pt-3">
              <span className="text-muted">Payment Day</span>
              <span className="font-semibold">{paymentDay}th of each month</span>
            </div>
          </div>

          <Notice tone="cab" title="Agreement Acknowledgment">
            By enabling autopay, you authorize Dollar Loans to automatically debit your bank account on your selected payment date. You can cancel anytime with no penalties.
          </Notice>

          <div className="mt-6 flex gap-2">
            <Button
              onClick={handleEnableAutopay}
              disabled={isProcessing}
              className={isProcessing ? "opacity-75" : ""}
            >
              {isProcessing ? "Setting up..." : "Confirm & Enable Autopay"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => setSetupMode("method")}
              disabled={isProcessing}
            >
              Back
            </Button>
          </div>
        </div>
      )}

      {setupMode === "complete" && (
        <div className="mt-6 text-center py-8">
          <p className="text-4xl mb-3">✓</p>
          <h3 className="text-lg font-semibold">Autopay Enabled!</h3>
          <p className="mt-2 text-sm text-muted">
            Your first automatic payment will be processed on December {paymentDay}, 2025
          </p>
        </div>
      )}
    </Card>
  );
}
