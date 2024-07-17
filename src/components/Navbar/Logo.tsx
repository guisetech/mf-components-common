import React from 'react'

const Logo = () => {
    return (
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="justify-start items-center gap-1.5 inline-flex">
                <div className="w-[30px] h-[30px] relative">
                    <div className="w-[30px] h-[30px] left-0 top-0 absolute border-4 border-red-600"/>
                    <div className="w-[15px] h-[15px] left-0 top-0 absolute">
                        <div className="w-[30px] h-[30px] left-0 top-0 absolute border-4 border-teal-400"/>
                    </div>
                    <div className="w-[15px] h-[15px] left-[15px] top-[15px] absolute">
                        <div
                            className="w-[30px] h-[30px] left-[-15px] top-[-15px] absolute border-4 border-cyan-400"/>
                    </div>
                </div>
                <div className="self-stretch flex-col justify-end items-start gap-[7.38px] inline-flex">
                    <div
                        className="w-[40.74px] h-[8.88px] text-white text-xs font-bold font-['Roboto'] uppercase">This
                        is
                    </div>
                    <div
                        className="w-[77.70px] h-[13.20px] text-white text-lg font-black font-['Roboto'] uppercase">MY
                        LOGO
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Logo
