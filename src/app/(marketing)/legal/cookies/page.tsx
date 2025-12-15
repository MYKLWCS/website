import { LegalPageShell } from "@/components/pages/LegalPageShell";

export default function Page() {
  return (
    <LegalPageShell
      title="Cookies (placeholder)"
      summary={<>High-level cookie disclosure for V1 scaffold.</>}
      body={
        <>
          <p>
            This site may use cookies for session management, security, and analytics. In production, implement a compliant consent mechanism if required.
          </p>
          <p>
            The customer portal uses a session cookie for demo authentication in this scaffold.
          </p>
        </>
      }
    />
  );
}

