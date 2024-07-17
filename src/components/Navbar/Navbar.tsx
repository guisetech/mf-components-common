import React from 'react'
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import Button from "./Button";
import {NavbarProps} from "../../types/props";

const Navbar = ({activeIndex,handleClick}:NavbarProps) => {
    return (
        <div
            className="w-[1440px] h-20 px-9 bg-gray-900 rounded-[10px] justify-start items-center gap-[50px] inline-flex">
            <Logo/>
            <div className="justify-start items-center gap-[50px] flex">
                <NavbarItem activeIndex={activeIndex} handleClick={handleClick}/>
            </div>
            <div className="grow shrink basis-0 h-[35px] justify-end items-center gap-2.5 flex">
                <Button value={"Log In"} className={"border-2 border-amber-500 text-white"} fontColor={"text-white"}/>
                <Button className={"bg-gradient-to-r from-yellow-300 to-orange-400"} value={"Register"}/>
            </div>
        </div>
    )
}
export default Navbar
