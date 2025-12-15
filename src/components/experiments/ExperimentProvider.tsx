"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { EXPERIMENTS_STORAGE_KEY, resolveHeroVariant, type Experiments } from "@/lib/experiments";

type Ctx = { experiments: Experiments };

const ExperimentContext = createContext<Ctx | null>(null);

function safeParse(value: string | null): Experiments | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as Experiments;
  } catch {
    return null;
  }
}

export function ExperimentProvider({ children }: { children: ReactNode }) {
  const [experiments, setExperiments] = useState<Experiments>({ hero: "A" });

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const override = sp.get("exp_hero");

    const prev = safeParse(window.localStorage.getItem(EXPERIMENTS_STORAGE_KEY));
    const hero = prev?.hero || resolveHeroVariant({ override, seed: Date.now() });
    const next: Experiments = { hero };

    setExperiments(next);
    window.localStorage.setItem(EXPERIMENTS_STORAGE_KEY, JSON.stringify(next));
  }, []);

  const value = useMemo(() => ({ experiments }), [experiments]);
  return <ExperimentContext.Provider value={value}>{children}</ExperimentContext.Provider>;
}

export function useExperiments() {
  const ctx = useContext(ExperimentContext);
  if (!ctx) throw new Error("useExperiments must be used within ExperimentProvider");
  return ctx.experiments;
}
