import React, {useEffect} from 'react'
import Button from "../Common/Button";
import '../../styles/sidebar.css'
import {Link} from "react-router-dom";
import {useActiveIndex} from "../../context/activeIndexContext";
import navbarContent from "./navbarContent";

const NavbarItem = () => {

    let {activeNavbarIndex, setActiveNavbarIndex,visibleNavbar } = useActiveIndex();


    const activeStyle = {
        backgroundImage: 'linear-gradient(to right, #fde68a, #fb923c)',
        padding: '8px',
        color: 'black',
        borderRadius: '10px'
    };


    const activeOnCLick = (index: number) => {
        setActiveNavbarIndex(index);
    }

    return (
        <div className="navbarItem ">
            {
                navbarContent.map((value, index) => {
                    return (
                        <Link key={index}
                              style={visibleNavbar && activeNavbarIndex === index ? activeStyle : {}}
                              to={`/${value.name}`}><Button children={value.name} onClick={() => activeOnCLick(index)}/></Link>
                    )
                })
            }
        </div>

    )
}
export default NavbarItem
