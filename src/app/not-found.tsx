import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-2xl border border-border/70 bg-panel/70 p-8 shadow-sm">
        <p className="text-sm text-muted">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-2 max-w-prose text-muted">
          If you were looking for the Get Cash flow, head to the dashboard after logging in.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">Go to Home</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

