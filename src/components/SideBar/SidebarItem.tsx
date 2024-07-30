import React from "react";
import { Link } from "react-router-dom";
import Button from "../Common/Button";

export interface SidebarItemProps {
    label: string;
    className: string;
    textClassName: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const SidebarItem = ({
                         label,
                         className,
                         textClassName,
                         style,
                         onClick
                     }: SidebarItemProps): JSX.Element => {
    return (
        <Link to={`/${label}`} className={`sidebar-item ${className}`} style={style} onClick={onClick}>
            <div className="icon"></div>
            <div className={`text ${textClassName}`}>
                <Button>{label}</Button>
            </div>
        </Link>
    );
};

export default SidebarItem;