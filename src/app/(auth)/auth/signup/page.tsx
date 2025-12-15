"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useToast } from "@/components/ui/Toast";
import { track } from "@/lib/analytics";

export default function Page() {
  const router = useRouter();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(() => email.trim().includes("@") && name.trim().length >= 2, [email, name]);

  async function onSignup(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    await track("signup_start");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, name })
      });
      if (!res.ok) throw new Error("Signup failed");
      await track("signup_complete");
      toast.push({ title: "Account created", message: "Continue to the dashboard.", tone: "ok" });
      router.push("/dashboard");
    } catch {
      toast.push({ title: "Couldn’t create account", message: "Please try again.", tone: "danger" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section className="pt-10 md:pt-16">
      <Container className="max-w-xl">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Sign up</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">Create your portal account</h1>
          <p className="mt-2 text-sm text-muted">
            Save and resume your Get Cash wizard, upload documents, and track status — with CAB-first disclosures.
          </p>
          <p className="mt-3 rounded-2xl border border-warn/40 bg-warn/10 p-4 text-sm text-muted">
            Demo environment: do not enter sensitive personal information. Account creation is a V1 stub.
          </p>

          <form className="mt-6 space-y-4" onSubmit={onSignup}>
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full legal name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" />
            </div>
            <Button disabled={!canSubmit || loading} className="w-full" type="submit">
              {loading ? "Creating…" : "Create account"}
            </Button>
          </form>

          <div className="mt-4 text-sm">
            <Link className="text-muted underline underline-offset-4 hover:text-fg" href="/auth/login">
              Already have an account? Login
            </Link>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
