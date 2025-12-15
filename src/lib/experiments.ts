export type HeroVariant = "A" | "B" | "C" | "D" | "E";

export type Experiments = {
  hero: HeroVariant;
};

export const EXPERIMENTS_STORAGE_KEY = "dl_experiments_v1";

function pick<T>(arr: readonly T[], seed: number) {
  return arr[Math.abs(seed) % arr.length]!;
}

export function resolveHeroVariant(opts: { override?: string | null; seed?: number }): HeroVariant {
  const variants = ["A", "B", "C", "D", "E"] as const;
  const o = (opts.override || "").toUpperCase();
  if (variants.includes(o as any)) return o as HeroVariant;
  const seed = typeof opts.seed === "number" ? opts.seed : Date.now();
  return pick(variants, seed);
}

