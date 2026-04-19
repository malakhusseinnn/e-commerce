import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getToken() {
  const cookie = await cookies();
  const encryptedToken = cookie.get(`next-auth.session-token`)?.value;
  const decodedToken = await decode({
    token: encryptedToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  const token = decodedToken?.userToken;
  return token;
}
