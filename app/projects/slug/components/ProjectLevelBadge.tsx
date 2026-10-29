import { cn } from "@/app/utils/utils";
import { LuCircleGauge } from "react-icons/lu";

// type Props = { level: ProjectLevel }

export default function ProjectLevelBadge({ level }) {
    const badgeStyles = cn(
        "capitalize font-medium tracking-wide text-sm text-white",
        "rounded-full py-1.5 px-3.5",
        "bg-linear-to-br shadow-lg",
        "flex gap-1.5 items-center",
        level === "newbie" && "from-sky-400/80 to-sky-500/80 shadow-sky-500/40",
        level === "beginner" && "from-lime-400/90 to-lime-600/90 shadow-lime-500/40",
        level === "intermediate" && "from-yellow-300/90 to-yellow-500/90 shadow-yellow-500/40",
        level === "advanced" && "from-red-500/70 to-red-700/80 shadow-red-500/30",
        level === "guru" && "from-indigo-500/70 to-indigo-700/80 shadow-indigo-500/40")
    const iconStyles = cn(
        "scale-110",
        level === "newbie" && "-rotate-110",
        level === "beginner" && "-rotate-80",
        level === "intermediate" && "-rotate-40",
        level === "advanced" && "",
        level === "guru" && "rotate-25",
    );

    return <div className={badgeStyles}>
        <span className={iconStyles}>
            <LuCircleGauge />
        </span>
        <span className="" >{level}</span>
    </div>
}
