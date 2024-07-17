import React from 'react'

interface props {
    className?: string,
    value: string,
    font?: string,
    fontColor?: string
}

const Button = ({className, value, fontColor="text-gray-900",  font = 'font-[\'Roboto\']'}: props): JSX.Element => {
    return (
        <div
            className={`px-[26px] py-2 ${className} rounded-[5px] hover:transition-opacity justify-center items-center gap-2.5 flex`}>
            <div className={`text-center ${fontColor} text-base font-normal ${font}`}>
                <button>{value}</button>
            </div>
        </div>
    )
}
export default Button
