"use client"
import { cn } from "@/app/utils/utils";
import { useJobs } from "./JobsProvider";
import Tag from "./Tag";
type FilterControlsProps = {
    className?: string;
}
export default function FilterControls({ className }: FilterControlsProps) {
    const { filters, clearFilters } = useJobs();

    const containerCn = cn("-mt-20 p-5 w-full flex flex-row justify-between bg-white mb-14 lg:mb-10 shadow-[0_15px_20px_-5px_rgba(13,113,130,0.15)] rounded-[5px]",
        filters.length === 0 && "hidden",
        className);
    return <div className={containerCn}>
        <ul className="flex flex-row justify-start gap-4 flex-wrap">
            {filters.map((filter, i) => <Tag key={i} label={filter} removable />)}
        </ul>
        <button className="font-bold text-[#7C8F8F] leading-[24%] tracking-[-0.12px] cursor-pointer" onClick={clearFilters}>Clear</button>
    </div>

}
