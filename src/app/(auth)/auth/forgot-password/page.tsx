"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useToast } from "@/components/ui/Toast";

export default function Page() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 400));
      toast.push({
        title: "Reset link sent (stub)",
        message: "In production, this emails a secure reset link.",
        tone: "ok"
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section className="pt-10 md:pt-16">
      <Container className="max-w-xl">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Password</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">Reset your password</h1>
          <p className="mt-2 text-sm text-muted">V1 placeholder. No sensitive credentials are stored in this scaffold.</p>
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" />
            </div>
            <Button disabled={!email.includes("@") || loading} className="w-full" type="submit">
              {loading ? "Sending…" : "Send reset link"}
            </Button>
          </form>
          <div className="mt-4 text-sm">
            <Link className="text-muted underline underline-offset-4 hover:text-fg" href="/auth/login">
              Back to login
            </Link>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
