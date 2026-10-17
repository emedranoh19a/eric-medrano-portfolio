import { cn } from "@/app/utils/utils";
import { ReactNode } from "react";

type ButtonProps = {
    label: string | ReactNode;
    className?: string;
    onClick?: () => void
}
export default function Button({ label, className, onClick }: ButtonProps) {
    const buttonStyles = cn("heading-4 text-[18px] text-light-cream",
        "bg-dark-cyan hover:bg-[#66d2cf] transition-colors",
        "px-7.75 py-4 rounded-md cursor-pointer ",
        className)
    return <button className={buttonStyles} onClick={onClick}>{label}</button>
}


