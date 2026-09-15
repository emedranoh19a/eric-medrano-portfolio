"use client"
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useTheme } from "../hooks/ThemeProvider";
import { useTodo } from "../hooks/TodoProvider";
import { iconCross } from "../images/imageIndex";
import { Task } from "../types/Task.type";
import Checkbox from "./Checkbox";
import Sortable from "./Sortable";

type ListItemProps = Task & {
    index: number;
}

export default function ListItem({ id, index, status, task }: ListItemProps) {
    const isComplete = status === "complete";
    const { isDark } = useTheme();
    const { deleteTask, toggleTask } = useTodo();
    const containerCn = cn("transition-colors",
        "flex flex-row justify-between items-center",
        "py-4 px-5  border-b",
        isDark ? "border-[#393A4B] bg-[#25273D]" : " bg-white border-[#E3E4F1]")

    const spanCn = cn(
        isComplete && "line-through",
        isDark ?
            //dark mode 
            isComplete ? "text-[#4D5067]" : "text-[#C8CBE7]" :
            //light mode
            isComplete ? "text-[#D1D2DA]" : "text-[#494C6B]",
    )

    return <Sortable id={id} index={index}>
        <li className={containerCn} onClick={() => toggleTask(id)}>
            <div className="flex flex-row justify-start gap-3 items-center">
                <Checkbox variant={status} onClick={() => toggleTask(id)} />
                <span className={spanCn}>
                    {task}
                </span>
            </div>
            <button className="w-3 relative aspect-square inline-block cursor-pointer" onClick={(e) => {
                e.stopPropagation();
                deleteTask(id);
            }}>
                <Image src={iconCross} fill className="object-contain" alt="close" />
            </button>
        </li>
    </Sortable>
}
