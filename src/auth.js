import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";
import { User } from "./lib/models";
import { connectToDb } from "./lib/utils";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

// console.log("JWT_SECRET:", process.env.JWT_SECRET);
// console.log("AUTH_SECRET:", process.env.AUTH_SECRET);

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await connectToDb();
        const user = await User.findOne({ username: credentials.username });

        if (!user) {
          throw new Error("User not found!"); // Custom error message for non-existent user
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Incorrect password!"); // Custom error message for incorrect password
        }

        return user; // Return the user if credentials are correct
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, token }) {
      console.log("Session callback called");
      console.log("Session:", session);
      console.log("Token:", token);

      await connectToDb();
      const user = await User.findById(token.sub);
      if (user) {
        session.user.id = token.sub;
        session.user.isAdmin = user.isAdmin || false;
      }
      console.log("Updated Session:", session);
      return session;
    },
    async jwt({ token, user }) {
      console.log("JWT callback called");
      if (user) {
        console.log(user);
        token.sub = user.id;
        token.email = user.email; // Ensure email is included
        token.name = user.username;
        token.isAdmin = user.isAdmin || false;
      }
      console.log("Updated Token:", token);
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
});
