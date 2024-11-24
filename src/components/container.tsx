"use client"


import { useBloc } from "@blac/react"
import React, { useEffect } from "react"
import Header from "./header/header"
import Footer from "./footer/footer"

export interface IContainerProps{
    children?: React.JSX.Element | React.JSX.Element[] | any,
    inVisibleFooter?: boolean
}

export default function Container( props?: IContainerProps ){
    return (
        <main
                className="container mx-auto items-center bg-primary-color text-on-primary h-screen relative overflow-y-auto"
        >
            {/* Header */}
            <Header />
            <div> { props?.children }</div>
            <Footer />
        </main>
    )
}