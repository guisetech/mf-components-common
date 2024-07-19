import React from 'react'
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import Button from "./Button";
//import {NavbarProps} from "../../types/props";
export interface NavbarProps {
    activeIndex: Number | null;
    handleClick: (index: Number) => void;
}

const Navbar = ({activeIndex,handleClick}:NavbarProps) => {
    return (
        <div
            className="navbar-container">
            <Logo/>
            <div className="navbar-item-section">
                <NavbarItem activeIndex={activeIndex} handleClick={handleClick}/>
            </div>
            <div className="button-section">
                <Button value={"Log In"} className={"border-2 border-amber-500 text-white"} fontColor={"text-white"}/>
                <Button className={"bg-gradient-to-r from-yellow-300 to-orange-400"} value={"Register"}/>
            </div>
        </div>
    )
}
export default Navbar
