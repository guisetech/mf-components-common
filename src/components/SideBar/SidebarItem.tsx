import React from "react";
import {Link} from "react-router-dom";

export interface SidebarItemProps {
    label: string;
    className: string | "";
    textClassName: string | "";
    activeIndex: boolean;
    handleClick: () => void;
    index: number;
}


export const SidebarItem = ({
                                label = "Label",
                                className,
                                textClassName,
                                activeIndex,
                                handleClick,
                                index
                            }: SidebarItemProps): JSX.Element => {

    return (
        <Link
            to={`/${label}`}
            className={`w-52 pl-4 py-2.5 rounded-lg justify-start items-center gap-3 inline-flex hover:cursor-pointer hover:bg-gradient-to-r from-yellow-300 to-orange-400 ${activeIndex ? "bg-gradient-to-r from-yellow-300 to-orange-400" : ""} ${className}`}
            onClick={handleClick}
        >
            <div className="w-5 h-5 relative">
            </div>
            <div
                className={`w-28 text-slate-500 text-sm font-medium  font-['PingFang SC'] leading-tight ${textClassName}`}>
                <button>{label}</button>
            </div>
        </Link>
    );
};

