import React from 'react'
//import {Link} from 'react-router-dom'
import {NavbarProps} from "../../types/props";

const NavbarItem = ({activeIndex, handleClick}:NavbarProps) => {
    const item = [
        "About",
        "Features",
        "Pricing",
        "Gallery",
        "Team"
    ]

    const activeStyle = {
        backgroundImage: 'linear-gradient(to right, #fde68a, #fb923c)',
        padding: '8px',
        color: 'black'
    };

    const defaultStyle = {};

    return (
        <div className="navbarItem ">
            {
                item.map((value, index) => {
                    return (
                        <a key={index}
                           style={activeIndex === index ? activeStyle : defaultStyle}
                              href={`/${value}`}><button onClick={() => handleClick(index)}>{value}</button></a>
                    )
                })
            }
        </div>

    )
}
export default NavbarItem
