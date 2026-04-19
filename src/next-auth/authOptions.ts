import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";
export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "myLongin",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            `https://ecommerce.routemisr.com/api/v1/auth/signin`,
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          const result = await res.json();
          console.log("Login result:", result);

          if (!res.ok) {
            throw new Error(result.message || "Login failed");
          }

          const jwt: { id: string } = jwtDecode(result.token);

          return {
            id: jwt.id,
            name: result.user.name,
            email: result.user.email,
            accessToken: result.token,
          };
        } catch (err) {
          console.error("Error logging in user:", err);
          throw new Error((err as Error).message || "Login failed");
        }
      },
    }),
  ],

  callbacks: {
    jwt(param) {
      if (param.user) {
        param.token.userToken = param.user.accessToken;
        param.token.id = param.user.id;
      }
      return param.token;
    },

    session({ token, session }) {
      session.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
