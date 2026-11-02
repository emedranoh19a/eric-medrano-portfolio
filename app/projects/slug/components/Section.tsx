import { cn } from "@/app/utils/utils";
import { ReactNode } from "react";

type SectionProps = {
    id: string;
    children: ReactNode;
    as?: "section" | "header";
    className?: string;
}
export default function Section({ id, children, as, className }: SectionProps) {
    //TODO: Give variants to the section. Dotted, scales, dashed, etc.
    //TODO: Make the section scrollable with framer motion
    //TODO: Have consistent spacing with margin bottom.
    const sectionStyles = cn("mb-40", className)
    if (as === "section") {
        return <section id={id} className={sectionStyles}>{children}</section>
    }
    return <main id={id} className={sectionStyles}>{children}</main>
}
