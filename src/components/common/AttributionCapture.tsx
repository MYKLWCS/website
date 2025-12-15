"use client";

import { useEffect } from "react";
import { ATTRIBUTION_STORAGE_KEY, mergeAttribution, readAttributionFromUrl, type Attribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";

function safeParse(value: string | null): Attribution | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as Attribution;
  } catch {
    return null;
  }
}

export function AttributionCapture() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const extracted = readAttributionFromUrl(url);
    if (!extracted) return;

    const prev = safeParse(window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY));
    const merged = mergeAttribution(prev, extracted);
    window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(merged));
    void track("prequal_start", { attribution: merged, source: "attribution_capture" });
  }, []);

  return null;
}
