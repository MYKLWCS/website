import { NextResponse } from "next/server";
import { addVehicle, listVehicles } from "@/lib/mockDb";
import { getSessionUserId } from "@/lib/session";

export async function GET() {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ ok: true, vehicles: listVehicles(userId) });
}

export async function POST(req: Request) {
  const userId = getSessionUserId();
  if (!userId) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  const body = (await req.json().catch(() => ({}))) as any;
  const vehicle = addVehicle(userId, {
    vin: typeof body.vin === "string" ? body.vin : undefined,
    plate: typeof body.plate === "string" ? body.plate : undefined,
    year: Number(body.year || 2016),
    make: String(body.make || ""),
    model: String(body.model || ""),
    trim: typeof body.trim === "string" ? body.trim : undefined,
    mileage: Number(body.mileage || 0),
    condition: body.condition,
    titleStatus: body.titleStatus
  });
  return NextResponse.json({ ok: true, vehicle }, { status: 201 });
}

