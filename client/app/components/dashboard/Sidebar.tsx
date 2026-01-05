"use client"
import sideBarMenu from "@/app/constants/sidebarMenu";


export default function SideBar(){
    return (
        <div className="w-50 bg-neutral-200 max-h-screen overflow-y-auto shadow-xl">
            <div className="flex flex-col justify-center items-center">
                {
                sideBarMenu.map((menu, index)=>(<button key={menu.name} onClick={()=>{
                }} className=" rounded py-2 px-4 text-slate-700 cursor-pointer hover:text-slate-900 my-5">
                    {menu.name}
                </button>))
            }
            </div>
        </div>
    )
}