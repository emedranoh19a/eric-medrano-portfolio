"use client"
import Image from "next/image";
import { useTheme } from "../hooks/ThemeProvider";
import { iconMoon, iconSun } from "../images/imageIndex";

export default function ThemeToggler() {
    const { isDark, toggleDark } = useTheme();
    return <button onClick={toggleDark} className="w-10 relative aspect-square inline-block cursor-pointer">
        {isDark ? <Image src={iconMoon} className="object-contain" fill alt="theme-toggler" /> :
            <Image src={iconSun} className="object-contain" fill alt="theme-toggler" />}
    </button>
}
