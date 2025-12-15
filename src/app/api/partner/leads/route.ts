import { NextResponse } from "next/server";
import { createLead, listLeads } from "@/lib/partnerMock";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as any;
  const lead = createLead({
    partnerId: typeof body.partnerId === "string" ? body.partnerId : undefined,
    utm: typeof body.utm === "object" && body.utm ? body.utm : undefined,
    name: typeof body.name === "string" ? body.name : undefined,
    email: typeof body.email === "string" ? body.email : undefined,
    phone: typeof body.phone === "string" ? body.phone : undefined,
    vehicle: typeof body.vehicle === "object" && body.vehicle ? body.vehicle : undefined
  });
  // Webhooks would fire here in production: lead.created
  return NextResponse.json({ ok: true, lead }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ ok: true, leads: listLeads() });
}

