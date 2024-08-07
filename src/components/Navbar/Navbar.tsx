import React from 'react'
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import RegisterButton from "./RegisterButton";
//import {NavbarProps} from "../../types/props";


const Navbar = () => {
    return (
        <div
            className="navbar-container">
            <Logo/>
            <div className="navbar-item-section">
                <NavbarItem/>
            </div>
            <div className="button-section">
                <RegisterButton value={"Log In"}  fontColor={"text-white"}/>
                <RegisterButton className={"registerButton"} value={"Register"}/>
            </div>
        </div>
    )
}
export default Navbar
