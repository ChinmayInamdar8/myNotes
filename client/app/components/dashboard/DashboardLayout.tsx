'use client'
import { useSession } from "next-auth/react";
import React from "react";

export default function DashBoardLayout({children}:{children:React.ReactNode}){
    const {data:session, status} = useSession();
    return (
        <div>
            <p>{session?.user.email}</p>
            {children}
        </div>
    )
}