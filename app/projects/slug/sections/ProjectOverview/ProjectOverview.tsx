import { ProjectLevel, ProjectPage, Translation } from "@/app/data/projects/Proyect.types"
import Section from "../../components/Section"
import Title from "../../components/Typography/Title"
import Challenges from "./components/Challenges"
import PageScreenshots from "./components/PageScreenshots"

type ProjectOverviewProps = {
    level: ProjectLevel,
    challenges: Translation[],
    pages: ProjectPage[],
}
export default function ProjectOverview({ level, pages, challenges }: ProjectOverviewProps) {
    return <Section id="overview">
        <Title text={"Overview"} />

        <Challenges challenges={challenges} level={level} />
        <PageScreenshots pages={pages} />

    </Section>
}

