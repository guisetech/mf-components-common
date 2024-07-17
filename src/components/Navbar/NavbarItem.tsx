import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {NavbarProps} from "../../types/props";

const NavbarItem = ({activeIndex, handleClick}:NavbarProps) => {
    const item = [
        "About",
        "Features",
        "Pricing",
        "Gallery",
        "Team"
    ]

    return (
        <div className="justify-start items-center gap-10 flex ">
            {
                item.map((value, index) => {
                    return (
                        <Link key={index}
                              className={`text-white text-base font-normal border border-transparent hover:p-2 rounded-lg ${activeIndex === index ? "bg-gradient-to-r from-yellow-300 to-orange-400 p-2 text-black" : " "} hover:cursor-pointer hover:bg-gradient-to-r from-yellow-300 to-orange-400 hover:text-black font-['Roboto']`}
                              to={`/${value}`}><button onClick={() => handleClick(index)}>{value}</button></Link>
                    )
                })
            }
        </div>

    )
}
export default NavbarItem
