"use client"
import Image from "next/image";
import { useTheme } from "../hooks/ThemeProvider";
import { bgDesktopDark, bgDesktopLight, bgMobileDark, bgMobileLight } from "../images/imageIndex";

export default function BackgroundImage() {
    const { isDark } = useTheme();
    return <div className="absolute h-50 lg:h-75 w-full top-0 left-0 -z-10">
        <div className="w-full h-full relative">
            <Image src={isDark ? bgMobileDark : bgMobileLight} className="object-cover inline-block sm:hidden" fill alt="" />
            <Image src={isDark ? bgDesktopDark : bgDesktopLight} className="object-cover object-top hidden sm:block" fill alt="" />
        </div>
    </div>
}
