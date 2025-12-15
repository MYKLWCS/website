"use client";

import { ToastProvider } from "@/components/ui/Toast";
import type { ReactNode } from "react";
import { ExperimentProvider } from "@/components/experiments/ExperimentProvider";
import { AttributionCapture } from "@/components/common/AttributionCapture";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <ExperimentProvider>
        <AttributionCapture />
        {children}
      </ExperimentProvider>
    </ToastProvider>
  );
}
