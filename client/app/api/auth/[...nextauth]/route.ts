import { authOptions } from "@/app/lib/authOptions";
import NextAuth from "next-auth";

const provider = NextAuth(authOptions);

export {provider as GET, provider as POST};