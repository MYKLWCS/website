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
                We can explain fee categories and disclosures in plain language. We avoid misleading "lender" positioning and we never promise approval.
              </>
            ),
            infographic: { variant: "securityDataJourney", title: "Support request journey", caption: "How requests are routed and handled (placeholder)." }
          }
        ]}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="mt-3 text-lg text-muted">We're here to help answer any questions you may have.</p>
            </div>
            <Card className="p-8 shadow-lg border-2 hover:border-brand/20 transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold">Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base font-semibold">Email</Label>
                  <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                  <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" className="mt-2 min-h-[150px]" />
                </div>
                <Button disabled={!email.includes("@") || !message.trim() || loading} onClick={submit} size="lg" className="w-full">
                  {loading ? "Sending…" : "Send Message"}
                </Button>
                <p className="text-xs text-muted text-center">This form is a V1 stub (no email sending configured).</p>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-6">Contact Methods</h3>
              <div className="grid gap-6">
                {[
                  ["Phone", "1 (800) 000‑0000", "Mon–Fri 9am–6pm CT"],
                  ["Email", "support@dollarloans.example", "Response time: same-day"],
                  ["Chat", "In-app chat", "Available 24/7"],
                  ["Mail", "Austin, TX", "Mailing address available"]
                ].map(([t, v, d]) => (
                  <div key={t} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-brand2 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
                    <div className="relative rounded-2xl border-2 border-border bg-white p-6 transition-all duration-300 group-hover:border-brand/30 group-hover:shadow-lg">
                      <p className="text-lg font-bold text-brand">{t}</p>
                      <p className="mt-2 text-base font-semibold text-fg">{v}</p>
                      <p className="mt-1 text-sm text-muted">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Notice tone="cab" title="CAB Disclosure" className="p-6">
              Dollar Loans is a Texas Credit Access Business (CAB) that facilitates access to credit. A third-party creditor may extend credit if approved.
            </Notice>

            <Card className="p-8 shadow-lg border-2 hover:border-brand/20 transition-all duration-300">
              <h3 className="text-xl font-bold tracking-tight">Customer Portal Support</h3>
              <p className="mt-3 text-base text-muted">Already a customer? Access faster support through the portal.</p>
              <div className="mt-6">
                <Button asChild size="lg" className="w-full">
                  <a href="/dashboard/support">Go to Portal Support</a>
                </Button>
              </div>
            </Card>

            <Notice tone="info" className="p-6">
              For complaints or escalations, visit our <a className="underline underline-offset-4 hover:text-brand font-semibold" href="/legal/complaints">complaints</a> page.
            </Notice>
          </div>
        </Container>
      </Section>
    </main>
  );
}
