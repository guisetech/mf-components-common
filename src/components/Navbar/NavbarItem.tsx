import React from 'react'
//import {Link} from 'react-router-dom'
import Button from "../Common/Button";
import '../../styles/sidebar.css'

const NavbarItem = () => {
    const item = [
        "About",
        "Features",
        "Pricing",
        "Gallery",
        "Team"
    ]

    // const activeStyle = {
    //     backgroundImage: 'linear-gradient(to right, #fde68a, #fb923c)',
    //     padding: '8px',
    //     color: 'black'
    // };
    //
    // const defaultStyle = {};

    return (
        <div className="navbarItem ">
            {
                item.map((value, index) => {
                    return (
                        <a key={index}
                           // style={activeIndex === index ? activeStyle : defaultStyle}
                              href={`/${value}`}><Button children={value}/></a>
                    )
                })
            }
        </div>

    )
}
export default NavbarItem
