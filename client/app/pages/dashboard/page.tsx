'use client'
import DashBoardLayout from "@/app/components/dashboard/DashboardLayout";
import { useSession } from "next-auth/react"
import { Suspense } from "react";


export default function DashBoard (){
    const session = useSession();
    console.log(session)
    return (
        <DashBoardLayout>
            <div>
                Hello there
            </div>
        </DashBoardLayout>
    )
}