"use client"
import { cn } from "@/app/utils/utils";
// import { closestCorners } from "@dnd-kit/core";
import { useTheme } from "../hooks/ThemeProvider";
// import { useTodo } from "../hooks/TodoProvider";
import { useTodo } from "../hooks/TodoProvider";
import { darkCardStyles, lightCardStyles } from "../utils";
import FilterControls from "./FilterControls";
import ListItem from "./ListItem";

export default function List() {
    //State:
    const { isDark } = useTheme();
    const { tasks, clearTasks } = useTodo();
    //Style:
    const containerStyles = cn(
        isDark ? darkCardStyles : lightCardStyles,
        "mb-4 rounded-[5px] transition-colors")
    const filterContainerStyles = cn(
        isDark ? "text-[#5B5E7E]" : "text-[#9495A5]",
        "text-[12px] font-regular tracking-[-0.17px]",
        "p-5 pt-4",
        "flex flex-row justify-between items-center")
    const listStyles = cn("font-regular cursor-grab", isDark ? "text-[#C8CBE7]" : "text-[#494C6B]")

    return <div className={containerStyles}>
        <ul className={listStyles}>
            {tasks.map((task, i) => <ListItem key={i} index={i} {...task} />)}
        </ul>
        <div className={filterContainerStyles}>
            <span className="inline-block">5 items left</span>
            <FilterControls className="shadow-none hidden lg:flex" />
            <button className="inline-block cursor-pointer" onClick={clearTasks}>Clear Completed</button>
        </div>
    </div>
}
