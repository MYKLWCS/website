import { Suspense } from "react";
import { LoginClient } from "@/components/auth/LoginClient";

export default function Page() {
  return (
    <Suspense>
      <LoginClient />
    </Suspense>
  );
}

