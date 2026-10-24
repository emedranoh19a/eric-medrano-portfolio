import { Scales } from "@/app/home/components/vendors/Scales";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { LuCircleGauge } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import { RiSwordFill } from "react-icons/ri";
import { MainTitle } from "../components";
import img from "./preview.jpg";

export default function ProjectHeader() {
    //TODO: Main title
    //TODO: Project Description
    //TODO:  Project Preview Image
    //TODO: Optiona: Difficulty, project type, status, key technologies. 
    //TODO: 
    return <header className="grid grid-cols-1 md:grid-cols-5 px-10 py-16">
        <ProjectDescription className="md:col-span-2" />
        <ProjectPreview className="md:col-span-3" />
    </header>
}

function ProjectStatusBadge({ status }) {
    const badgeStyles = cn(
        "uppercase font-medium tracking-wide text-sm text-white",
        "rounded-full py-1.5 px-3.5",
        "bg-linear-to-br shadow-lg",
        "flex gap-1.5 items-center bg-linear-to-br from-neutral-600 to-neutral-900")
    return (
        <div className={badgeStyles}>
            <span>
                {status}
            </span>
        </div>
    )
}

function ProjectLevelBadge({ level }) {
    const badgeStyles = cn(
        "capitalize font-medium tracking-wide text-sm text-white",
        "rounded-full py-1.5 px-3.5",
        "bg-linear-to-br shadow-lg",
        "flex gap-1.5 items-center",
        level === "newbie" && "from-sky-400/80 to-sky-500/80 shadow-sky-500/40", //500 #0ea5e9
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
function ProjectCategoryBadge({ category }) {
    const badgeStyles = cn(
        "uppercase font-medium tracking-wide text-sm text-white",
        "rounded-full py-1.5 px-3.5",
        "bg-linear-to-br shadow-lg",
        "flex gap-1.5 items-center bg-linear-to-br from-neutral-600 to-neutral-900")
    const icon = category === "tutorial" ? <GiGraduateCap className="scale-120" /> :
        category === "challenge" ? <RiSwordFill className="scale-110" />
            : category === "proffessional" ? <MdWork /> :
                <FaUserAlt />

    return (
        <div className={badgeStyles}>
            {icon}
            <span>
                {category}
            </span>
        </div>
    )
    return <div>{category}</div>
}

function ProjectDescription({ className }: { className?: string }) {
    const containerStyles = cn("", className)
    return <div className={containerStyles}>
        <MainTitle />
        <div className="flex gap-4 flex-wrap mb-4">

            <ProjectLevelBadge level="newbie" />
            <ProjectLevelBadge level="beginner" />
            <ProjectLevelBadge level="intermediate" />
            <ProjectLevelBadge level="advanced" />
            <ProjectLevelBadge level="guru" />
        </div>
        <div className="flex gap-4 flex-wrap">
            <ProjectStatusBadge status="ongoing" />
            <ProjectStatusBadge status="deployed" />
            <ProjectStatusBadge status="maintenance" />
        </div>
        <div className="flex gap-4 flex-wrap">
            <ProjectCategoryBadge category="tutorial" />
            <ProjectCategoryBadge category="challenge" />
            <ProjectCategoryBadge category="personal" />
            <ProjectCategoryBadge category="proffessional" />
        </div>

        <p className="lg:max-w-80"> A modern subcription site for a coffee brand, built with Next.js and TailwindCSS</p>
    </div>
}

function ProjectPreview({ className }: { className?: string }) {
    //Image with scales
    // return <div className="relative mx-auto flex w-full items-center justify-center ">
    const containerStyles = cn("relative h-full w-full", className)
    return <div className={containerStyles}>
        <div className="opacity-0 lg:opacity-80">
            <ScalesBorder variant="left" />
            <ScalesBorder variant="right" />
            <ScalesBorder variant="top" />
            <ScalesBorder variant="bottom" />
        </div>
        {/* <div className="bg-neutral-200 relative z-10 h-full w-full overflow-hidden rounded-none shadow-sm ring-1 shadow-black/10 ring-black/5 dark:bg-neutral-800"> */}
        <Image src={img} height={1000} width={1000} alt="" className="rounded-lg shadow-2xl shadow-neutral-900/20" />
        {/* </div> */}
    </div >
    // </div>
}


type ScalesBorderProps = {
    variant: "top" | "bottom" | "right" | "left",
    className?: string;
}
function ScalesBorder({ variant, className }: ScalesBorderProps) {
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
