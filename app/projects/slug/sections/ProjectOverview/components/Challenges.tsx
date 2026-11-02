"use client"
import { ProjectLevel, Translation } from "@/app/data/projects/Proyect.types";
import { useLanguage } from "@/app/hooks/LanguageProvider";
import Subsection from "../../../components/Typography/Subsection";
import Subtitle from "../../../components/Typography/Subtitle";

type ChallengesProps = {
    challenges: Translation[];
    level: ProjectLevel
}

export default function Challenges({ challenges }: ChallengesProps) {
    const { language } = useLanguage();
    return <Subsection id="challenge">
        <Subtitle text="The Challenge" />
        <p className="">
            Your challenge is to build out this
            body mass index calculator page and
            get it looking as close to the design as possible.
        </p>
        Your users should be able to:
        <ul>
            {challenges.map((challenge, i) => <Challenge key={i} text={challenge[language]} />)}
        </ul>
    </Subsection>
}
function Challenge({ text }: { text: string }) {
    return <li>{text}</li>
}
