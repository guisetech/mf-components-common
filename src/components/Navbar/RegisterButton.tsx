import React from 'react'
import "../../styles/sidebar.css"
import Button from "../Common/Button";

interface props {
    className?: string,
    value: string,
    font?: string,
    fontColor?: string
}

const RegisterButton = ({className, value, fontColor="text-gray-900",  font = 'font-[\'Roboto\']'}: props): JSX.Element => {
    return (
        <div
            className={`${className}`}>
            <div className={`text ${fontColor}  ${font}`}>
                <Button children={value}/>
            </div>
        </div>
    )
}
export default RegisterButton
