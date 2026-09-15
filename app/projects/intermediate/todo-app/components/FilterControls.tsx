"use client"
import { cn } from "@/app/utils/utils";
import { useTheme } from "../hooks/ThemeProvider";
import { useTodo } from "../hooks/TodoProvider";

type FilterControlsProps = { className?: string; }
export default function FilterControls({ className }: FilterControlsProps) {
    const { isDark } = useTheme();
    const containerCn = cn(
        isDark ? "shadow-[0px_35px_50px_-15px] shadow-[#000000]/50 bg-[#25273D] text-[#5B5E7E]" : "text-[#9495A5] bg-white  shadow-[0px_35px_50px_-15px] shadow-[#C2C3D6]/50",
        "font-bold text-[14px] lg:bg-transparent",
        "rounded-[5px] py-4 lg:bg-none ",
        "flex flex-row gap-4.5 justify-center",
        "lg:shadow-none transition-colors",
        className)

    return <div className={containerCn}>
        <FilterControl filter="all" />
        <FilterControl filter="active" />
        <FilterControl filter="complete" />
    </div>
}

function FilterControl({ filter }) {
    const { isDark } = useTheme();
    const { filterTasks, activeFilter } = useTodo();
    const buttonStyles = cn(
        "cursor-pointer capitalize",
        activeFilter === filter && "text-[#3A7CFD]",
        isDark ? "hover:text-[#E3E4F1]" : "hover:text-[#494C6B]"
        //active state
    )
    return <button className={buttonStyles} onClick={() => filterTasks(filter)}>{filter}</button>
}
