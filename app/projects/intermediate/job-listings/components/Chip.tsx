import { cn } from "@/app/utils/utils";

type ChipProps = {
    variant: "new" | "featured";
}

export default function Chip({ variant }: ChipProps) {
    const chipCn = cn("px-2 pt-[7px] pb-[3px] inline-block text-[14px] rounded-full uppercase text-white",
        variant === "new" ? "bg-[#5CA5A5]" : "bg-[#2B3939]")
    return <span className={chipCn}>
        {variant === "new" ? "New!" : "Featured"}
    </span>

}
