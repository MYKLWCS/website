"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { track } from "@/lib/analytics";
import { useToast } from "@/components/ui/Toast";

export default function Page() {
  const toast = useToast();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    try {
      await track("support_contact", { subject });
      await new Promise((r) => setTimeout(r, 450));
      toast.push({ title: "Support request created (stub)", message: "Ticket UI and chat widget are placeholders in V1.", tone: "ok" });
      setSubject("");
      setMessage("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Support</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">How can we help?</h1>
          <p className="mt-2 max-w-prose text-sm text-muted">
            Ticket-style support with a knowledge base search (placeholders). For CAB questions, see the CAB model explainer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <p className="text-sm font-semibold tracking-tight">Create a ticket</p>
            <div className="mt-4 space-y-3">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you need..." />
              </div>
              <Button disabled={!subject.trim() || !message.trim() || loading} onClick={submit}>
                {loading ? "Sending…" : "Submit"}
              </Button>
            </div>
          </Card>
          <Card className="p-6">
            <Notice tone="cab" title="CAB-first clarity">
              Dollar Loans is a Texas CAB that facilitates access to credit. If you have questions about disclosures or fees, we can help explain categories in plain language.
            </Notice>
            <div className="mt-4 rounded-2xl border border-border/60 bg-bg/25 p-5">
              <p className="text-sm font-semibold tracking-tight">Chat widget</p>
              <p className="mt-1 text-sm text-muted">Placeholder for a chat integration.</p>
            </div>
            <div className="mt-4 rounded-2xl border border-border/60 bg-bg/25 p-5">
              <p className="text-sm font-semibold tracking-tight">Knowledge base search</p>
              <p className="mt-1 text-sm text-muted">Placeholder. Add an indexed FAQ and CAB education search.</p>
            </div>
          </Card>
        </div>
    </div>
  );
}
