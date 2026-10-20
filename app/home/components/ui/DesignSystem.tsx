import { cn } from "@/app/utils/utils";
import { Petrona } from "next/font/google";
import { ReactNode } from "react";
import "./theme.css";
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
export default function DesignSystem({ children }: DesignSystemProps) {
    const baseStyles = cn("", "", petrona.variable)
    return <div className={baseStyles}>{children}</div>
}
