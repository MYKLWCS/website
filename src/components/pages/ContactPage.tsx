"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { MarketingPageShell } from "@/components/pages/MarketingPageShell";
import { track } from "@/lib/analytics";
import { useToast } from "@/components/ui/Toast";
import { Infographic } from "@/components/infographics/Infographic";

export function ContactPage() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    try {
      await track("support_contact", { source: "public_contact" });
      await new Promise((r) => setTimeout(r, 450));
      toast.push({ title: "Message sent (stub)", message: "In production, route to support + compliance logging.", tone: "ok" });
      setName("");
      setEmail("");
      setMessage("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <MarketingPageShell
        title="Contact"
        lead={<>Fast, helpful support with a calm, high-trust tone. For customers, the portal has ticket-style support.</>}
        primaryCta={{ label: "Login", href: "/auth/login" }}
        secondaryCta={{ label: "CAB model explained", href: "/cab-model-explained" }}
        sections={[
          {
            eyebrow: "Support philosophy",
            title: "Clear answers, CAB-first language",
            body: (
              <>
                We can explain fee categories and disclosures in plain language. We avoid misleading “lender” positioning and we never promise approval.
              </>
            ),
            infographic: { variant: "securityDataJourney", title: "Support request journey", caption: "How requests are routed and handled (placeholder)." }
          }
        ]}
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold tracking-tight">Send a message</p>
            <p className="mt-1 text-sm text-muted">This form is a V1 stub (no email sending configured).</p>
            <div className="mt-4 space-y-3">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" />
              </div>
              <Button disabled={!email.includes("@") || !message.trim() || loading} onClick={submit}>
                {loading ? "Sending…" : "Send"}
              </Button>
            </div>
          </Card>

          <div className="space-y-4">
            <Notice tone="cab" title="CAB disclosure note">
              Dollar Loans is a Texas Credit Access Business (CAB) that facilitates access to credit. A third-party creditor may extend credit if approved.
            </Notice>
            <Notice tone="info" title="Complaints">
              See the <a className="underline underline-offset-4 hover:text-fg" href="/legal/complaints">complaints</a> page for escalation pathways (placeholder).
            </Notice>
            <Card className="p-6">
              <p className="text-sm font-semibold tracking-tight">Contact methods (placeholders)</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ["Phone", "1 (800) 000‑0000", "Mon–Fri 9am–6pm CT (placeholder)"],
                  ["Email", "support@dollarloans.example", "Response time: same-day (placeholder)"],
                  ["Chat", "In-app chat", "Chat widget placeholder"],
                  ["Mail", "Austin, TX", "Address placeholder for legitimacy"]
                ].map(([t, v, d]) => (
                  <div key={t} className="rounded-2xl border border-border/60 bg-bg/25 p-4">
                    <p className="text-sm font-semibold tracking-tight">{t}</p>
                    <p className="mt-1 text-sm text-fg">{v}</p>
                    <p className="mt-1 text-xs text-muted">{d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">Replace placeholders with real contact details before launch.</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold tracking-tight">Customer portal support</p>
              <p className="mt-1 text-sm text-muted">If you’re already a customer, the fastest path is portal support.</p>
              <div className="mt-4">
                <Button asChild>
                  <a href="/dashboard/support">Go to portal support</a>
                </Button>
              </div>
            </Card>
            <Infographic
              variant="lifecycleTimeline"
              title="Support + resolution timeline"
              caption="Ticket created → response → resolution (placeholder)."
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
