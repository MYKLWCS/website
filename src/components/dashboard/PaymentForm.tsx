"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/cn";
import { track } from "@/lib/analytics";
import { formatUsd } from "@/lib/format";

interface PaymentFormProps {
  minAmount?: number;
  maxAmount?: number;
  dueAmount?: number;
  onPaymentCreated?: (payment: any) => void;
}

export function PaymentForm({ minAmount = 50, maxAmount = 5000, dueAmount = 215, onPaymentCreated }: PaymentFormProps) {
  const [amount, setAmount] = useState(String(dueAmount));
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedQuickAmount, setSelectedQuickAmount] = useState<number | null>(null);
  const toast = useToast();

  const amountValue = parseFloat(amount) || 0;
  const isValidAmount = amountValue >= minAmount && amountValue <= maxAmount;

  const quickAmounts = [
    { label: "Min Payment", value: minAmount },
    { label: "Due Now", value: dueAmount },
    { label: "Double", value: dueAmount * 2 }
  ];

  const paymentMethods = [
    { id: "bank", label: "Bank Account", icon: "🏦", description: "Free, 1-2 business days" },
    { id: "card", label: "Debit Card", icon: "💳", description: "2% fee, immediate" },
    { id: "ach", label: "ACH Transfer", icon: "📤", description: "Free, 3-5 business days" }
  ];

  const handleQuickAmount = (value: number) => {
    setAmount(String(value));
    setSelectedQuickAmount(value);
  };

  const handleSubmit = async () => {
    if (!isValidAmount) {
      toast.push({ title: "Invalid amount", message: `Payment must be between $${minAmount} and $${maxAmount}`, tone: "warn" });
      return;
    }

    setIsProcessing(true);
    try {
      void track("payment_initiated", { amount: amountValue, method: paymentMethod });

      const apiMethod = paymentMethod === "card" ? "card" : "bank";
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ amount: amountValue, method: apiMethod })
      });
      const json = (await res.json().catch(() => null)) as any;
      if (!res.ok) throw new Error(json?.error || "Payment failed");

      void track("payment_success", { amount: amountValue, method: paymentMethod, paymentId: json?.payment?.id });
      toast.push({
        title: "Payment submitted",
        message: `${formatUsd(amountValue)} via ${paymentMethod.toUpperCase()} (demo).`,
        tone: "ok"
      });
      onPaymentCreated?.(json?.payment);
      setAmount(String(dueAmount));
      setSelectedQuickAmount(null);
    } catch (error) {
      toast.push({
        title: "Payment failed",
        message: error instanceof Error ? error.message : "There was an error processing your payment. Please try again.",
        tone: "danger"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-sm font-semibold tracking-tight">Make a Payment</h2>
      <p className="mt-1 text-sm text-muted">
        Enter the amount you'd like to pay toward your agreement
      </p>

      {/* Quick Amount Buttons */}
      <div className="mt-6">
        <Label>Quick Select</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {quickAmounts.map((quick) => (
            <button
              key={quick.value}
              onClick={() => handleQuickAmount(quick.value)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all ${
                selectedQuickAmount === quick.value
                  ? "border-brand bg-brand/10 text-fg"
                  : "border-border/40 bg-bg/25 text-muted hover:border-brand/40"
              }`}
            >
              <div className="font-medium">{quick.label}</div>
              <div className="text-xs mt-0.5">${quick.value.toFixed(2)}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Amount Input */}
      <div className="mt-6">
        <Label htmlFor="amount">Payment Amount</Label>
        <div className="mt-2 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-fg font-semibold">$</span>
          <Input
            id="amount"
            type="number"
            inputMode="decimal"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setSelectedQuickAmount(null);
            }}
            placeholder="0.00"
            min={minAmount}
            max={maxAmount}
            step="0.01"
            className="pl-8"
          />
        </div>
        <p className="mt-2 text-xs text-muted">
          Allowed range: ${minAmount.toFixed(2)} - ${maxAmount.toFixed(2)}
        </p>
        {!isValidAmount && amount && (
          <p className="mt-1 text-xs text-danger">Amount is outside the allowed range</p>
        )}
      </div>

      {/* Payment Method Selection */}
      <div className="mt-6">
        <Label>Payment Method</Label>
        <div className="mt-3 space-y-2">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={cn(
                "flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all",
                paymentMethod === method.id
                  ? "border-brand2/40 bg-brand2/10"
                  : "border-border/14 bg-bg/40 hover:border-border/24"
              )}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={paymentMethod === method.id}
                onChange={(e) => setPaymentMethod(e.target.value)}
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
      </div>

      {/* Order Summary */}
      <div className="mt-6 p-4 bg-bg/40 rounded-lg border border-border/40">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted">Payment Amount</span>
          <span className="font-semibold">${amountValue.toFixed(2)}</span>
        </div>

        {paymentMethod === "card" && (
          <div className="mt-2 flex justify-between items-center text-sm border-t border-border/40 pt-2">
            <span className="text-muted">Processing Fee (2%)</span>
            <span className="font-semibold">${(amountValue * 0.02).toFixed(2)}</span>
          </div>
        )}

        <div className="mt-2 flex justify-between items-center text-sm border-t border-border/40 pt-2">
          <span className="font-medium">Total Charged</span>
          <span className="font-semibold text-lg">
            ${(paymentMethod === "card" ? amountValue * 1.02 : amountValue).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Processing Time Info */}
      <div className="mt-4 p-3 bg-brand2/5 border border-brand2/20 rounded-lg text-xs text-muted">
        💡 Payments are typically applied within 1-2 business days. Your payment schedule will update automatically.
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <Button
          onClick={handleSubmit}
          disabled={!isValidAmount || isProcessing}
          className={isProcessing ? "opacity-75" : ""}
          type="button"
        >
          {isProcessing ? "Processing..." : `Pay $${amountValue.toFixed(2)}`}
        </Button>
        <p className="mt-2 text-xs text-muted">
          By submitting, you authorize the payment transaction under the terms of your agreement.
        </p>
      </div>
    </Card>
  );
}
