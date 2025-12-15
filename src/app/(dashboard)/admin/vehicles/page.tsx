"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { useState } from "react";

export default function Page() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const vehicles = [
    {
      id: "VEH-001",
      applicant: "Sarah Johnson",
      applicationId: "APP-001",
      year: 2019,
      make: "Honda",
      model: "Civic",
      vin: "1HGBH41JXMN109186",
      estimatedValue: "$12,500",
      ltvRatio: "20%",
      photos: ["Front", "Rear", "Driver Side", "VIN Plate"],
      status: "approved",
      reviewedBy: "James Rodriguez",
      notes: "Vehicle in excellent condition"
    },
    {
      id: "VEH-002",
      applicant: "Michael Chen",
      applicationId: "APP-002",
      year: 2020,
      make: "Toyota",
      model: "Corolla",
      vin: "2T1BURHE0KC123456",
      estimatedValue: "$15,800",
      ltvRatio: "20%",
      photos: ["Front", "Rear"],
      status: "pending",
      reviewedBy: null,
      notes: "Awaiting additional photos"
    },
    {
      id: "VEH-003",
      applicant: "Jennifer Lee",
      applicationId: "APP-003",
      year: 2018,
      make: "Nissan",
      model: "Altima",
      vin: "1N4AL3AP4JC123789",
      estimatedValue: "$11,200",
      ltvRatio: "16%",
      photos: ["Front", "Rear", "Driver Side", "Passenger Side"],
      status: "approved",
      reviewedBy: "Maria Garcia",
      notes: "Minor cosmetic wear, mechanically sound"
    },
    {
      id: "VEH-004",
      applicant: "David Martinez",
      applicationId: "APP-004",
      year: 2021,
      make: "Ford",
      model: "F-150",
      vin: "1FTFW1E50MFA12345",
      estimatedValue: "$28,500",
      ltvRatio: "14%",
      photos: ["Front", "Rear", "Driver Side", "Passenger Side", "Bed", "Interior"],
      status: "approved",
      reviewedBy: "James Rodriguez",
      notes: "Excellent condition, low mileage"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "approved":
        return "ok" as const;
      case "pending":
        return "warn" as const;
      case "rejected":
        return "error" as const;
      default:
        return "default" as const;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Vehicle Review</h1>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Review vehicle photos, verify VINs, and confirm eligibility for title loans.
        </p>
      </div>

      <Notice tone="info" title="Vehicle Verification">
        All vehicles must have clear photos showing VIN, condition, and mileage. Use NADA or KBB for value verification.
      </Notice>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Pending Review</p>
          <p className="mt-2 text-2xl font-semibold text-brand2">1</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Approved Today</p>
          <p className="mt-2 text-2xl font-semibold text-ok">3</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Avg Vehicle Value</p>
          <p className="mt-2 text-2xl font-semibold">$17K</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-medium text-muted">Avg LTV</p>
          <p className="mt-2 text-2xl font-semibold">17.5%</p>
        </Card>
      </div>

      {/* Vehicle Review Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-lg">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </p>
                <p className="text-xs text-muted mt-1">{vehicle.applicant} • {vehicle.applicationId}</p>
              </div>
              <Badge variant={getStatusVariant(vehicle.status)}>
                {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
              </Badge>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs text-muted">VIN</p>
                <p className="font-mono text-xs mt-1">{vehicle.vin}</p>
              </div>
              <div>
                <p className="text-xs text-muted">Estimated Value</p>
                <p className="font-semibold mt-1 text-brand">{vehicle.estimatedValue}</p>
              </div>
              <div>
                <p className="text-xs text-muted">LTV Ratio</p>
                <p className="font-semibold mt-1">{vehicle.ltvRatio}</p>
              </div>
              <div>
                <p className="text-xs text-muted">Photos</p>
                <p className="font-semibold mt-1">{vehicle.photos.length} uploaded</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-panel rounded-lg border border-border">
              <p className="text-xs font-medium text-muted">Photos Available:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {vehicle.photos.map((photo, idx) => (
                  <span key={idx} className="text-xs bg-bg px-2 py-1 rounded border border-border">
                    {photo}
                  </span>
                ))}
              </div>
            </div>

            {vehicle.notes && (
              <div className="mt-3 p-3 bg-panel rounded-lg">
                <p className="text-xs text-muted">{vehicle.notes}</p>
              </div>
            )}

            {vehicle.reviewedBy && (
              <p className="mt-3 text-xs text-muted">
                Reviewed by {vehicle.reviewedBy}
              </p>
            )}

            <div className="mt-4 flex gap-2">
              {vehicle.status === "pending" && (
                <>
                  <Button size="sm">Approve</Button>
                  <Button variant="danger" size="sm">Reject</Button>
                  <Button variant="secondary" size="sm">Request More Photos</Button>
                </>
              )}
              {vehicle.status === "approved" && (
                <Button variant="tertiary" size="sm">View Details</Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Eligibility Guidelines */}
      <Card className="p-6 border-brand2/30 bg-brand2/5">
        <h2 className="text-sm font-semibold tracking-tight text-brand2">Vehicle Eligibility Guidelines</h2>
        <div className="mt-4 space-y-2 text-sm text-muted">
          <p>• <strong>Maximum Age:</strong> 15 years from current model year</p>
          <p>• <strong>Minimum Value:</strong> $3,000 NADA or KBB valuation</p>
          <p>• <strong>Required Photos:</strong> Front, rear, driver side, passenger side, VIN plate, odometer</p>
          <p>• <strong>Title Status:</strong> Must be clear title in applicant's name</p>
          <p>• <strong>LTV Range:</strong> 50-85% of vehicle value</p>
          <p>• <strong>Ineligible:</strong> Salvage titles, commercial vehicles over 1 ton, motorcycles</p>
        </div>
      </Card>
    </div>
  );
}

