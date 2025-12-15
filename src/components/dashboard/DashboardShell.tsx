import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import type { ReactNode } from "react";

export function DashboardShell({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <main className="py-10">
      <Container>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? <p className="max-w-prose text-sm text-muted">{subtitle}</p> : null}
        </div>
        <Card className="mt-7 p-6">{children}</Card>
      </Container>
    </main>
  );
}
