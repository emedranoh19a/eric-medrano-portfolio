import { cn } from "@/app/utils/utils";
import { ReactNode } from "react";

type FullBleedProps = {
    className?: string,
    from: "left" | "right",
    size: "left-sm" | "right-sm" | "left-lg" | "right-lg",
    children?: ReactNode;
}
export default function FullBleed({ className, from, size, children }: FullBleedProps) {
    const backgroundStyles = cn(
        "absolute -z-10 top-0 h-full",
        "w-screen sm:w-[50vw]",
        from === "left" && "left-1/2 sm:left-full translate-x-[-50vw]",
        from === "right" && "right-1/2 sm:right-full translate-x-[50vw]",
        size === "right-sm" && "sm:w-[50.7vw] lg:w-[49vw]",
        size === "right-lg" && "sm:w-[57vw] lg:w-[60vw]",
        size === "left-sm" && "sm:w-[43vw] lg:w-[40vw]",
        size === "left-lg" && "sm:w-[51vw] lg:w-[51vw]",
        className,
        // from === "left" ? "bg-lime-500" : "bg-orange-500"
    );
    return <div className={backgroundStyles} >
        {children ? children : null}
    </div>

}
