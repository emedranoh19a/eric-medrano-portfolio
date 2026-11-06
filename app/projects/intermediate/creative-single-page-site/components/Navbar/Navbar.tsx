import Image from "next/image"
import Link from "next/link"
import { logo } from "../../assets/assetIndex"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

export const navbarItems = [
    { label: "About", link: "#about" },
    { label: "Service", link: "#services" },
    { label: "Projects", link: "#projects" }
]
export default function Navbar() {
    return <nav id="creative-single-page-navbar" className="sticky z-50 top-0 flex flex-row justify-between py-10 sm:py-14 items-center">

        <div className="absolute -z-10 bg-white/95 h-full w-screen left-1/2 translate-x-[-50vw]" />
        <Logo />
        <DesktopNavigation />
        {/* Mobile Navigation */}
        <MobileNavigation />
    </nav>
}




function Logo() {
    return <Link className="w-40.25 h-7.5 relative" href="#hero">
        <Image src={logo} fill className="object-contain opacity-3" alt="logo" />
    </Link>
}
