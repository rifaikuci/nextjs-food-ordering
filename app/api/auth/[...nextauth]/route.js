import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import clientPromise from "@/util/mongo";

const handler = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
});

export { handler as GET, handler as POST };
