"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";

export function AffiliateLinkGenerator() {
  const [partnerId, setPartnerId] = useState("partner_demo");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function generate() {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/partner/links", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ partnerId })
      });
      const json = (await res.json()) as any;
      if (!res.ok) throw new Error(json?.error || "Failed");
      setResult(json.link.url);
    } catch {
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="p-6">
      <p className="text-sm font-semibold tracking-tight">Sample tracking link</p>
      <p className="mt-1 text-sm text-muted">Generate a tracked referral link (mock API). Use CAB-safe terminology in marketing.</p>
      <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]">
        <div>
          <Label htmlFor="partnerId">Partner ID</Label>
          <Input id="partnerId" value={partnerId} onChange={(e) => setPartnerId(e.target.value)} />
        </div>
        <div className="flex items-end">
          <Button disabled={!partnerId.trim() || loading} onClick={generate}>
            {loading ? "Generating…" : "Generate"}
          </Button>
        </div>
      </div>
      {result ? (
        <div className="mt-4">
          <Notice tone="info" title="Generated link (placeholder)">
            <p className="break-all">{result}</p>
          </Notice>
        </div>
      ) : null}
    </Card>
  );
}

