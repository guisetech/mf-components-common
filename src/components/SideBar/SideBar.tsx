import React from 'react'
import {SidebarItem} from "./SidebarItem";

export interface NavbarProps {
    activeIndex: Number | null;
    handleClick: (index: Number) => void;
}
const SideBar = ({activeIndex,handleClick}:NavbarProps) => {

    return (
        <div className="sidebar">
            {["Dashboard", "Orders", "Schedules", "Messages", "Inbox", "Analytics", "News", "Settings"].map((item, index) => {
                return <SidebarItem  key={index} label={item} className={"bg-white"} textClassName={""} index={index}
                                    activeIndex={activeIndex === index} handleClick={() => handleClick(index)}/>
            })}
        </div>

    )
}
export default SideBar


