"use client"
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import iconRemove from "../images/icon-remove.svg";
import { useJobs } from "./JobsProvider";
type TagProps = { label: string; removable?: boolean }
export default function Tag({ label, removable = false }: TagProps) {
    const { addFilter, removeFilter } = useJobs();
    //Style:
    const tagContainerCn = cn("relative group/tag transition-colors",
        "flex gap-2.5",
        "bg-[#5CA5A5]/10  rounded-[4px] overflow-hidden",
        "cursor-pointer",
        !removable && "hover:bg-[#5CA5A5]"
    )
    const tagCn = cn(
        "pt-[5px] pb-[3px] px-2.5",
        "font-bold text-[16px] tracking-[-0.12px] leading-6",
        "text-[#5CA5A5]",
        !removable && "group-hover/tag:text-white"
        // !removable && "",
    )
    const buttonCn = cn(
        "relative h-full w-8  cursor-pointer",
        "bg-[#5CA5A5] hover:bg-[#2B3939]")
    return <li className={tagContainerCn} onClick={() => { addFilter(label) }}>
        <span className={tagCn}>
            {label}
        </span>
        {removable && <button role="remove" className={buttonCn} onClick={(e) => {
            e.stopPropagation();
            removeFilter(label);
        }}>

            <div className="w-[13.44px] absolute aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-full w-full relative">
                    <Image src={iconRemove} alt="" fill className="object-contain" />
                </div>
            </div>
        </button>}
    </li>
}
//Note: Learnt that child elements should stop propagation. Or the parent's event will fire as well.
