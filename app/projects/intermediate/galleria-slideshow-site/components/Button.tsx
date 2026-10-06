import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { iconViewImage } from "../assets/assetIndex";

type ButtonProps = {
    label?: string;
    className?: string;
    onClick: () => void;
}
export default function Button({ onClick, className, label = "View Image" }: ButtonProps) {

    const buttonStyles = cn(
        "uppercase text-white cursor-pointer",
        "transition-colors bg-black hover:bg-white/25 text-white",
        "flex gap-3.5 items-center",
        "px-4 py-3.5",
        className)

    return <button className={buttonStyles} onClick={onClick}>
        <span className="w-3 aspect-square relative inline-block">
            <Image src={iconViewImage} alt="view image" className="object-contain" fill />
        </span>
        <span>{label}</span>
    </button>
}
