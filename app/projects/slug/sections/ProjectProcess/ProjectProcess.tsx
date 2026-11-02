import { Lesson, ProjectLevel, Technology, Translation } from "@/app/data/projects/Proyect.types";
import Section from "../../components/Section";
import Title from "../../components/Typography/Title";
import ProjectLearned from "./components/ProjectLearned";
import ProjectNextSteps from "./components/ProjectNextSteps";
import ProjectStack from "./components/ProjectStack";

type ProjectProcessProps = {
    level: ProjectLevel;
    stack: Technology[];
    lessons: Lesson[];
    nextSteps: Translation[];
}
export default function ProjectProcess({ level, stack, lessons, nextSteps }: ProjectProcessProps) {
    return <Section id="process">
        <Title text="The Process" />
        <ProjectStack stack={stack} />
        <ProjectLearned lessons={lessons} />
        <ProjectNextSteps nextSteps={nextSteps} />
    </Section>
}
