import Link from "next/link";
import { CAB_MICROCOPY } from "@/lib/cab";

export function CabMicrocopy({ variant = "short" }: { variant?: "short" | "estimate" }) {
  const text = variant === "estimate" ? CAB_MICROCOPY.estimate : CAB_MICROCOPY.short;
  return (
    <p className="text-xs text-muted">
      {text}{" "}
      <Link className="underline decoration-border/70 underline-offset-4 hover:text-fg" href="/legal/cab-disclosures">
        Read CAB disclosures
      </Link>
      .
    </p>
  );
}

