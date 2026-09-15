"use client"
import { createContext, ReactNode, useContext, useState } from "react";
import { tasks as initialTasks } from "../data";
import { Task } from "../types/Task.type";
type Filter = "all" | "active" | "complete"

type TodoContextType = {
    tasks: typeof initialTasks;
    addTask: (task: Task) => void;
    deleteTask: (taskId: number) => void;
    toggleTask: (taskId: number) => void;
    filterTasks: (fltr: Filter) => void;
    clearTasks: () => void;
    activeFilter: Filter
};

const TodoContext = createContext<TodoContextType | null>(null);

export default function TodoProvider({ children }: { children: ReactNode }) {
    //State:
    const [tasks, setTasks] = useState(initialTasks)
    const [filter, setFilter] = useState<Filter>("all");

    //Handlers:
    function addTask(newTask: Task): void {
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
    }
    function deleteTask(taskId: number): void {
        const newTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(newTasks)
    }
    function toggleSingleTask(task: Task): Task {
        return { ...task, status: task.status === "active" ? "complete" : "active" }
    }
    function toggleTask(taskId: number): void {
        const newTasks = tasks.map((task) => task.id !== taskId ? task : toggleSingleTask(task))
        setTasks(newTasks)
    }
    function filterTasks(filterParam: Filter): void {
        setFilter(filterParam)
    }
    function clearTasks(): void {
        const newTasks = tasks.filter((task) => task.status !== "complete")
        setTasks(newTasks)
    }

    const filteredTasks = tasks.filter((task) => filter === "all" ? true : task.status === filter)

    return <TodoContext.Provider value={{ tasks: filteredTasks, activeFilter: filter, addTask, deleteTask, toggleTask, filterTasks, clearTasks }}>
        {children}
    </TodoContext.Provider>
}

export function useTodo() {

    const contextValue = useContext(TodoContext)
    if (!contextValue) {
        throw new Error("useTodo must be used inside TodoProvider")
    }
    return contextValue
}
