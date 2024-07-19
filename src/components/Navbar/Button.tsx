import React from 'react'
import "../../styles/sidebar.css"

interface props {
    className?: string,
    value: string,
    font?: string,
    fontColor?: string
}

const Button = ({className, value, fontColor="text-gray-900",  font = 'font-[\'Roboto\']'}: props): JSX.Element => {
    return (
        <div
            className={`button ${className}`}>
            <div className={`text ${fontColor}  ${font}`}>
                <button>{value}</button>
            </div>
        </div>
    )
}
export default Button
