import { Card } from "@/components/ui/Card";
import { Notice } from "@/components/ui/Notice";
import { Button } from "@/components/ui/Button";

export function EsignPanel({
  onSign,
  signing
}: {
  onSign: () => void;
  signing?: boolean;
}) {
  return (
    <Card className="p-6">
      <p className="text-sm font-semibold tracking-tight">Review + confirm</p>
      <p className="mt-1 text-sm text-muted">
        This is an e-sign placeholder for V1 (Documenso-style integration to be added). You’ll review disclosures and
        agreement documents before signing.
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Notice tone="cab" title="CAB disclosure checkpoint">
          Before you sign anything, you’ll receive CAB disclosures that describe fee categories and the role of the CAB.
        </Notice>
        <Notice tone="info" title="Identity + vehicle verification">
          Final terms depend on verification results. Estimates are not guarantees.
        </Notice>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button disabled={Boolean(signing)} onClick={onSign}>
          {signing ? "Submitting…" : "E-sign (placeholder)"}
        </Button>
        <Button variant="secondary" onClick={() => window.print()}>
          Print review
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted">By continuing, you confirm you reviewed disclosures and consents (placeholder).</p>
    </Card>
  );
}
