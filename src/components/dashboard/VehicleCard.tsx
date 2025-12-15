import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Vehicle } from "@/lib/types";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs text-muted">Primary vehicle</p>
          <p className="mt-1 text-lg font-semibold tracking-tight">
            {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim ? <span className="text-muted">· {vehicle.trim}</span> : null}
          </p>
          <p className="mt-1 text-sm text-muted">
            Mileage: {vehicle.mileage.toLocaleString()} · Title: {vehicle.titleStatus}
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant={vehicle.titleStatus === "clear" ? "ok" : "warn"}>{vehicle.titleStatus}</Badge>
          <Badge variant="default">{vehicle.condition}</Badge>
        </div>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {vehicle.photos.slice(0, 6).map((p) => (
          <div key={p.key} className="rounded-2xl border border-border/60 bg-bg/25 p-4">
            <p className="text-sm font-semibold tracking-tight">{p.label}</p>
            <p className="mt-1 text-xs text-muted">Status: {p.status}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">
        Photo guidance is shown in the Get Cash wizard. Upload quality affects verification.
      </p>
    </Card>
  );
}

