"use client"
import { DotPattern } from "@/app/(home)/components/vendors/DotPattern";
import { cn } from "@/app/utils/utils";
import { Petrona, Shippori_Mincho } from "next/font/google";
import { ReactNode } from "react";
import { useLanguage } from "../hooks/LanguageProvider";
//English and Spanish
const petrona = Petrona({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--next-font-petrona"
})
const shippori = Shippori_Mincho({ weight: ["400"] })
type DesignSystemProps = {
    className?: string;
    children: ReactNode;
}
const DOT_SPACING = 15;
//typography: petrona
// typography: Yuji Syuku + Shippori Mincho 
export default function DesignSystem({ children, className }: DesignSystemProps) {
    const { language } = useLanguage();
    const baseStyles = cn(
        "relative z-0 min-h-screen",
        "px-4 sm:px-8 md:px-16",
        "text-3xl text-neutral-700",
        petrona.className,
        language === "ja" && shippori.className,
        className)
    return <main className={baseStyles}>
        <DotPattern width={DOT_SPACING} height={DOT_SPACING} className="opacity-50 mask-b-from-0% mask-b-to-90% fixed" />
        <div className="container mx-auto relative z-0 min-h-screen border-x-2 border-neutral-200 border-dashed">
            {/* <Scales className="-z-10 opacity-30" /> */}

            {children}

        </div>
    </main>
}
