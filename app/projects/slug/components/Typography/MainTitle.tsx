"use client"
import { ProjectLevel } from "@/app/data/projects/Proyect.types";
import { useLanguage } from "@/app/hooks/LanguageProvider";
import { cn } from "@/app/utils/utils";
import { Yuji_Syuku } from "next/font/google";
//TODO: get this to the DesignProvider, and inyect the variable only(?)
const yujiSyuku = Yuji_Syuku({ weight: ["400"] });

type MainTitleProps = {
    text: string;
    level: ProjectLevel
}
const levelStyles = {
    newbie: "",
    junior: "",
    intermediate: "",
    advanced: "",
    guru: "",
} satisfies Record<ProjectLevel, string>

export default function MainTitle({ text, level }: MainTitleProps) {
    const { language } = useLanguage();
    const mainTitleStyles = cn(
        "text-pretty text-7xl",
        levelStyles[level],
        language === "ja" && yujiSyuku.className)
    return <h1 className={mainTitleStyles}>{text}</h1>
}
