import React from "react";

export default function MainPageMarginRapper({children}:React.PropsWithChildren){
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-275">
            {children}
        </div>
        </div>
    )
}