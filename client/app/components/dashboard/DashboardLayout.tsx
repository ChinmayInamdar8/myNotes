'use client'
import { useSession } from "next-auth/react";
import React from "react";
import SideBar from "./Sidebar";

export default function DashBoardLayout({children}:{children:React.ReactNode}){
    const {data:session, status} = useSession();
    return (
        <div className="flex min-h-screen">
                <SideBar/>
            <main className="flex-1 p-6 max-h-screen overflow-y-auto">
            <p>{session?.user.email}</p>
                {children}
            </main>
        </div>
    )
}