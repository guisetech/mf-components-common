import React from "react";
//import {Link} from "react-router-dom";

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
        <a
            href={`/${label}`}
            className={`sidebar-item  ${activeIndex ? "bg-gradient-to-r from-yellow-300 to-orange-400" : ""} ${className}`}
        >
            <div className="icon">
            </div>
            <div
                className={`text ${textClassName}`}>
                <button onClick={() => handleClick}>{label}</button>
            </div>
        </a>
    );
};

