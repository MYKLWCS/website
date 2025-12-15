"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Stepper } from "@/components/ui/Stepper";
import { WIZARD_STEPS, type WizardStepId } from "@/components/wizard/wizardSteps";
import { useWizardDraft } from "@/components/wizard/useWizardDraft";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Notice } from "@/components/ui/Notice";
import { formatUsd } from "@/lib/format";
import { CabMicrocopy } from "@/components/common/CabMicrocopy";
import { UploadGuidanceCard } from "@/components/wizard/UploadGuidance";
import { FeeBreakdown } from "@/components/dashboard/FeeBreakdown";
import { EsignPanel } from "@/components/wizard/EsignPanel";
import Link from "next/link";
import { track } from "@/lib/analytics";

// Field validation rules
interface FieldError {
  field: string;
  message: string;
}

function validateBanking(data: any): FieldError | null {
  const method = String(data.bankMethod || "link");
  if (method === "link") {
    if (String(data.bankLinkStatus || "") !== "connected") {
      return {
        field: "bankLinkStatus",
        message: "Connect your bank (placeholder) or choose manual entry to continue."
      };
    }
    return null;
  }

  if (method === "manual") {
    if (!String(data.routing || "").trim()) return { field: "routing", message: "Routing number is required" };
    if (!String(data.account || "").trim()) return { field: "account", message: "Account number is required" };
    return null;
  }

  return { field: "bankMethod", message: "Choose a payout method to continue" };
}

function validateGoalAmount(amount: number): FieldError | null {
  if (!amount || amount < 500) {
    return { field: "desiredAmount", message: "Requested amount must be at least $500" };
  }
  if (amount > 10000) {
    return { field: "desiredAmount", message: "Amount cannot exceed $10,000" };
  }
  return null;
}

function validateVehicle(data: any): FieldError | null {
  if (!data.year) return { field: "year", message: "Year is required" };
  const year = Number(data.year);
  if (year < 2000 || year > new Date().getFullYear()) {
    return { field: "year", message: `Year must be between 2000 and ${new Date().getFullYear()}` };
  }
  if (!data.make) return { field: "make", message: "Make is required" };
  if (!data.model) return { field: "model", message: "Model is required" };
  const mileage = Number(data.mileage || 0);
  if (mileage < 0 || mileage > 999999) {
    return { field: "mileage", message: "Mileage must be between 0 and 999,999" };
  }
  return null;
}

function validateIdentity(data: any): FieldError | null {
  if (!data.fullName?.trim()) return { field: "fullName", message: "Full name is required" };
  if (!data.dob) return { field: "dob", message: "Date of birth is required" };
  if (!data.address?.trim()) return { field: "address", message: "Address is required" };
  return null;
}

function validateIncome(data: any): FieldError | null {
  if (!data.employer?.trim()) return { field: "employer", message: "Employer is required" };
  if (!data.incomeRange?.trim()) return { field: "incomeRange", message: "Income range is required" };
  if (!data.payFrequency?.trim()) return { field: "payFrequency", message: "Pay frequency is required" };
  return null;
}

function nextStepId(id: WizardStepId) {
  const idx = WIZARD_STEPS.findIndex((s) => s.id === id);
  return WIZARD_STEPS[Math.min(WIZARD_STEPS.length - 1, idx + 1)]?.id || id;
}

function prevStepId(id: WizardStepId) {
  const idx = WIZARD_STEPS.findIndex((s) => s.id === id);
  return WIZARD_STEPS[Math.max(0, idx - 1)]?.id || id;
}

