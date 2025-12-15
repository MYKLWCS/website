"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { WizardStepId } from "@/components/wizard/wizardSteps";
import { track } from "@/lib/analytics";

type WizardDraftData = Record<string, unknown> & { activeStep?: WizardStepId };

const STORAGE_KEY = "dl_wizard_draft_v1";

function nowIso() {
  return new Date().toISOString();
}

function safeParse(value: string | null) {
  if (!value) return null;
  try {
    return JSON.parse(value) as { updatedAt: string; data: WizardDraftData };
  } catch {
    return null;
  }
}

export function useWizardDraft() {
  const [ready, setReady] = useState(false);
  const [updatedAt, setUpdatedAt] = useState(nowIso());
  const [data, setData] = useState<WizardDraftData>({});
  const saveTimer = useRef<number | null>(null);

  useEffect(() => {
    const local = safeParse(typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null);
    if (local?.data) {
      setData(local.data);
      setUpdatedAt(local.updatedAt || nowIso());
    }

    (async () => {
      try {
        const res = await fetch("/api/wizard/draft", { method: "GET" });
        if (!res.ok) return;
        const json = (await res.json()) as any;
        const server = json?.draft;
        if (server?.data && typeof server.data === "object") {
          setData((prev) => ({ ...prev, ...server.data }));
          setUpdatedAt(server.updatedAt || nowIso());
        }
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const persist = useCallback(
    async (nextData: WizardDraftData) => {
      const payload = { updatedAt: nowIso(), data: nextData };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setUpdatedAt(payload.updatedAt);
      await fetch("/api/wizard/draft", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data: nextData })
      }).catch(() => null);
    },
    []
  );

  const set = useCallback(
    (patch: Partial<WizardDraftData>, opts?: { immediate?: boolean; trackEvent?: { name: string; props?: any } }) => {
      setData((prev) => {
        const next = { ...prev, ...patch };
        if (opts?.trackEvent) void track(opts.trackEvent.name as any, opts.trackEvent.props);
        if (typeof window !== "undefined") {
          if (saveTimer.current) window.clearTimeout(saveTimer.current);
          saveTimer.current = window.setTimeout(() => void persist(next), opts?.immediate ? 0 : 450);
        }
        return next;
      });
    },
    [persist]
  );

  const clear = useCallback(() => {
    setData({});
    setUpdatedAt(nowIso());
    if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  return useMemo(() => ({ ready, updatedAt, data, set, clear }), [ready, updatedAt, data, set, clear]);
}

