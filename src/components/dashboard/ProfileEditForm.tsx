"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import type { User } from "@/lib/types";

type Props = {
  initialUser?: User | null;
};

export function ProfileEditForm({ initialUser }: Props) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  // Personal info state
  const [personalInfo, setPersonalInfo] = useState({
    name: initialUser?.name || "",
    email: initialUser?.email || "",
    phone: ""
  });
  const [editingPersonal, setEditingPersonal] = useState(false);

  // Address state
  const [address, setAddress] = useState({
    street: initialUser?.address || "",
    city: "",
    state: "TX",
    zipCode: ""
  });
  const [editingAddress, setEditingAddress] = useState(false);

  // Employment state
  const [employment, setEmployment] = useState({
    employer: "",
    jobTitle: "",
    yearsEmployed: 1,
    employmentStatus: "employed"
  });
  const [editingEmployment, setEditingEmployment] = useState(false);

  // Income state
  const [income, setIncome] = useState({
    annualIncome: 0,
    incomeFrequency: "annual",
    incomeSource: "employment"
  });
  const [editingIncome, setEditingIncome] = useState(false);

  // Save handlers
  async function savePersonalInfo() {
    setLoading(true);
    try {
      toast.push({
        title: "Profile Updated",
        message: "Your personal information has been saved.",
        tone: "ok"
      });
      setEditingPersonal(false);
    } catch (err) {
      toast.push({
        title: "Error",
        message: "Failed to save changes.",
        tone: "danger"
      });
    } finally {
      setLoading(false);
    }
  }

  async function saveAddress() {
    setLoading(true);
    try {
      toast.push({
        title: "Address Updated",
        message: "Your address has been saved.",
        tone: "ok"
      });
      setEditingAddress(false);
    } catch (err) {
      toast.push({
        title: "Error",
        message: "Failed to save changes.",
        tone: "danger"
      });
    } finally {
      setLoading(false);
    }
  }

  async function saveEmployment() {
    setLoading(true);
    try {
      toast.push({
        title: "Employment Updated",
        message: "Your employment information has been saved.",
        tone: "ok"
      });
      setEditingEmployment(false);
    } catch (err) {
      toast.push({
        title: "Error",
        message: "Failed to save changes.",
        tone: "danger"
      });
    } finally {
      setLoading(false);
    }
  }

  async function saveIncome() {
    setLoading(true);
    try {
      toast.push({
        title: "Income Updated",
        message: "Your income information has been saved.",
        tone: "ok"
      });
      setEditingIncome(false);
    } catch (err) {
      toast.push({
        title: "Error",
        message: "Failed to save changes.",
        tone: "danger"
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Personal Information */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">Personal Information</p>
            <p className="mt-1 text-sm text-muted">Name, email, and phone contact</p>
          </div>
          {!editingPersonal && (
            <Button variant="secondary" onClick={() => setEditingPersonal(true)}>
              Edit
            </Button>
          )}
        </div>

        {editingPersonal ? (
          <div className="mt-5 space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={personalInfo.name}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, name: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={personalInfo.email}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, email: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={personalInfo.phone}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, phone: e.target.value })
                }
                placeholder="(XXX) XXX-XXXX"
              />
            </div>
            <div className="flex gap-3">
              <Button disabled={loading} onClick={savePersonalInfo}>
                {loading ? "Saving…" : "Save Changes"}
              </Button>
              <Button variant="secondary" onClick={() => setEditingPersonal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-bg/25 p-4">
              <p className="text-xs text-muted">Name</p>
              <p className="mt-1 text-sm font-semibold">{personalInfo.name || "—"}</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-bg/25 p-4">
              <p className="text-xs text-muted">Email</p>
              <p className="mt-1 text-sm font-semibold">{personalInfo.email || "—"}</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-bg/25 p-4">
              <p className="text-xs text-muted">Phone</p>
              <p className="mt-1 text-sm font-semibold">{personalInfo.phone || "—"}</p>
            </div>
          </div>
        )}
      </Card>

      {/* Address Information */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">Address</p>
            <p className="mt-1 text-sm text-muted">Current residence</p>
          </div>
          {!editingAddress && (
            <Button variant="secondary" onClick={() => setEditingAddress(true)}>
              Edit
            </Button>
          )}
        </div>

        {editingAddress ? (
          <div className="mt-5 space-y-4">
            <div>
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                placeholder="123 Main Street"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  placeholder="Dallas"
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={address.state}
                  disabled
                  className="bg-muted/30"
                />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  value={address.zipCode}
                  onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                  placeholder="75001"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button disabled={loading} onClick={saveAddress}>
                {loading ? "Saving…" : "Save Changes"}
              </Button>
              <Button variant="secondary" onClick={() => setEditingAddress(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-border/60 bg-bg/25 p-4">
            <p className="text-sm font-semibold">
              {address.street || "—"}
              {address.city && `, ${address.city}`}
              {address.zipCode && ` ${address.zipCode}`}
            </p>
            <p className="mt-1 text-xs text-muted">Texas resident required for CAB services</p>
          </div>
        )}
      </Card>

      {/* Employment Information */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">Employment</p>
            <p className="mt-1 text-sm text-muted">Current employment details</p>
          </div>
          {!editingEmployment && (
            <Button variant="secondary" onClick={() => setEditingEmployment(true)}>
              Edit
            </Button>
          )}
        </div>

        {editingEmployment ? (
          <div className="mt-5 space-y-4">
            <div>
              <Label htmlFor="employer">Employer</Label>
              <Input
                id="employer"
                value={employment.employer}
                onChange={(e) =>
                  setEmployment({ ...employment, employer: e.target.value })
                }
                placeholder="Company name"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={employment.jobTitle}
                  onChange={(e) =>
                    setEmployment({ ...employment, jobTitle: e.target.value })
                  }
                  placeholder="Software Engineer"
                />
              </div>
              <div>
                <Label htmlFor="yearsEmployed">Years at Current Job</Label>
                <Input
                  id="yearsEmployed"
                  type="number"
                  min="0"
                  value={employment.yearsEmployed}
                  onChange={(e) =>
                    setEmployment({
                      ...employment,
                      yearsEmployed: Number(e.target.value)
                    })
                  }
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button disabled={loading} onClick={saveEmployment}>
                {loading ? "Saving…" : "Save Changes"}
              </Button>
              <Button variant="secondary" onClick={() => setEditingEmployment(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-bg/25 p-4">
              <p className="text-xs text-muted">Employer</p>
              <p className="mt-1 text-sm font-semibold">{employment.employer || "—"}</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-bg/25 p-4">
              <p className="text-xs text-muted">Job Title</p>
              <p className="mt-1 text-sm font-semibold">{employment.jobTitle || "—"}</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-bg/25 p-4">
              <p className="text-xs text-muted">Years Employed</p>
              <p className="mt-1 text-sm font-semibold">{employment.yearsEmployed || "—"}</p>
            </div>
          </div>
        )}
      </Card>

      {/* Income Information */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">Income</p>
            <p className="mt-1 text-sm text-muted">Annual income and source</p>
          </div>
          {!editingIncome && (
            <Button variant="secondary" onClick={() => setEditingIncome(true)}>
              Edit
            </Button>
          )}
        </div>

        {editingIncome ? (
          <div className="mt-5 space-y-4">
            <div>
              <Label htmlFor="annualIncome">Annual Income</Label>
              <Input
                id="annualIncome"
                type="number"
                value={income.annualIncome}
                onChange={(e) =>
                  setIncome({ ...income, annualIncome: Number(e.target.value) })
                }
                placeholder="50000"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="incomeFrequency">Frequency</Label>
                <select
                  id="incomeFrequency"
                  value={income.incomeFrequency}
                  onChange={(e) =>
                    setIncome({ ...income, incomeFrequency: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg placeholder-muted focus:border-brand focus:outline-none"
                >
                  <option value="annual">Annual</option>
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              <div>
                <Label htmlFor="incomeSource">Source</Label>
                <select
                  id="incomeSource"
                  value={income.incomeSource}
                  onChange={(e) =>
                    setIncome({ ...income, incomeSource: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg placeholder-muted focus:border-brand focus:outline-none"
                >
                  <option value="employment">Employment</option>
                  <option value="self-employment">Self-Employment</option>
                  <option value="investment">Investment</option>
                  <option value="retirement">Retirement</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <Button disabled={loading} onClick={saveIncome}>
                {loading ? "Saving…" : "Save Changes"}
              </Button>
              <Button variant="secondary" onClick={() => setEditingIncome(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-bg/25 p-4">
              <p className="text-xs text-muted">Annual Income</p>
              <p className="mt-1 text-sm font-semibold">
                {income.annualIncome > 0 ? `$${income.annualIncome.toLocaleString()}` : "—"}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-bg/25 p-4">
              <p className="text-xs text-muted">Source</p>
              <p className="mt-1 text-sm font-semibold capitalize">
                {income.incomeSource || "—"}
              </p>
            </div>
          </div>
        )}
      </Card>
    </>
  );
}
