"use client";

import { useEffect } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

export function TrackEvent({ name, props }: { name: AnalyticsEvent; props?: Record<string, unknown> }) {
  useEffect(() => {
    void track(name, props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

