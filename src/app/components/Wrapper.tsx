"use client"

import React from "react"
import clsx from "clsx";

interface WrapperProps {
    children: React.ReactNode,
    className?: string,
}

const Wrapper:React.FC<WrapperProps> = ({children, className}) => {
    return (
        <div className={clsx("w-full max-w-96 mx-auto px-6 sm:max-w-[720px] sm:px-9 md:max-w-[1024px] md:px-12 lg:px-24 lg:max-w-[1440px]", className)}>
            {children}
        </div>
    )
}

export default Wrapper;