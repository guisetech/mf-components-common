import React from 'react'
import '../../styles/sidebar.css'
import image from "../../assets/logo.png";

const Logo = () => {
    return (
        <div className="logo-container">
            <div className="logo-inner">
                <div className="logo-icon">
                    <img src={image} alt="logo"/>
                </div>
                <div className="logo-text-container">
                    <div
                        className="logo-text">
                        Bright Tax
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Logo
