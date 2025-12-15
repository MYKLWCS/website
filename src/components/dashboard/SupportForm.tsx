"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useToast } from "@/components/ui/Toast";

export function SupportForm() {
  const [formData, setFormData] = useState({
    subject: "",
    category: "general",
    priority: "normal",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const categories = [
    { id: "general", label: "General Question" },
    { id: "application", label: "Application Status" },
    { id: "payment", label: "Payment Issue" },
    { id: "documents", label: "Document Upload" },
    { id: "account", label: "Account Access" },
    { id: "other", label: "Other" }
  ];

  const priorities = [
    { id: "low", label: "Low" },
    { id: "normal", label: "Normal" },
    { id: "high", label: "High - Urgent" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.subject || !formData.message) {
      toast.push({ title: "Please fill in all required fields", tone: "warn" });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.push({
        title: "Support ticket created",
        message: `Ticket #${Math.floor(Math.random() * 100000)} — we’ll respond within 24 hours.`,
        tone: "ok",
      });

      setFormData({
        subject: "",
        category: "general",
        priority: "normal",
        message: ""
      });
    } catch (error) {
      toast.push({ title: "Failed to submit ticket", message: "Please try again or contact us directly.", tone: "danger" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card id="support-form" className="p-6">
      <h2 className="text-sm font-semibold tracking-tight">Submit a Support Ticket</h2>
      <p className="mt-1 text-sm text-muted">
        Can't find your answer? Tell us what's happening and we'll help you out.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Subject */}
        <div>
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Brief summary of your issue"
            className="mt-1"
          />
        </div>

        {/* Category */}
        <div>
          <Label htmlFor="category">Category *</Label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 w-full h-11 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg focus:outline-none focus:ring-2 focus:ring-brand/60"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Priority */}
        <div>
          <Label htmlFor="priority">Priority</Label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="mt-1 w-full h-11 px-3 rounded-lg border border-border/70 bg-bg/50 text-fg focus:outline-none focus:ring-2 focus:ring-brand/60"
          >
            {priorities.map((pri) => (
              <option key={pri.id} value={pri.id}>
                {pri.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">Message *</Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please provide details about your issue..."
            rows={5}
            className="mt-1 w-full px-3 py-2 rounded-lg border border-border/70 bg-bg/50 text-fg focus:outline-none focus:ring-2 focus:ring-brand/60 resize-none"
          />
          <p className="mt-1 text-xs text-muted">
            {formData.message.length}/1000 characters
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className={isSubmitting ? "opacity-75" : ""}
          >
            {isSubmitting ? "Submitting..." : "Submit Ticket"}
          </Button>
        </div>

        {/* Info */}
        <p className="text-xs text-muted pt-2">
          Response time depends on priority. High priority tickets typically receive a response within 2 hours.
        </p>
      </form>
    </Card>
  );
}
