import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import db from "../../../utils/db";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          // Perform login logic
          // Find the user in the db
          db.connect();
          const user = await User.findOne({
            email: email,
          }).exec();
          db.disconnect();
          const validPassword = await bcrypt.compare(password, user.password);
          console.log("Authenticated User: " + user);
          if (!validPassword) {
            throw new Error("Invalid user's credentials!");
          }
          return user;
        } catch (error) {
          console.log("Error: " + error.message);
          return null;
        }
      },
    }),
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      console.log(session);
      console.log(token);
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
});
