"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function Page() {
  return (
    <Section className="pt-10 md:pt-16">
      <Container className="max-w-xl">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Optional</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">Multi-factor verification</h1>
          <p className="mt-2 text-sm text-muted">
            Placeholder for SMS/TOTP. In production, this should be integrated with a compliant provider and risk rules.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="code">Verification code</Label>
              <Input id="code" placeholder="123456" inputMode="numeric" />
            </div>
            <Button className="w-full">Verify (placeholder)</Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

