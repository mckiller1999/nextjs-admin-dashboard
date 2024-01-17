import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectDB } from "./lib/utils";
import { User } from "./lib/model";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectDB();
    //so sanh username tren database
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials username");
    //so sanh pass tren database
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("Wrong credentials password");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        //console.log("credentials:", credentials);
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
