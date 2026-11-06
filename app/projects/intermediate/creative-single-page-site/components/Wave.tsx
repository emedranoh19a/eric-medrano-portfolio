import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { bgPatternWaveRed, bgPatternWavyWhite } from "../assets/assetIndex";

type WaveProps = {
    variant: "red" | "white",
    className?: string;
}
export default function Wave({ variant, className }: WaveProps) {
    const ornamentalStyles = cn(
        "w-15.75 lg:w-33.75 h-7.25 lg:h-15.25 absolute",
        className
    )
    return <div className={ornamentalStyles}>
        <Image src={variant === "red" ? bgPatternWaveRed : bgPatternWavyWhite} fill className="object-contain" alt="" />
    </div>
}
