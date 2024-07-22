import React from "react";
import Button from "../Common/Button";
//import {Link} from "react-router-dom";

export interface SidebarItemProps {
    label: string;
    className: string | "";
    textClassName: string | "";
}


export const SidebarItem = ({
                                label = "Label",
                                className,
                                textClassName,
                            }: SidebarItemProps): JSX.Element => {

    return (
        <a
            href={`/${label}`}
            className={`sidebar-item   ${className}`}
        >
            <div className="icon">
            </div>
            <div
                className={`text ${textClassName}`}>
                <Button children={label} />
            </div>
        </a>
    );
};

