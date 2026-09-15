import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { iconCheck } from "../images/imageIndex";

type CheckboxProps = {
    variant: "complete" | "active";
    onClick: () => void;
}
export default function Checkbox({ variant, onClick }: CheckboxProps) {
    const checkCn = cn("relative w-5 aspect-square cursor-pointer",
        // "bg-white",
        variant === "complete" ? "bg-gradient-to-br from-[#55DDFF] to-[#C058F3]" : "border border-[#E3E4F1]",
        "rounded-full")
    const imageContainerCn = cn("w-[7.25px] h-[5px]",
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.4] ",
        variant !== "complete" && "hidden");
    return <div className={checkCn} onClick={onClick}>
        <div className={imageContainerCn}>
            {<Image src={iconCheck} fill className="object-contain" alt="check" />}
        </div>
    </div>
}