export function GetCashWizard() {
  const router = useRouter();
  const params = useSearchParams();
  const draft = useWizardDraft();
  const { ready, data, set: setDraft, clear } = draft;

  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [isCreatingApp, setIsCreatingApp] = useState(false);
  const [isUpdatingEstimate, setIsUpdatingEstimate] = useState(false);
  const [isSubmittingApp, setIsSubmittingApp] = useState(false);
  const [isSavingVehicle, setIsSavingVehicle] = useState(false);
  const [appError, setAppError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [lastSaveTime, setLastSaveTime] = useState<Date | null>(null);
  const [showSaveIndicator, setShowSaveIndicator] = useState(false);

  const urlStep = (params.get("step") as WizardStepId | null) || null;
  const paramsString = params.toString();
  const initial = (data.activeStep as WizardStepId | undefined) || urlStep || "goal_amount";
  const [active, setActive] = useState<WizardStepId>(initial);

  // Calculate estimate early so it's available to functions
  const estimate = useMemo(() => {
    const desired = Number(data.desiredAmount || 0);
    const mileage = Number(data.mileage || 0);
    const condition = String(data.condition || "good");
    const base = Math.min(3800, Math.max(600, 2200 - mileage * 0.004));
    const conditionAdj = condition === "excellent" ? 1.1 : condition === "fair" ? 0.85 : 1;
    const center = base * conditionAdj;
    const low = Math.max(300, Math.round(center * 0.55));
    const high = Math.max(low + 200, Math.round(center * 1.05));
    return {
      low: desired > 0 ? Math.min(low, desired) : low,
      high: Math.max(high, desired > 0 ? desired : high)
    };
  }, [data.desiredAmount, data.mileage, data.condition]);

  // Calculate progress percentage
  const currentStepIndex = WIZARD_STEPS.findIndex((s) => s.id === active);
  const totalSteps = WIZARD_STEPS.length;
  const progressPercent = ((currentStepIndex + 1) / totalSteps) * 100;

  useEffect(() => {
    if (!ready) return;
    const step = (data.activeStep as WizardStepId | undefined) || urlStep || "goal_amount";
    setActive(step);
  }, [ready, data.activeStep, urlStep]);

  useEffect(() => {
    if (!ready) return;
    if (applicationId) return;
    const saved = typeof (data as any).applicationId === "string" ? String((data as any).applicationId) : null;
    if (saved) setApplicationId(saved);
  }, [applicationId, data, ready]);

  useEffect(() => {
    setDraft({ activeStep: active }, { immediate: true });
    const sp = new URLSearchParams(paramsString);
    sp.set("step", active);
    router.replace(`/dashboard/get-cash?${sp.toString()}`);
    void track("wizard_step_view", { step: active, progress: Math.round(progressPercent) });
    setFieldErrors({});
    setAppError(null);
  }, [active, paramsString, router, setDraft, progressPercent]);

  // Auto-save feedback
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSaveIndicator(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showSaveIndicator]);

  const stepsForUi = useMemo(
    () => WIZARD_STEPS.map((s) => ({ id: s.id, title: s.title, subtitle: s.subtitle })),
    []
  );

  async function createOrUpdateApplication() {
    if (applicationId) return applicationId;

    const saved = typeof (data as any).applicationId === "string" ? String((data as any).applicationId) : null;
    if (saved) {
      setApplicationId(saved);
      return saved;
    }
    
    setIsCreatingApp(true);
    setAppError(null);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          requestedAmount: data.desiredAmount || 1500,
          estimateRange: estimate,
          vehicleId: typeof (data as any).vehicleId === "string" ? (data as any).vehicleId : undefined
        })
      });
      
      if (!res.ok) throw new Error("Failed to create application");
      const json = (await res.json()) as any;
      const appId = json.application?.id;
      if (!appId) throw new Error("No application ID returned");
      
      setApplicationId(appId);
      setDraft({ applicationId: appId }, { immediate: true });
      void track("application_created", { applicationId: appId });
      return appId;
    } catch (e) {
      console.error("Error creating application:", e);
      setAppError("We couldn’t start your application right now. Please try again.");
      void track("application_create_error", { error: String(e) });
      throw e;
    } finally {
      setIsCreatingApp(false);
    }
  }

  async function updateServerEstimate(appId: string) {
    setIsUpdatingEstimate(true);
    setAppError(null);
    try {
      const res = await fetch(`/api/applications/${encodeURIComponent(appId)}/estimate`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          year: data.year,
          make: data.make,
          model: data.model,
          mileage: data.mileage,
          condition: data.condition,
          desiredAmount: data.desiredAmount
        })
      });
      if (!res.ok) throw new Error("Failed to update estimate");
      const json = (await res.json()) as any;
      if (json?.estimateRange) setDraft({ applicationEstimateRange: json.estimateRange }, { immediate: true });
      void track("application_estimate_updated", { applicationId: appId });
    } catch (e) {
      console.error("Error updating estimate:", e);
      setAppError("We couldn’t refresh your estimate right now. You can still continue.");
      void track("application_estimate_error", { applicationId: appId, error: String(e) });
    } finally {
      setIsUpdatingEstimate(false);
    }
  }

  async function submitApplication(appId: string) {
    setIsSubmittingApp(true);
    setAppError(null);
    try {
      const res = await fetch(`/api/applications/${encodeURIComponent(appId)}/submit`, { method: "POST" });
      if (!res.ok) throw new Error("Failed to submit application");
      void track("application_submitted", { applicationId: appId });
      setDraft({ applicationSubmittedAt: new Date().toISOString() }, { immediate: true });
    } catch (e) {
      console.error("Error submitting application:", e);
      setAppError("We couldn’t submit your application right now. Please try again.");
      void track("application_submit_error", { applicationId: appId, error: String(e) });
      throw e;
    } finally {
      setIsSubmittingApp(false);
    }
  }

  async function createVehicleIfNeeded() {
    const existing = typeof (data as any).vehicleId === "string" ? String((data as any).vehicleId) : null;
    if (existing) return existing;

    setIsSavingVehicle(true);
    setAppError(null);
    try {
      const res = await fetch("/api/vehicles", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          vin: data.vin,
          plate: data.plate,
          year: data.year,
          make: data.make,
          model: data.model,
          trim: data.trim,
          mileage: data.mileage,
          condition: data.condition,
          titleStatus: data.titleStatus
        })
      });
      if (!res.ok) throw new Error("Failed to create vehicle");
      const json = (await res.json()) as any;
      const vehicleId = json?.vehicle?.id ? String(json.vehicle.id) : null;
      if (!vehicleId) throw new Error("No vehicle ID returned");
      setDraft({ vehicleId }, { immediate: true });
      return vehicleId;
    } catch (e) {
      console.error("Error creating vehicle:", e);
      setAppError("We couldn’t save your vehicle details right now. You can still continue.");
      return null;
    } finally {
      setIsSavingVehicle(false);
    }
  }

  function handleFieldChange(field: string, value: any) {
    setDraft({ [field]: value });
    setShowSaveIndicator(true);
    setLastSaveTime(new Date());
    // Clear error for this field when user corrects it
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function validateAndGoNext() {
    // Validate based on current step
    let error: FieldError | null = null;
    
    switch (active) {
      case "goal_amount":
        error = validateGoalAmount(Number(data.desiredAmount || 0));
        break;
      case "vehicle_quick":
        error = validateVehicle(data);
        break;
      case "identity":
        error = validateIdentity(data);
        break;
      case "income":
        error = validateIncome(data);
        break;
      case "banking":
        error = validateBanking(data);
        break;
    }

    if (error) {
      setFieldErrors((prev) => ({ ...prev, [error!.field]: error!.message }));
      void track("wizard_step_view", { step: active, error: error.field });
      return;
    }

    if (active === "vehicle_quick") {
      await createVehicleIfNeeded();
    }

    void track("wizard_step_complete", { step: active });
    setActive(nextStepId(active));
  }

  // Alias for backwards compatibility with existing button handlers
  const goNext = validateAndGoNext;

  function goBack() {
    setActive(prevStepId(active));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Get Cash</p>
        <h1 className="text-3xl font-semibold tracking-tight">CAB title access wizard</h1>
        <p className="max-w-prose text-sm text-muted">
          A premium, disclosure-first onboarding flow with autosave and resume (V1 scaffold).
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="rounded-2xl border border-border/60 bg-bg/25 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Progress</p>
            <p className="mt-1 text-sm font-medium text-fg">
              Step {currentStepIndex + 1} of {totalSteps}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {lastSaveTime && (
              <div className={`flex items-center gap-1 text-xs transition ${showSaveIndicator ? "opacity-100" : "opacity-50"}`}>
                <span className="text-muted">✓ Saved</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border/40">
          <div
            className="h-full bg-brand transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <Notice tone="warn" title="Demo environment">
        Do not enter sensitive personal information (SSN, bank account numbers, real ID numbers). This wizard is a UI scaffold for an informational LMS experience.
      </Notice>

      <Stepper steps={stepsForUi} activeId={active} />

      <Notice tone="cab" title="CAB transparency">
        Dollar Loans is a Texas Credit Access Business (CAB) that facilitates access to credit. Estimates are ranges
        only and do not guarantee approval.{" "}
        <Link className="underline underline-offset-4 hover:text-fg" href="/cab-model-explained">
          Learn the CAB model
        </Link>
        .
      </Notice>

      {appError ? (
        <Notice tone="warn" title="Action needed">
          {appError}
        </Notice>
      ) : null}

      {active === "goal_amount" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Goal & amount</p>
          <p className="mt-1 text-sm text-muted">Tell us what you’re aiming for. This helps frame your estimate range.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="desiredAmount">Desired amount</Label>
              <Input
                id="desiredAmount"
                inputMode="numeric"
                value={String(data.desiredAmount ?? 1200)}
                onChange={(e) => handleFieldChange("desiredAmount", Number(e.target.value || 0))}
                className={fieldErrors.desiredAmount ? "border-red-500" : ""}
              />
              {fieldErrors.desiredAmount && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.desiredAmount}</p>
              )}
              <p className="mt-2 text-xs text-muted">Range: $500 - $10,000</p>
            </div>
            <div>
              <Label htmlFor="urgency">Urgency (optional)</Label>
              <Input
                id="urgency"
                value={String(data.urgency ?? "Today")}
                onChange={(e) => handleFieldChange("urgency", e.target.value)}
                placeholder="Today / This week / Flexible"
              />
              <p className="mt-2 text-xs text-muted">Used for support routing in production.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={goNext}>Continue</Button>
            <Button variant="secondary" onClick={() => router.push("/dashboard")}>
              Save & exit
            </Button>
          </div>
          <div className="mt-4">
            <CabMicrocopy variant="estimate" />
          </div>
        </Card>
      ) : null}

      {active === "vehicle_quick" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Vehicle quick details</p>
          <p className="mt-1 text-sm text-muted">Basics for an instant estimate range.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="vin">VIN or plate (optional)</Label>
              <Input id="vin" value={String(data.vin ?? "")} onChange={(e) => handleFieldChange("vin", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="year">Year</Label>
              <Input 
                id="year" 
                value={String(data.year ?? "2016")} 
                onChange={(e) => handleFieldChange("year", e.target.value)}
                className={fieldErrors.year ? "border-red-500" : ""}
              />
              {fieldErrors.year && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.year}</p>
              )}
            </div>
            <div>
              <Label htmlFor="make">Make</Label>
              <Input 
                id="make" 
                value={String(data.make ?? "Toyota")} 
                onChange={(e) => handleFieldChange("make", e.target.value)}
                className={fieldErrors.make ? "border-red-500" : ""}
              />
              {fieldErrors.make && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.make}</p>
              )}
            </div>
            <div>
              <Label htmlFor="model">Model</Label>
              <Input 
                id="model" 
                value={String(data.model ?? "Camry")} 
                onChange={(e) => handleFieldChange("model", e.target.value)}
                className={fieldErrors.model ? "border-red-500" : ""}
              />
              {fieldErrors.model && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.model}</p>
              )}
            </div>
            <div>
              <Label htmlFor="mileage">Mileage</Label>
              <Input
                id="mileage"
                inputMode="numeric"
                value={String(data.mileage ?? 108000)}
                onChange={(e) => handleFieldChange("mileage", Number(e.target.value || 0))}
                className={fieldErrors.mileage ? "border-red-500" : ""}
              />
              {fieldErrors.mileage && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.mileage}</p>
              )}
            </div>
            <div>
              <Label>Condition</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {(["excellent", "good", "fair"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    className={
                      "rounded-xl border px-3 py-2 text-sm transition " +
                      (String(data.condition || "good") === v
                        ? "border-brand/50 bg-brand/10 text-fg"
                        : "border-border/60 bg-panel/40 text-muted hover:bg-panel/60")
                    }
                    onClick={() => handleFieldChange("condition", v)}
                  >
                    {v[0].toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>
            <Button disabled={isSavingVehicle} onClick={goNext}>
              {isSavingVehicle ? "Saving vehicle…" : "See estimate"}
            </Button>
          </div>
        </Card>
      ) : null}

      {active === "instant_estimate" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Instant estimate range</p>
          <p className="mt-1 text-sm text-muted">Range only — not a commitment to extend credit.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Notice tone="cab" title="Estimate (not guaranteed)">
              <p className="mt-1 text-base">
                {formatUsd(estimate.low)}–{formatUsd(estimate.high)}
              </p>
              <p className="mt-2 text-sm text-muted">
                Final terms depend on verification, vehicle eligibility, and CAB disclosures.
              </p>
            </Notice>
            <Notice tone="info" title="What affects this estimate">
              Vehicle year/mileage/condition, title status, verification results, and creditor policies.
            </Notice>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>
            <Button onClick={goNext}>Continue and secure your offer</Button>
          </div>
          <div className="mt-4">
            <CabMicrocopy variant="estimate" />
          </div>
        </Card>
      ) : null}

      {active === "vehicle_deep" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Vehicle deep profile</p>
          <p className="mt-1 text-sm text-muted">A few details that can affect eligibility and verification.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="trim">Trim (optional)</Label>
              <Input id="trim" value={String(data.trim ?? "")} onChange={(e) => setDraft({ trim: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="titleStatus">Title status</Label>
              <Input
                id="titleStatus"
                value={String(data.titleStatus ?? "clear")}
                onChange={(e) => setDraft({ titleStatus: e.target.value })}
                placeholder="clear / lien / other"
              />
              <p className="mt-2 text-xs text-muted">Title rules and pathways vary by situation.</p>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="useOfVehicle">Confirm vehicle use (required)</Label>
              <Input
                id="useOfVehicle"
                value={String(data.useOfVehicle ?? "I can continue using my vehicle during the process.")}
                onChange={(e) => setDraft({ useOfVehicle: e.target.value })}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>
            <Button onClick={goNext}>Continue to photo upload</Button>
          </div>
        </Card>
      ) : null}

      {active === "vehicle_photos" ? (
        <div className="grid gap-6 md:grid-cols-2">
          <UploadGuidanceCard
            title="Front / back / sides"
            subtitle="Capture the full vehicle, centered and well-lit."
            frameLabel="Place vehicle centered in frame"
          />
          <UploadGuidanceCard
            title="Odometer + VIN plate"
            subtitle="Make the VIN and mileage clearly legible."
            frameLabel="Ensure VIN is readable"
          />
          <UploadGuidanceCard
            title="Title photo"
            subtitle="A clear photo of the title (if available)."
            frameLabel="Avoid glare; keep text sharp"
            className="md:col-span-2"
          />
          <Card className="p-6 md:col-span-2">
            <p className="text-sm font-semibold tracking-tight">Upload (V1 placeholder)</p>
            <p className="mt-1 text-sm text-muted">
              This scaffold does not store files. In production, connect S3-compatible storage and client-side photo QA.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["Front", "Back", "Left side", "Right side", "Odometer", "VIN plate", "Title"].map((label) => (
                <label key={label} className="cursor-pointer rounded-2xl border border-border/60 bg-bg/25 p-4 hover:bg-bg/35">
                  <p className="text-sm font-semibold tracking-tight">{label}</p>
                  <p className="mt-1 text-xs text-muted">Click to choose a file (placeholder)</p>
                  <input
                    type="file"
                    className="mt-3 w-full text-xs text-muted"
                    onChange={() => {
                      void track("upload_started", { label });
                      setDraft({ [`upload_${label}`]: "selected" }, { immediate: true });
                      void track("upload_completed", { label });
                    }}
                  />
                </label>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="secondary" onClick={goBack}>
                Back
              </Button>
              <Button onClick={goNext}>Continue</Button>
            </div>
          </Card>
        </div>
      ) : null}

      {active === "identity" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Borrower identity</p>
          <p className="mt-1 text-sm text-muted">We ask for identity information to facilitate verification.</p>
          <p className="mt-3 text-xs text-muted">Demo-only fields. Do not enter real ID numbers or sensitive identifiers.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="fullName">Full legal name</Label>
              <Input 
                id="fullName" 
                value={String(data.fullName ?? "")} 
                onChange={(e) => handleFieldChange("fullName", e.target.value)}
                className={fieldErrors.fullName ? "border-red-500" : ""}
              />
              {fieldErrors.fullName && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.fullName}</p>
              )}
            </div>
            <div>
              <Label htmlFor="dob">Date of birth</Label>
              <Input 
                id="dob" 
                value={String(data.dob ?? "")} 
                onChange={(e) => handleFieldChange("dob", e.target.value)}
                placeholder="MM/DD/YYYY"
                className={fieldErrors.dob ? "border-red-500" : ""}
              />
              {fieldErrors.dob && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.dob}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input 
                id="address" 
                value={String(data.address ?? "")} 
                onChange={(e) => handleFieldChange("address", e.target.value)}
                placeholder="Street, city, TX ZIP"
                className={fieldErrors.address ? "border-red-500" : ""}
              />
              {fieldErrors.address && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.address}</p>
              )}
              <p className="mt-2 text-xs text-muted">Texas residency is part of eligibility for this CAB flow.</p>
            </div>
            <div>
              <Label htmlFor="idType">ID type (placeholder)</Label>
              <Input id="idType" value={String(data.idType ?? "TX Driver License")} onChange={(e) => handleFieldChange("idType", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="idNumber">ID number (placeholder)</Label>
              <Input id="idNumber" value={String(data.idNumber ?? "")} onChange={(e) => handleFieldChange("idNumber", e.target.value)} />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>
            <Button onClick={goNext}>Continue</Button>
          </div>
        </Card>
      ) : null}

      {active === "income" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Income & employment</p>
          <p className="mt-1 text-sm text-muted">Used for verification and offer qualification (not guaranteed).</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="employer">Employer</Label>
              <Input
                id="employer"
                value={String(data.employer ?? "")}
                onChange={(e) => handleFieldChange("employer", e.target.value)}
                className={fieldErrors.employer ? "border-red-500" : ""}
              />
              {fieldErrors.employer && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.employer}</p>
              )}
            </div>
            <div>
              <Label htmlFor="payFrequency">Pay frequency</Label>
              <Input
                id="payFrequency"
                value={String(data.payFrequency ?? "Biweekly")}
                onChange={(e) => handleFieldChange("payFrequency", e.target.value)}
                className={fieldErrors.payFrequency ? "border-red-500" : ""}
              />
              {fieldErrors.payFrequency && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.payFrequency}</p>
              )}
            </div>
            <div>
              <Label htmlFor="incomeRange">Income range (monthly)</Label>
              <Input
                id="incomeRange"
                value={String(data.incomeRange ?? "$2,000–$3,500")}
                onChange={(e) => handleFieldChange("incomeRange", e.target.value)}
                className={fieldErrors.incomeRange ? "border-red-500" : ""}
              />
              {fieldErrors.incomeRange && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.incomeRange}</p>
              )}
            </div>
            <div>
              <Label htmlFor="paystub">Upload paystub (optional)</Label>
              <Input
                id="paystub"
                type="file"
                onChange={() => {
                  void track("upload_started", { label: "paystub" });
                  setDraft({ upload_paystub: "selected" }, { immediate: true });
                  void track("upload_completed", { label: "paystub" });
                }}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>
            <Button onClick={goNext}>Continue</Button>
          </div>
        </Card>
      ) : null}

      {active === "banking" ? (
        <Card className="p-6">
          <p className="text-sm font-semibold tracking-tight">Banking</p>
          <p className="mt-1 text-sm text-muted">Choose how you’d like to receive funds (if approved).</p>
          <p className="mt-3 text-xs text-muted">Demo-only fields. Do not enter real bank account details.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <Label>Payout method</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {(["link", "manual"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    className={
                      "rounded-xl border px-3 py-2 text-sm transition " +
                      (String((data as any).bankMethod || "link") === v
                        ? "border-brand/50 bg-brand/10 text-fg"
                        : "border-border/60 bg-panel/40 text-muted hover:bg-panel/60")
                    }
                    onClick={() => handleFieldChange("bankMethod", v)}
                  >
                    {v === "link" ? "Secure bank link" : "Manual entry"}
                  </button>
                ))}
              </div>
              {fieldErrors.bankMethod && (
                <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.bankMethod}</p>
              )}
              <p className="mt-2 text-xs text-muted">In production, bank link reduces errors and speeds verification.</p>
            </div>

            {String((data as any).bankMethod || "link") === "link" ? (
              <div className="rounded-2xl border border-border/60 bg-bg/25 p-5">
                <p className="text-sm font-semibold tracking-tight">Connect bank (placeholder)</p>
                <p className="mt-1 text-xs text-muted">No bank credentials are collected in this demo.</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      handleFieldChange("bankLinkStatus", "connected");
                      void track("bank_link_connected");
                    }}
                  >
                    {String((data as any).bankLinkStatus || "") === "connected" ? "Connected" : "Connect bank"}
                  </Button>
                  <p className="text-xs text-muted">
                    Status:{" "}
                    <span className="font-medium text-fg">
                      {String((data as any).bankLinkStatus || "") === "connected" ? "Connected" : "Not connected"}
                    </span>
                  </p>
                </div>
                {fieldErrors.bankLinkStatus && (
                  <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.bankLinkStatus}</p>
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-border/60 bg-bg/25 p-5">
                <p className="text-sm font-semibold tracking-tight">Manual entry</p>
                <div className="mt-4 grid gap-3">
                  <div>
                    <Label htmlFor="routing">Routing number</Label>
                    <Input
                      id="routing"
                      value={String(data.routing ?? "")}
                      onChange={(e) => handleFieldChange("routing", e.target.value)}
                      className={fieldErrors.routing ? "border-red-500" : ""}
                    />
                    {fieldErrors.routing && (
                      <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.routing}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="account">Account number</Label>
                    <Input
                      id="account"
                      value={String(data.account ?? "")}
                      onChange={(e) => handleFieldChange("account", e.target.value)}
                      className={fieldErrors.account ? "border-red-500" : ""}
                    />
                    {fieldErrors.account && (
                      <p className="mt-2 text-xs text-red-500 font-medium">{fieldErrors.account}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>
            <Button onClick={goNext}>Continue</Button>
          </div>
        </Card>
      ) : null}

      {active === "cab_disclosures" ? <CabDisclosuresStep draft={draft} onBack={goBack} onNext={goNext} /> : null}

      {active === "offer" ? (
        <div className="grid gap-6 md:grid-cols-2">
          <OfferViewEvent />
          <FeeBreakdown
            items={[
              { label: "CAB access fee (example)", amount: 180 },
              { label: "Creditor charge(s) (example)", amount: 210 },
              { label: "Third-party costs (if applicable)", amount: 0 }
            ]}
            disclaimer="Example categories only. Review your actual disclosures and agreement documents before signing."
          />
          <Card className="p-6">
            <p className="text-sm font-semibold tracking-tight">Offer presentation (placeholder)</p>
              <p className="mt-1 text-sm text-muted">
                This is an illustrative offer view. Real offers depend on verification and creditor decisions.
              </p>
              <div className="mt-5 rounded-2xl border border-border/60 bg-bg/25 p-5">
                <p className="text-xs text-muted">Offer amount (example)</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">{formatUsd(Math.max(500, Number(data.desiredAmount || 1500)))}</p>
                <p className="mt-2 text-sm text-muted">Term scenario: 6 months (example)</p>
              </div>
            <div className="mt-4">
              <Notice tone="warn" title="Not a guarantee">
                Offers can change after document review. You will always see disclosures before signing.
              </Notice>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="secondary" onClick={goBack}>
                Back
              </Button>
              <Button
                disabled={isCreatingApp || isUpdatingEstimate}
                onClick={async () => {
                  try {
                    const appId = await createOrUpdateApplication();
                    await updateServerEstimate(appId);
                    void track("offer_accept");
                    goNext();
                  } catch (e) {
                    console.error("Failed to accept offer:", e);
                  }
                }}
              >
                {isCreatingApp
                  ? "Creating application…"
                  : isUpdatingEstimate
                    ? "Refreshing estimate…"
                    : "Accept and continue"}
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">
              “Accept” in this scaffold means “continue to review,” not a binding commitment.
            </p>
          </Card>
        </div>
      ) : null}

      {active === "esign" ? (
        <div className="space-y-6">
          <EsignPanel
            onSign={() => {
              (async () => {
                try {
                  void track("esign_start");
                  const appId = await createOrUpdateApplication();
                  await submitApplication(appId);
                  void track("esign_complete");
                  goNext();
                } catch (e) {
                  console.error("E-sign submit failed:", e);
                }
              })();
            }}
          />
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>
          </div>
        </div>
      ) : null}

      {active === "funding" ? (
        <Card className="p-6">
          <FundingViewEvent />
          <p className="text-sm font-semibold tracking-tight">Funding tracker</p>
          <p className="mt-1 text-sm text-muted">Status timeline (placeholder) — exact timing depends on verification and processing.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {applicationId ? (
              <Notice tone="info" title="Application">
                <p className="text-sm text-muted">
                  ID: <span className="font-medium text-fg">{applicationId}</span>
                </p>
                {typeof (data as any).applicationSubmittedAt === "string" ? (
                  <p className="mt-1 text-xs text-muted">Submitted: {String((data as any).applicationSubmittedAt)}</p>
                ) : null}
              </Notice>
            ) : null}
            <Notice tone="info" title="Status">
              Under review → Approved → Funded (example). You’ll see updates here.
            </Notice>
            <Notice tone="cab" title="CAB reminder">
              Dollar Loans facilitates access to credit; a third-party creditor may extend credit if approved.
            </Notice>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => router.push("/dashboard")}>Back to dashboard</Button>
            <Button
              variant="secondary"
              onClick={() => {
                clear();
                router.push("/dashboard/get-cash");
              }}
            >
              Start a new flow
            </Button>
          </div>
        </Card>
      ) : null}
    </div>
  );
}

