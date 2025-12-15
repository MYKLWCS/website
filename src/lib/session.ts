import { cookies } from "next/headers";

export const SESSION_COOKIE = "dl_session";

export function getSessionUserId() {
  const c = cookies().get(SESSION_COOKIE)?.value;
  if (!c) return null;
  // V1 stub: cookie value is userId
  return c;
}

