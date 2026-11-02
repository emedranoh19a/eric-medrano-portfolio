"use client"
import { Author, Credit, ProjectLevel } from "@/app/data/projects/Proyect.types"
import { useLanguage } from "@/app/hooks/LanguageProvider"
import Section from "../../components/Section"
import Title from "../../components/Typography/Title"

type ProjectCreditsProps = {
    level: ProjectLevel,
    credits: Credit[]
}
export default function ProjectCredits({ level, credits }: ProjectCreditsProps) {
    return <Section id="credits">
        <Title text="Special Thanks" />
        {credits.map((credit, i) => <ProjectCredit key={i} {...credit} />)}
    </Section>
}

// // Note: one person or team, written once
// export type Author = {
//   name: string;
//   url?: string;
//   photo?: StaticImageData; // optional, some have no face
// };
function ProjectCredit({ author, work, url, thanks }: Credit) {
    const { language } = useLanguage();
    return <div>
        <p>
            {work}
        </p>
        <p>
            {url}
        </p>
        <p>
            {thanks[language]}
        </p>
    </div>
}

function CreditAuthor({ name, url, photo }: Author) {
    return <div>CreditAuthor</div>
}
