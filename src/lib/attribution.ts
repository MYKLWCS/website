export type Attribution = {
  partnerId?: string;
  utm?: Partial<{
    source: string;
    medium: string;
    campaign: string;
    term: string;
    content: string;
  }>;
  firstTouchAt?: string;
  lastTouchAt?: string;
};

export const ATTRIBUTION_STORAGE_KEY = "dl_attribution_v1";

function nowIso() {
  return new Date().toISOString();
}

export function readAttributionFromUrl(url: URL): Partial<Attribution> | null {
  const sp = url.searchParams;
  const partnerId = sp.get("partnerId") || sp.get("partner_id") || undefined;
  const utm = {
    source: sp.get("utm_source") || undefined,
    medium: sp.get("utm_medium") || undefined,
    campaign: sp.get("utm_campaign") || undefined,
    term: sp.get("utm_term") || undefined,
    content: sp.get("utm_content") || undefined
  };
  const hasUtm = Object.values(utm).some(Boolean);
  if (!partnerId && !hasUtm) return null;
  return { partnerId, utm };
}

export function mergeAttribution(prev: Attribution | null, next: Partial<Attribution>): Attribution {
  const now = nowIso();
  const merged: Attribution = {
    partnerId: next.partnerId ?? prev?.partnerId,
    utm: { ...(prev?.utm || {}), ...(next.utm || {}) },
    firstTouchAt: prev?.firstTouchAt || now,
    lastTouchAt: now
  };
  return merged;
}

