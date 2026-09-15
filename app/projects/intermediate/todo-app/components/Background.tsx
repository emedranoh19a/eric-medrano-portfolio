"use client"
import { cn } from "@/app/utils/utils";
import { Josefin_Sans } from "next/font/google";
import { useTheme } from "../hooks/ThemeProvider";
import BackgroundImage from "./BackgroundImage";

const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: ["400", "700"], display: "swap" })

export default function Background({ children }) {
    const { isDark } = useTheme();
    const backgroundCn = cn(
        isDark ? "bg-[#171823]" : "bg-[#FAFAFA]",
        "pt-12 lg:pt-[70px] px-6 pb-18 lg:pb-13",
        "flex flex-col gap-10 lg:gap-[49px] justify-between",
        "relative z-0 min-h-screen max-w-screen",
        "select-none transition-colors",
        josefinSans.className);

    return <div className={backgroundCn}>
        <BackgroundImage />
        {children}
    </div>
}
