"use client"
import { cn } from "@/app/utils/utils";
import { useState } from "react";
import { useTheme } from "../hooks/ThemeProvider";
import { useTodo } from "../hooks/TodoProvider";
import { darkCardStyles, lightCardStyles } from "../utils";
import Checkbox from "./Checkbox";

export default function CreateArea() {
    //State:
    const [isComplete, setIsComplete] = useState<boolean>(false)
    const [controlledTask, setControlledTask] = useState("")
    const { isDark } = useTheme();
    const { tasks, addTask } = useTodo();
    const paletteStyles = isDark ? darkCardStyles : lightCardStyles;

    //Style:
    const createAreaCn = cn(
        paletteStyles,
        "mb-4",
        "flex flex-row items-center justify-start gap-3",
        "rounded-[5px] inner-ring ",
        "py-3.5 lg:py-5 px-5 lg:px-6",
        "transition-colors");
    const inputCn = cn("align-bottom inline-block",
        "outline-none appearance-none",
        "translate-y-0.5",
        isDark ? "placeholder:text-[#4D5067]" : "placeholder:text-[#D1D2DA]",
        isComplete && "line-through",
        isDark ?
            //dark mode 
            isComplete ? "text-[#4D5067]" : "text-[#C8CBE7]" :
            //light mode
            isComplete ? "text-[#D1D2DA]" : "text-[#494C6B]",
    )
    //Handlers:
    function handleSubmit(event) {
        event.preventDefault()
        const maxId = Math.max(...tasks.map(task => task.id));
        addTask({ id: maxId + 1, task: controlledTask, status: isComplete ? "complete" : "active" })
        setControlledTask("")
        setIsComplete(false)

    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="create-area" className={createAreaCn}>
            <Checkbox variant={isComplete ? "complete" : "active"} onClick={() => setIsComplete((s) => !s)} />
            <input
                className={inputCn}
                id="create-area"
                placeholder="Create a new todo"
                onChange={(e) => { setControlledTask(e.target.value) }}
                value={controlledTask}
            />
        </label>
    </form>
}
