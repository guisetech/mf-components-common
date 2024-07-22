import React from 'react'
import {SidebarItem} from "./SidebarItem";

const SideBar = () => {

    return (
        <div className="sidebar">
            {["Dashboard", "Orders", "Schedules", "Messages", "Inbox", "Analytics", "News", "Settings"].map((item, index) => {
                return <SidebarItem   label={item} className={"bg-white"} textClassName={""}
                                     />
            })}
        </div>

    )
}
export default SideBar


