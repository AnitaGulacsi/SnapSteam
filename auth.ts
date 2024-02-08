import { sql } from "@vercel/postgres";
import { User } from "./app/lib/utils/types";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import bcrypt from "bcrypt";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error(`Failed to fetch users:`, error);
    throw new Error(`Failed to fetch users`);
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials: {
        email: string;
        password: string;
      }): Promise<User | null> {
        const { email, password } = credentials;

        try {
          const user = await getUser(email);
          if (!user) return null;

          console.log(password);
          console.log(user.password);

          const passwordsMatch = await bcrypt.compare(password, user.password);
          // const passwordsMatch = true;
          if (passwordsMatch) return user;

          console.log("Invalid credentials");
          return null;
        } catch (error) {
          console.error("Error during authentication:", error);
          return null;
        }
      },
    }),
  ],
});
