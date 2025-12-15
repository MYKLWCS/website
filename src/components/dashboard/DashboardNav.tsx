"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";

const items = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/get-cash", label: "Get Cash" },
  { href: "/dashboard/vehicles", label: "Vehicles" },
  { href: "/dashboard/applications", label: "Applications" },
  { href: "/dashboard/agreements", label: "Agreements" },
  { href: "/dashboard/payments", label: "Payments" },
  { href: "/dashboard/documents", label: "Documents" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/settings", label: "Settings" },
  { href: "/dashboard/support", label: "Support" },
  { href: "/dashboard/referrals", label: "Referrals" },
  { href: "/dashboard/partners", label: "Partners" }
] as const;

export function DashboardNav() {
  const current = usePathname();
  return (
    <nav className="flex flex-col gap-1">
      {items.map((it) => {
        const active = current === it.href;
        return (
          <Link
            key={it.href}
            href={it.href}
            className={cn(
              "rounded-xl px-3 py-2 text-sm transition",
              active ? "bg-brand2/12 text-fg border border-brand2/35" : "text-muted hover:bg-white/5 hover:text-fg"
            )}
          >
            {it.label}
          </Link>
        );
      })}
    </nav>
  );
}
