'use client'
import DashBoardLayout from "@/app/components/dashboard/DashboardLayout";
import Tiptap from "@/app/components/tiptap/Tiptap";
import { useSession } from "next-auth/react"
import { Suspense } from "react";


export default function DashBoard (){
    const session = useSession();
    console.log(session)
    return (
        <DashBoardLayout>
            <div className=" ">
                <Tiptap/>
            </div>
        </DashBoardLayout>
    )
}