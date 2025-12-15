import { getSessionUserId } from "@/lib/session";
import { db, getPrimaryVehicle } from "@/lib/mockDb";
import { VehicleCard } from "@/components/dashboard/VehicleCard";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { AddVehicleForm } from "@/components/dashboard/AddVehicleForm";

export default function Page() {
  const userId = getSessionUserId()!;
  const vehicle = getPrimaryVehicle(userId);
  const vehicles = db.vehicles.filter((v) => v.userId === userId);

  return (
    <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Vehicles</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Your vehicles</h1>
          <p className="mt-2 max-w-prose text-sm text-muted">
            Add and manage vehicles used for CAB title access estimates and verification (V1 scaffold).
          </p>
        </div>

        {vehicle ? (
          <VehicleCard vehicle={vehicle} />
        ) : (
          <Notice tone="warn" title="No vehicle on file">
            Add a vehicle to get an estimate range.
          </Notice>
        )}

        <AddVehicleForm />

        <Card className="p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold tracking-tight">Vehicle list</p>
              <p className="mt-1 text-sm text-muted">V1 placeholder list with mock data.</p>
            </div>
            <ButtonLink href="/dashboard/get-cash">Get Cash</ButtonLink>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {vehicles.map((v) => (
              <div key={v.id} className="rounded-2xl border border-border/60 bg-bg/25 p-5">
                <p className="text-sm font-semibold tracking-tight">
                  {v.year} {v.make} {v.model}
                </p>
                <p className="mt-1 text-sm text-muted">Mileage: {v.mileage.toLocaleString()}</p>
                <p className="mt-1 text-xs text-muted">Title: {v.titleStatus} · Condition: {v.condition}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">In production, add VIN decoding + eligibility indicators + photo review status.</p>
        </Card>
    </div>
  );
}