function CabDisclosuresStep({
  draft,
  onBack,
  onNext
}: {
  draft: ReturnType<typeof useWizardDraft>;
  onBack: () => void;
  onNext: () => void;
}) {
  const [viewed, setViewed] = useState(false);
  const a1 = Boolean(draft.data.cabAckRole);
  const a2 = Boolean(draft.data.cabAckNonGuarantee);
  const a3 = Boolean(draft.data.cabAckFees);

  useEffect(() => {
    void track("cab_disclosure_view");
    setViewed(true);
  }, []);

  const canContinue = viewed && a1 && a2 && a3;

  return (
    <Card className="p-6">
      <p className="text-sm font-semibold tracking-tight">CAB disclosures & acknowledgements</p>
      <p className="mt-1 text-sm text-muted">
        These are scaffolding checkboxes. Final disclosure language should be reviewed by compliance counsel.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Notice tone="cab" title="Plain-language summary">
          Dollar Loans is a Texas Credit Access Business (CAB) that facilitates access to credit. If approved, a third-party
          creditor may extend credit. You will review disclosures and documents before signing any agreement.
        </Notice>
        <Notice tone="info" title="Read the full text">
          View:{" "}
          <Link className="underline underline-offset-4 hover:text-fg" href="/legal/cab-disclosures">
            CAB disclosures
          </Link>{" "}
          and{" "}
          <Link className="underline underline-offset-4 hover:text-fg" href="/legal/texas-disclosures">
            Texas disclosures
          </Link>
          .
        </Notice>
      </div>

      <div className="mt-5 space-y-3">
        {[
          {
            key: "cabAckRole",
            label:
              "I understand Dollar Loans is a Texas CAB and facilitates access to credit; a third-party creditor may extend credit if approved."
          },
          { key: "cabAckNonGuarantee", label: "I understand estimates are ranges only and do not guarantee approval or terms." },
          { key: "cabAckFees", label: "I understand fees/charges are disclosed by category and I will review them before signing." }
        ].map((x) => (
          <label key={x.key} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border/60 bg-bg/25 p-4">
            <input
              type="checkbox"
              className="mt-1"
              checked={Boolean((draft.data as any)[x.key])}
              onChange={(e) => draft.set({ [x.key]: e.target.checked } as any, { immediate: true })}
            />
            <span className="text-sm text-muted">{x.label}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button
          disabled={!canContinue}
          onClick={() => {
            void track("cab_disclosure_accept");
            onNext();
          }}
        >
          Continue
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted">Required to continue. This scaffold stores your choices locally and in a mock API.</p>
    </Card>
  );
}

function OfferViewEvent() {
  useEffect(() => {
    void track("offer_view");
  }, []);
  return null;
}

function FundingViewEvent() {
  useEffect(() => {
    void track("funding_status_view", { source: "wizard" });
  }, []);
  return null;
}
