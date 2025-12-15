import { LegalPageShell } from "@/components/pages/LegalPageShell";

export default function Page() {
  return (
    <LegalPageShell
      title="Complaints (placeholder)"
      summary={<>Escalation and complaints pathway placeholder. Add real contact details and required language before launch.</>}
      body={
        <>
          <p>
            If you have a concern, contact support first with your name, email, and details. We will respond with next steps.
          </p>
          <p>
            This scaffold does not include real addresses or phone numbers. Add these prior to production launch.
          </p>
        </>
      }
    />
  );
}

