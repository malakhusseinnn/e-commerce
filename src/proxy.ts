import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const protectedRoutes = ["/cart", "/wishlist", "/allorders", "/checkout"];
  const authRoutes = ["/login", "/register"];
  const myPath = request.nextUrl.pathname;
  const tokenObj = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  const userToken = tokenObj?.userToken;

  if (
    !userToken &&
    protectedRoutes.some((path) => {
      return myPath.startsWith(path);
    })
  ) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (
    userToken &&
    authRoutes.some((path) => {
      return myPath.startsWith(path);
    })
  ) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cart:path*",
    "/wishlist:path*",
    "/allorders:path*",
    "/checkout:path*",
    "/login",
    "/register",
  ],
};
