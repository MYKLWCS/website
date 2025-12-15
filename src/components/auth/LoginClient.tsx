"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useToast } from "@/components/ui/Toast";
import { track } from "@/lib/analytics";

export function LoginClient() {
  const router = useRouter();
  const params = useSearchParams();
  const toast = useToast();
  const next = params.get("next") || "/dashboard";

  const [email, setEmail] = useState("demo@dollarloans.example");
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(() => email.trim().includes("@"), [email]);

  async function onLogin(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (!res.ok) throw new Error("Login failed");
      await track("login_success", { method: "email_stub" });
      toast.push({ title: "Signed in", message: "Welcome back.", tone: "ok" });
      router.push(next);
    } catch {
      toast.push({ title: "Couldn’t sign in", message: "Please try again.", tone: "danger" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section className="pt-10 md:pt-16">
      <Container className="max-w-xl">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Login</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">Access your customer portal</h1>
          <p className="mt-2 text-sm text-muted">
            Continue your CAB title access application, manage agreements, and make payments.
          </p>
          <p className="mt-3 rounded-2xl border border-warn/40 bg-warn/10 p-4 text-sm text-muted">
            Demo environment: do not enter sensitive personal information. Authentication is a V1 stub.
          </p>

          <form className="mt-6 space-y-4" onSubmit={onLogin}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" />
              <p className="mt-2 text-xs text-muted">V1 stub: any valid email signs you in.</p>
            </div>
            <Button disabled={!canSubmit || loading} className="w-full" type="submit">
              {loading ? "Signing in…" : "Login"}
            </Button>
          </form>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <Link className="text-muted underline underline-offset-4 hover:text-fg" href="/auth/forgot-password">
              Forgot password
            </Link>
            <Link className="text-muted underline underline-offset-4 hover:text-fg" href="/auth/signup">
              Create account
            </Link>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
