

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getToken() {
  const cookie = await cookies();
  
  const encryptedToken =
    cookie.get("__Secure-next-auth.session-token")?.value ??
    cookie.get("next-auth.session-token")?.value;

  if (!encryptedToken) return null;

  const decodedToken = await decode({
    token: encryptedToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  return decodedToken?.userToken ?? null;
}