import "./globals.css";
import type { Metadata } from "next";
import { AppProviders } from "@/components/app/AppProviders";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dollar Loans — Texas CAB Title Access",
  description:
    "Premium, transparent vehicle equity access facilitated by a Texas Credit Access Business (CAB). Fast estimate, clear costs, CAB-safe disclosures."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
