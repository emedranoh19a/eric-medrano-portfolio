"use client"
import { Translation } from "@/app/data/projects/Proyect.types"
import { useLanguage } from "@/app/hooks/LanguageProvider"
import Subsection from "../../../components/Typography/Subsection"
import Subtitle from "../../../components/Typography/Subtitle"

export type ProjectNextStepsProps = {
    nextSteps: Translation[]
}

export default function ProjectNextSteps({ nextSteps }: ProjectNextStepsProps) {
    const { language } = useLanguage();
    return <Subsection id="next-steps">
        <Subtitle text="Next Steps" />
        {nextSteps.map((nextStep, i) => <NextStep key={i} text={nextStep[language]} />)}

    </Subsection>
}

function NextStep({ text }: { text: string }) {
    return <div>{text}</div>
}
