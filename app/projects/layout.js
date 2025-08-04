"use client"

import { FloatingNav } from "../components/layout/FloatingNavbar/FloatingNavbar"
import ResizableNavbarDemo from "../components/layout/FloatingNavbar/ResizableNavbar/ResizableNavbarDemo"

const navItems = [
    {
        name: "Home",
        link: "/",
        icon: "a",
    },
    {
        name: "About",
        link: "/about",
        icon: "b",
    },
    {
        name: "Contact",
        link: "/contact",
        icon: "b",
    },
]
export default function ProyectsLayout({ children }) {
    //TODO: Tackle different layout z-index. Mobile navbar is missing...
    return <div className="w-full min-h-screen relative">
        <FloatingNav className="hidden ">
            <ResizableNavbarDemo />
        </FloatingNav>
        {children}
    </div>



}

