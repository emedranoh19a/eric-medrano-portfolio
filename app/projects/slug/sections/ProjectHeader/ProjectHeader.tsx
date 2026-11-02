"use client"
import { ProjectCategory, ProjectLevel, ProjectStatus, Translation } from "@/app/data/projects/Proyect.types"
import { useLanguage } from "@/app/hooks/LanguageProvider"
import Image, { StaticImageData } from "next/image"
import Section from "../../components/Section"
import MainTitle from "../../components/Typography/MainTitle"

type ProjectHeaderProps = {
    title: Translation
    description: Translation,
    level: ProjectLevel,
    category: ProjectCategory,
    status: ProjectStatus,
    preview: StaticImageData
}
export default function ProjectHeader({ title, description, level, category, status, preview }: ProjectHeaderProps) {
    //TODO: Main title
    //TODO: Project Description
    //TODO:  Project Preview Image
    //TODO: Optiona: Difficulty, project type, status, key technologies. 
    //TODO: 
    const { language } = useLanguage();
    return <Section id="header" as="header" className="pt-16">
        <div className=""></div>
        <MainTitle text={title[language]} level={level} />
        <p>

            {description[language]}
        </p>
        <p>
            {level}
        </p>
        <p>
            {category}
        </p>
        <p>
            {status}
        </p>
        <Image height={1000} alt="" className="" src={preview} />
        {/* <ProjectDescription className="md:col-span-2" /> */}
        {/* <ProjectPreview preview={preview} className="md:col-span-3" /> */}
    </Section>
}









