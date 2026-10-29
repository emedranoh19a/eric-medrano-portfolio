import { Scales } from "../(home)/components/vendors/Scales";
import { cn } from "../utils/utils";

type ScalesBorderProps = {
    variant: "top" | "bottom" | "right" | "left",
    className?: string;
}
export default function ScalesBorder({ variant, className }: ScalesBorderProps) {
    const positionStyles = cn(
        "absolute",
        variant === "left" || variant === "right" && "w-8 mask-t-from-90% mask-b-from-90%",
        variant === "bottom" || variant === "top" && "",
        variant === "left" && " inset-y-[-30%] -left-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%",
        variant === "right" && "-inset-y-[30%] -right-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%",
        variant === "top" && "-inset-x-[30%] -top-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%",
        variant === "bottom" && " -inset-x-[30%] -bottom-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%",
        className
    )
    return <div className={positionStyles}>
        <Scales size={8} className="rounded-lg" />
    </div>
}
