import { cn } from "@/app/utils/utils";

type ButtonProps = {
    text: string;
    color: "red" | "black";
    variant: "filled" | "outline";
    className?: string;
    onClick?: () => void;
}
export default function Button({ text, className, color, variant, onClick }: ButtonProps) {
    const buttonStyles = cn(
        "font-extrabold cursor-pointer transition-colors text-nowrap",
        color === "red" && "bg-red text-white hover:bg-light-red",
        color === "black" && "bg-bg-black text-white hover:bg-[#434356]",
        variant === "filled" ? "py-[25px] px-[35px]" : "bg-transparent hover:bg-transparent",
        variant === "outline" && color === "red" && "text-red hover:text-light-red underline decoration-[2px] underline-offset-[8px]",
        variant === "outline" && color === "black" && "text-black hover:text-[#434356] underline decoration-[2px] underline-offset-[8px]",
        className)
    return <button className={buttonStyles} onClick={onClick}>{text}</button>
}
