"use client"

import { signOut, useSession } from "next-auth/react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface Header{
    setDisplayState:React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({setDisplayState}:Header){
    const {data:session} = useSession();
    const router = useRouter();

    const handleLogOut = ()=>{
        signOut({redirect:false});
        Swal.fire("Signout Successful", "", "success").then(()=>{
            router.push('/');
        })
    }

    return (
        <div className="w-full h-12 bg-white shadow fixed top-0 left-0 flex justify-between items-center px-4">
            <div>
                <Image className="sm:hidden" src={"/Hamburger_icon.png"} alt="" width={20} height={20} onClick={()=>{
                    setDisplayState((state)=>!state);
                }}/>
            </div>
            <div className="flex justify-center items-center gap-6">
                <div className="justify-center items-center gap-3 hidden sm:flex">
                    <div className="w-8 h-8 bg-slate-200 rounded-full">
                        <img src="/person-icon.png" alt="" />
                    </div>
                <p>{session?.user.email}</p>
                </div>
                <button className="text-red-600 cursor-pointer border border-transparent hover:border-red-600 py-1 px-2 rounded hover:shadow transition hover:delay-100 hover:scale-3d text-sm sm:text-base" onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    )
}