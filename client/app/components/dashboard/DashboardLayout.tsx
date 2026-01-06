'use client'
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import SideBar from "./Sidebar";
import Header from "./Header";

export default function DashBoardLayout({children}:{children:React.ReactNode}){
    const {data:session, status} = useSession();
    const [displaySideBar, setDisplaySideBar] = useState(false);
    return (
        <div className="flex min-h-screen bg-linear-to-b from-sky-50 via-sky-100 to-sky-50">
                <SideBar displayState={displaySideBar}/>
                <Header setDisplayState={setDisplaySideBar}/>
            <main className="flex-1 p-6 max-h-screen overflow-y-auto">
            <p>{session?.user.email}</p>
                {children}
            </main>
        </div>
    )
}