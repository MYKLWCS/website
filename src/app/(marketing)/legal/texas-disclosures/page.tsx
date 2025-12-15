import { LegalPageShell } from "@/components/pages/LegalPageShell";

export default function Page() {
  return (
    <LegalPageShell
      title="Texas Disclosures (placeholder)"
      summary={<>State-specific disclosures belong here. This is a V1 placeholder page.</>}
      body={
        <>
          <p>
            This page should contain Texas-specific notices and disclosures required for the CAB model and related credit arrangements.
          </p>
          <p>
            Include: definitions, fee categories, consumer rights, complaint contact information, and any required regulatory wording.
          </p>
        </>
      }
    />
  );
}

