"use client"
import clsx from "clsx"
import { Lexend_Deca, Space_Mono } from "next/font/google"
import { useState } from "react"
import CTA from "./components/layout/CTA"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import "./theme.css"
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["700"], variable: "--space-mono-next" })
const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: ["400"], variable: "--lexend-deca-next" })
export default function Layout({ children }) {
    //State: 
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const layoutClasses = clsx(
        `${spaceMono.variable} ${lexendDeca.variable} `,
        "antialiased relative z-0 flex flex-col",
        "h-fit w-screen min-h-screen",
        "px-5 md:px-[22px] lg:px-[165px]"
    )
    return (
        <div className={layoutClasses}>
            {sidebarOpen && <Overlay isOpen={sidebarOpen} />}
            <Navbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <div className="container mx-auto relative -z-10 w-full flex-1 ">
                {children}
            </div>
            <CTA />
            <Footer />
        </div >
    )
}

function Overlay({ isOpen }) {
    return <div className={`md:hidden bg-black/75 absolute inset-0 z-10 transition ${isOpen ? "opacity-100" : "opacity-0"}`} />
}
