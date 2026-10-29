import { cn } from "@/app/utils/utils"
import { FaUserAlt } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi"
import { MdWork } from "react-icons/md"
import { RiSwordFill } from "react-icons/ri"
import ProjectLevelBadge from "../../components/ProjectLevelBadge"
import MainTitle from "../../components/Typography/MainTitle"

export default function ProjectDescription({ className }: { className?: string }) {
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
            <ProjectCategory category="tutorial" />
            <ProjectCategory category="challenge" />
            <ProjectCategory category="personal" />
            <ProjectCategory category="proffessional" />
        </div>

        <p className="lg:max-w-80"> A modern subcription site for a coffee brand, built with Next.js and TailwindCSS</p>
    </div>
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


function ProjectCategory({ category }) {
    const badgeStyles = cn(
        "uppercase font-medium tracking-wide text-sm text-white",
        "rounded-full py-1.5 px-3.5",
        "bg-linear-to-br shadow-lg",
        "flex gap-1.5 items-center bg-linear-to-br from-neutral-600 to-neutral-900")
    const icon = category === "tutorial" ? <GiGraduateCap className="scale-120" /> :
        category === "challenge" ? <RiSwordFill className="scale-110" />
            : category === "professional" ? <MdWork /> :
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
