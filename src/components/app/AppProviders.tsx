"use client";

import { ToastProvider } from "@/components/ui/Toast";
import type { ReactNode } from "react";
import { ExperimentProvider } from "@/components/experiments/ExperimentProvider";
import { AttributionCapture } from "@/components/common/AttributionCapture";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <ExperimentProvider>
        <AttributionCapture />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ExperimentProvider>
    </ToastProvider>
  );
}
