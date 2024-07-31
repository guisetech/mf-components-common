import React, {CSSProperties} from 'react'
import "../../styles/sidebar.css"
import Button from "../Common/Button";

interface props {
    className?: string,
    value: string,
    font?: string,
    fontColor?: string
    style?: CSSProperties
}

const RegisterButton = ({className,style, value, fontColor="text-gray-900",  font = 'font-[\'Roboto\']'}: props): JSX.Element => {
    return (
        <div
            className={`${className}`} style={style}>
            <div className={`${fontColor}  ${font}`}>
                <Button children={value}/>
            </div>
        </div>
    )
}
export default RegisterButton
