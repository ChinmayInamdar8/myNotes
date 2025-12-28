import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import axios from "axios";
import Api from "../constants/api";

interface LoginResponse {
    id:string;
    email:string;
    message:string;
    token:string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id:"credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("THECREDENTIALSFROMOPTIONS", credentials);
        try {
          const response = await axios.post<LoginResponse>(Api.login, {
            email: credentials?.email,
            password: credentials?.password,
          });
          if(response.status!==200){
            return null;
          }

          return {
            id:response.data.id,
            email:response.data.email,
          }

        } catch (err) {
          console.log("there is an error while log in", err);
          return null;
        }
      },
    }),
  ],
  callbacks:{
    async jwt({token, user}) {
        if(user){
            token.id = user.id,
            token.email = user.email
        }
        return token;
    },
    async session({token, session}){
        if(session.user){
            session.user.email = token.email as string;
            session.user.id = token.id as string;
        }
        return session;
    }
  },
  session:{
    strategy:"jwt",
    maxAge:60*60 // 1 minute
  },
  pages:{
    signIn:'/pages/login',
    error:'/pages/login'
  },
  secret:process.env.AUTH_SECRET || ""
};


export {authOptions};