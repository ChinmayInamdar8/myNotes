"use client";
import sideBarMenu from "@/app/constants/sidebarMenu";

interface SideBar {
  displayState: boolean;
}

export default function SideBar({ displayState }: SideBar) {
  return (
    <div
      className={`w-25 sm:w-40 max-h-screen bg-white overflow-y-auto shadow-2xl rounded border border-slate-400 
            transition-all duration-400 ease-in-out
            ${
              displayState
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 -translate-x-4 pointer-events-none"
            }  sm:opacity-100
    sm:translate-x-0
    sm:pointer-events-auto`}
    >
      <div className="flex flex-col justify-center items-center px-2">
        {sideBarMenu.map((menu, index) => (
          <button
            key={menu.name}
            onClick={() => {}}
            className=" rounded py-2 px-4 text-slate-700 cursor-pointer hover:text-slate-900 my-2 sm:my-5 hover:bg-slate-100 w-full "
          >
            {menu.name}
          </button>
        ))}
      </div>
    </div>
  );
}
