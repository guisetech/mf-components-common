import React, {useContext} from 'react';
import SidebarItem from "./SidebarItem";
import {ActiveIndexContext} from "../../context/activeIndexContext";
import sideBarContent from "./sideBarContent";

const SideBar = () => {
    const context = useContext(ActiveIndexContext);

    if(!context) {
        return null;
    }

    let {activeSidebarIndex,setActiveSidebarIndex,visibleSidebar} = context;

    const activeStyle = {
        backgroundImage: 'linear-gradient(to right, #fde68a, #fb923c)',
        padding: '8px',
        color: 'black',
        borderRadius: '10px'
    };


    return (
        <div className="sidebar">
            {sideBarContent.map((item, index) => (
                <SidebarItem
                    key={index}
                    onClick={() => {
                        setActiveSidebarIndex(index);
                    }}
                    style={visibleSidebar && activeSidebarIndex === index ? activeStyle : {}}
                    label={item.name}
                    className={"bg-white"}
                    textClassName={""}
                />
            ))}
        </div>
    );
};

export default SideBar;