import clsx from "clsx";
import { Barlow, Fraunces } from "next/font/google";
import { ReactNode } from "react";
import "./theme.css";

const barlow = Barlow({ subsets: ["latin"], variable: "--next-font-barlow", weight: ["400", "700"] });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--next-font-fraunces", weight: ["900"] });

export default function DesignSystem({ children }: { children: ReactNode }) {
    const themeStyles = clsx("bg-light-cream min-h-screen px-6 relative z-0 max-w-screen flex", barlow.variable, fraunces.variable);
    return <div className={themeStyles}>
        <div className="container mx-auto relative-0 flex flex-col">

            {children}
        </div>
    </div>
}
