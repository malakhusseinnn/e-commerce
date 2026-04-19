import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    accessToken: string;
  }
  interface Session {
    user: {
      name: string;
      email: string;
    };
    expires: string | undefined;
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userToken: string;
    id: string;
  }
}
