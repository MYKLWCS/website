import { getSessionUserId } from "@/lib/session";
import { db, getPrimaryVehicle } from "@/lib/mockDb";
import { VehicleCard } from "@/components/dashboard/VehicleCard";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { Badge } from "@/components/ui/Badge";
import { AddVehicleForm } from "@/components/dashboard/AddVehicleForm";

export default function Page() {
  const userId = getSessionUserId()!;
  const vehicle = getPrimaryVehicle(userId);
  const vehicles = db.vehicles.filter((v) => v.userId === userId);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Vehicles</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Your Vehicles</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Add and manage vehicles used for CAB title access estimates and verification.
        </p>
      </div>

      {vehicle ? (
        <>
          <VehicleCard vehicle={vehicle} />

          {/* Vehicle Photos */}
          <Card className="p-6">
            <h2 className="text-sm font-semibold tracking-tight">Vehicle Photos</h2>
            <p className="mt-1 text-sm text-muted">Required photos for your {vehicle.year} {vehicle.make} {vehicle.model}</p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="border-2 border-dashed border-border/40 rounded-lg p-6 text-center hover:border-brand/40 transition-colors">
                <span className="text-3xl block mb-2">📷</span>
                <p className="font-medium text-sm">Front view</p>
                <p className="mt-1 text-xs text-muted">Show entire front</p>
                <Badge variant="default" className="mt-3">✓ Submitted</Badge>
              </div>

              <div className="border-2 border-dashed border-border/40 rounded-lg p-6 text-center hover:border-brand/40 transition-colors">
                <span className="text-3xl block mb-2">📷</span>
                <p className="font-medium text-sm">Rear view</p>
                <p className="mt-1 text-xs text-muted">Show license plate</p>
                <Badge variant="default" className="mt-3">✓ Submitted</Badge>
              </div>

              <div className="border-2 border-dashed border-border/40 rounded-lg p-6 text-center hover:border-brand/40 transition-colors">
                <span className="text-3xl block mb-2">📷</span>
                <p className="font-medium text-sm">Side view (driver)</p>
                <p className="mt-1 text-xs text-muted">Right side profile</p>
                <Badge variant="warn" className="mt-3">Pending</Badge>
              </div>

              <div className="border-2 border-dashed border-border/40 rounded-lg p-6 text-center hover:border-brand/40 transition-colors">
                <span className="text-3xl block mb-2">🔢</span>
                <p className="font-medium text-sm">Odometer</p>
                <p className="mt-1 text-xs text-muted">Close-up of mileage</p>
                <Badge variant="warn" className="mt-3">Pending</Badge>
              </div>
            </div>

            <p className="mt-4 text-xs text-muted">
              💡 Need help? Use the <ButtonLink href="/dashboard/get-cash">Get Cash wizard</ButtonLink> for guided photo capture with positioning overlays.
            </p>
          </Card>

          {/* Vehicle Details */}
          <Card className="p-6">
            <h2 className="text-sm font-semibold tracking-tight">Vehicle Details</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-bg/25 rounded-lg border border-border/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Year</p>
                <p className="mt-2 text-lg font-semibold">{vehicle.year}</p>
              </div>
              <div className="p-4 bg-bg/25 rounded-lg border border-border/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Make & Model</p>
                <p className="mt-2 text-lg font-semibold">{vehicle.make} {vehicle.model}</p>
              </div>
              <div className="p-4 bg-bg/25 rounded-lg border border-border/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Mileage</p>
                <p className="mt-2 text-lg font-semibold">{vehicle.mileage.toLocaleString()} miles</p>
              </div>
              <div className="p-4 bg-bg/25 rounded-lg border border-border/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Condition</p>
                <p className="mt-2 text-lg font-semibold capitalize">{vehicle.condition}</p>
              </div>
              <div className="p-4 bg-bg/25 rounded-lg border border-border/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Title Status</p>
                <p className="mt-2 text-lg font-semibold capitalize">{vehicle.titleStatus}</p>
              </div>
              <div className="p-4 bg-bg/25 rounded-lg border border-border/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Primary Vehicle</p>
                <Badge variant="ok" className="mt-2">Yes</Badge>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button variant="secondary" size="sm">Edit Details</Button>
              <Button variant="secondary" size="sm">Replace Vehicle</Button>
            </div>
          </Card>
        </>
      ) : (
        <Notice tone="warn" title="No vehicle on file">
          Add a vehicle to get an estimate range.
        </Notice>
      )}

      <AddVehicleForm />

      {vehicles.length > 1 && (
        <Card className="p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold tracking-tight">Other Vehicles</p>
              <p className="mt-1 text-sm text-muted">Additional vehicles on your account</p>
            </div>
            <ButtonLink href="/dashboard/get-cash">Get Cash</ButtonLink>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {vehicles.filter((v) => v.id !== vehicle?.id).map((v) => (
              <div key={v.id} className="rounded-lg border border-border/40 bg-bg/25 p-4 hover:bg-bg/40 transition-colors">
                <p className="text-sm font-semibold tracking-tight">
                  {v.year} {v.make} {v.model}
                </p>
                <p className="mt-2 text-xs text-muted space-y-1">
                  <div>Mileage: {v.mileage.toLocaleString()} miles</div>
                  <div>Title: {v.titleStatus} · Condition: {v.condition}</div>
                </p>
                <Button variant="tertiary" size="sm" className="mt-3 w-full">
                  Manage
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
