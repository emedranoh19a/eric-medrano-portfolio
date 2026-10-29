import { DotPattern } from "@/app/(home)/components/vendors/DotPattern";
import { cn } from "@/app/utils/utils";
import { Petrona } from "next/font/google";
import { ReactNode } from "react";
//English and Spanish
const petrona = Petrona({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--next-font-petrona"
})
type DesignSystemProps = {
    className?: string;
    children: ReactNode;
}
const DOT_SPACING = 15;
export default function DesignSystem({ children, className }: DesignSystemProps) {
    const baseStyles = cn(
        "relative z-0 min-h-screen",
        "",
        petrona.className, className)
    return <main className={baseStyles}>
        <DotPattern width={DOT_SPACING} height={DOT_SPACING} className="opacity-50 mask-b-from-0% mask-b-to-90% fixed" />
        <div className="container mx-auto max-w-6xl  relative z-0 min-h-screen border-x-2 border-neutral-200 border-dashed">
            {/* <Scales className="-z-10 opacity-30" /> */}

            {children}

        </div>
    </main>
}
