"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Toast = { id: string; title: string; message?: string; tone?: "info" | "ok" | "warn" | "danger" };

type ToastContextValue = {
  push: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

function toneClasses(tone: Toast["tone"]) {
  switch (tone) {
    case "ok":
      return "border-ok/40 bg-ok/10";
    case "warn":
      return "border-warn/40 bg-warn/10";
    case "danger":
      return "border-danger/40 bg-danger/10";
    default:
      return "border-border/70 bg-panel/70";
  }
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((toast: Omit<Toast, "id">) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const t: Toast = { id, tone: "info", ...toast };
    setToasts((prev) => [...prev, t]);
    window.setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 4200);
  }, []);

  const value = useMemo(() => ({ push }), [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex w-[360px] max-w-[calc(100vw-2.5rem)] flex-col gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "pointer-events-auto animate-fade-up rounded-2xl border p-4 shadow-glow backdrop-blur",
              toneClasses(t.tone)
            )}
          >
            <p className="text-sm font-semibold tracking-tight">{t.title}</p>
            {t.message ? <p className="mt-1 text-sm text-muted">{t.message}</p> : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
