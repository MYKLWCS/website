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

      <Section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-panel/30 via-white to-panel/20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-brand/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-brand2/8 to-transparent rounded-full blur-3xl"></div>

        <Container className="relative grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand/10 to-brand2/10 border border-brand/20 mb-6 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Contact Us</p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-fg to-fg/70 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-xl text-muted leading-relaxed">We're here to help answer any questions you may have.</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-brand to-brand2 rounded-3xl opacity-20 blur-xl"></div>
              <Card className="relative p-10 shadow-[0_30px_60px_rgb(var(--brand)/0.15)] border-2 hover:border-brand/30 transition-all duration-500">
                <div className="space-y-7">
                  <div>
                    <Label htmlFor="name" className="text-lg font-bold mb-3 block">Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="text-lg p-4" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-lg font-bold mb-3 block">Email</Label>
                    <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" className="text-lg p-4" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-lg font-bold mb-3 block">Message</Label>
                    <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" className="text-lg p-4 min-h-[180px]" />
                  </div>
                  <Button
                    disabled={!email.includes("@") || !message.trim() || loading}
                    onClick={submit}
                    size="lg"
                    className="w-full text-lg py-6 shadow-lg hover:shadow-[0_20px_40px_rgb(var(--brand)/0.3)] hover:scale-[1.02] transition-all duration-300"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-muted text-center">This form is a V1 stub (no email sending configured).</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-8">Contact Methods</h3>
              <div className="grid gap-6">
                {[
                  ["Phone", "1 (800) 000-0000", "Mon-Fri 9am-6pm CT"],
                  ["Email", "support@dollarloans.example", "Response time: same-day"],
                  ["Chat", "In-app chat", "Available 24/7"],
                  ["Mail", "Austin, TX", "Mailing address available"]
                ].map(([t, v, d], i) => (
                  <div key={t} className="group relative" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand2 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                    <div className="relative rounded-2xl border-2 border-border bg-white p-8 transition-all duration-500 group-hover:border-brand/40 group-hover:shadow-[0_20px_50px_rgb(var(--brand)/0.1)] group-hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand2/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand to-brand2"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-xl font-bold text-brand mb-2">{t}</p>
                          <p className="text-lg font-semibold text-fg mb-1">{v}</p>
                          <p className="text-base text-muted">{d}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-8 rounded-3xl border-2 border-brand/30 bg-gradient-to-br from-brand/5 via-white to-brand2/5 shadow-[0_20px_50px_rgb(var(--brand)/0.1)]">
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-brand/20 to-transparent rounded-tl-3xl"></div>
              <Notice tone="cab" title="CAB Disclosure" className="!p-0 !bg-transparent !border-0">
                Dollar Loans is a Texas Credit Access Business (CAB) that facilitates access to credit. A third-party creditor may extend credit if approved.
              </Notice>
            </div>

            <Card className="p-10 shadow-[0_20px_50px_rgb(var(--brand)/0.1)] border-2 hover:border-brand/30 transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Customer Portal Support</h3>
              <p className="text-lg text-muted mb-8">Already a customer? Access faster support through the portal.</p>
              <Button asChild size="lg" className="w-full text-lg py-6 shadow-lg hover:shadow-[0_20px_40px_rgb(var(--brand)/0.25)] transition-shadow duration-300">
                <a href="/dashboard/support">Go to Portal Support</a>
              </Button>
            </Card>

            <Notice tone="info" className="p-8">
              For complaints or escalations, visit our <a className="underline underline-offset-4 hover:text-brand font-semibold transition-colors" href="/legal/complaints">complaints</a> page.
            </Notice>
          </div>
        </Container>
      </Section>
    </main>
  );
}
