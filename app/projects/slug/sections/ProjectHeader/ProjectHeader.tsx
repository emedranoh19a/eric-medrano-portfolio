import type { ProjectLevel } from "@/app/types/Proyect.types";
import type { StaticImageData } from "next/image";
import ProjectDescription from "./ProjectDescription";
import ProjectPreview from "./ProjectPreview";

type ProjectHeaderProps = {
    preview: StaticImageData,
    title: string;
    level: ProjectLevel
}
export default function ProjectHeader({ preview }: ProjectHeaderProps) {
    //TODO: Main title
    //TODO: Project Description
    //TODO:  Project Preview Image
    //TODO: Optiona: Difficulty, project type, status, key technologies. 
    //TODO: 
    return <header className="grid grid-cols-1 md:grid-cols-5 pl-10 py-16">
        <ProjectDescription className="md:col-span-2" />
        <ProjectPreview preview={preview} className="md:col-span-3" />
    </header>
}









