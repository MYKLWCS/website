"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

const FAQS = [
  {
    id: 1,
    category: "Applications",
    question: "How long does the application process take?",
    answer: "Most applications are reviewed within 24-48 hours. You'll receive updates via email as your application progresses through each stage."
  },
  {
    id: 2,
    category: "Applications",
    question: "What documents do I need to provide?",
    answer: "You'll need government-issued ID, proof of address, vehicle title and photos, and recent income verification. See the Documents page for a complete list."
  },
  {
    id: 3,
    category: "Applications",
    question: "Can I apply with bad credit?",
    answer: "Yes! We consider applications from customers with various credit histories. Your vehicle's value and income are key factors in your approval."
  },
  {
    id: 4,
    category: "Payments",
    question: "How do I make a payment?",
    answer: "Log into your dashboard, go to Payments, and follow the steps. We accept all major credit cards, debit cards, and bank transfers."
  },
  {
    id: 5,
    category: "Payments",
    question: "What if I can't make a payment on time?",
    answer: "Contact us immediately at support@dollarloans.com or call (844) LOANS-4U. We can discuss options like payment deferment or restructuring."
  },
  {
    id: 6,
    category: "Payments",
    question: "Is there an early payoff penalty?",
    answer: "No! You can pay off your loan early without any penalties. Early payoff can save you money on interest charges."
  },
  {
    id: 7,
    category: "Vehicles",
    question: "Why do you need a title to my vehicle?",
    answer: "The title serves as security for the loan. You keep possession of your vehicle and all day-to-day rights. Learn more about CAB in our Disclosures."
  },
  {
    id: 8,
    category: "Vehicles",
    question: "Can I get another loan if I already have one?",
    answer: "You can refinance your current loan or apply for an additional loan. Contact our team to discuss your options."
  },
  {
    id: 9,
    category: "Account",
    question: "How do I update my contact information?",
    answer: "Go to Settings > Profile to update your email, phone number, and address. Changes take effect immediately."
  },
  {
    id: 10,
    category: "Account",
    question: "How do I reset my password?",
    answer: "On the login page, click 'Forgot password?' and follow the email instructions. You'll receive a reset link valid for 24 hours."
  },
  {
    id: 11,
    category: "Security",
    question: "Is my data secure?",
    answer: "Yes, we use bank-level encryption and comply with all data protection regulations. Your financial information is never shared with third parties without consent."
  },
  {
    id: 12,
    category: "Security",
    question: "Should I enable two-factor authentication?",
    answer: "We highly recommend it for added security. You can enable 2FA in Settings. It adds an extra verification step when logging in."
  }
];

export function FAQSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(FAQS.map((faq) => faq.category)));

  const filteredFAQs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Card className="p-6">
      <h2 className="text-sm font-semibold tracking-tight">Frequently Asked Questions</h2>
      <p className="mt-1 text-sm text-muted">Search or filter to find answers</p>

      {/* Search Input */}
      <div className="mt-4">
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Category Filter */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
            selectedCategory === null
              ? "bg-brand text-white"
              : "bg-bg/25 text-muted hover:text-fg"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-brand text-white"
                : "bg-bg/25 text-muted hover:text-fg"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="mt-6 space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq) => (
            <details
              key={faq.id}
              className="group border border-border/40 rounded-lg p-4 hover:border-brand/40 cursor-pointer"
            >
              <summary className="flex items-start justify-between font-medium text-sm cursor-pointer select-none">
                <span className="flex-1 text-left">{faq.question}</span>
                <span className="ml-2 text-xs text-muted flex-shrink-0 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{faq.answer}</p>
              <p className="mt-3 inline-block px-2 py-1 text-xs bg-bg/25 rounded text-muted">
                {faq.category}
              </p>
            </details>
          ))
        ) : (
          <div className="py-8 text-center">
            <p className="text-muted">No FAQs match your search. Try different keywords or</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
              }}
              className="mt-2 text-sm text-brand hover:underline"
            >
              view all FAQs
            </button>
          </div>
        )}
      </div>

      {filteredFAQs.length > 0 && (
        <p className="mt-6 text-xs text-muted text-center">
          Showing {filteredFAQs.length} of {FAQS.length} FAQs
        </p>
      )}

      <div className="mt-4 p-4 bg-bg/25 rounded-lg border border-border/40">
        <p className="text-sm text-muted">
          Didn't find your answer?{" "}
          <a href="#support-form" className="text-brand hover:underline">
            Submit a support ticket
          </a>
          .
        </p>
      </div>
    </Card>
  );
}
