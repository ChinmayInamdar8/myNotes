"use client"
import sideBarMenu from "@/app/constants/sidebarMenu";


export default function SideBar(){
    return (
        <div className="w-40 max-h-screen bg-white overflow-y-auto shadow-2xl rounded my-2 border border-slate-400">
            <div className="flex flex-col justify-center items-center px-2">
                {
                sideBarMenu.map((menu, index)=>(<button key={menu.name} onClick={()=>{
                }} className=" rounded py-2 px-4 text-slate-700 cursor-pointer hover:text-slate-900 my-5 hover:bg-slate-100 w-full ">
                    {menu.name}
                </button>))
            }
            </div>
        </div>
    )
}