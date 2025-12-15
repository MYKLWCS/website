"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export function AddVehicleForm() {
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState("2016");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState(0);
  const [vin, setVin] = useState("");
  const [plate, setPlate] = useState("");

  const canSubmit = useMemo(() => {
    return year.trim().length >= 4 && make.trim().length >= 2 && model.trim().length >= 1;
  }, [year, make, model]);

  async function submit() {
    setLoading(true);
    try {
      const res = await fetch("/api/vehicles", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ year: Number(year), make, model, mileage, vin, plate, condition: "good", titleStatus: "clear" })
      });
      if (!res.ok) throw new Error("Failed");
      toast.push({ title: "Vehicle added (stub)", message: "Vehicle is stored in an in-memory mock DB.", tone: "ok" });
      setMake("");
      setModel("");
      setMileage(0);
      setVin("");
      setPlate("");
      router.refresh();
    } catch {
      toast.push({ title: "Couldn’t add vehicle", message: "Please try again.", tone: "danger" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="p-6">
      <p className="text-sm font-semibold tracking-tight">Add a vehicle (placeholder)</p>
      <p className="mt-1 text-sm text-muted">In production, add VIN decoding, validation, and “set primary” controls.</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="year">Year</Label>
          <Input id="year" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="mileage">Mileage</Label>
          <Input id="mileage" inputMode="numeric" value={String(mileage)} onChange={(e) => setMileage(Number(e.target.value || 0))} />
        </div>
        <div>
          <Label htmlFor="make">Make</Label>
          <Input id="make" value={make} onChange={(e) => setMake(e.target.value)} placeholder="Toyota" />
        </div>
        <div>
          <Label htmlFor="model">Model</Label>
          <Input id="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Camry" />
        </div>
        <div>
          <Label htmlFor="vin">VIN (optional)</Label>
          <Input id="vin" value={vin} onChange={(e) => setVin(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="plate">Plate (optional)</Label>
          <Input id="plate" value={plate} onChange={(e) => setPlate(e.target.value)} />
        </div>
      </div>
      <div className="mt-5">
        <Button disabled={!canSubmit || loading} onClick={submit}>
          {loading ? "Adding…" : "Add vehicle"}
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted">Vehicle details are used for estimate ranges and verification in the Get Cash wizard.</p>
    </Card>
  );
}

