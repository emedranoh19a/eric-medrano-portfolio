"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Button from "../Button"
import { navbarItems } from "./Navbar"

function NavbarItem({ label, link }) {
    return <li className="text-white hover:font-bold transition-all">
        <Link href={link}>
            {label}
        </Link>
    </li>
}

export default function DesktopNavigation() {
    const router = useRouter()
    return <div className="hidden lg:flex gap-5 lg:gap-9.5 items-center ">
        <ul className="flex gap-5 lg:gap-6">
            {navbarItems.map((navbarItem, i) => <NavbarItem key={i} {...navbarItem} />)}
        </ul>
        <Button
            text="Schedule a call"
            color="black"
            variant="filled"
            className="py-5.75 px-11"
            onClick={() => router.push("#cta")}
        />
    </div>
}
