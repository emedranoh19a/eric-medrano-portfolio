import { Technology } from "@/app/data/projects/Proyect.types"
import Subsection from "../../../components/Typography/Subsection"

type ProjectStackProps = {
    stack: Technology[]
}

export default function ProjectStack({ stack }: ProjectStackProps) {
    return <Subsection id="stack">
        {stack.map((technology, i) => <div key={i}>{technology}</div>)}
        {/* <Subtitle text="Built with" /> */}
        {/* Semantic HTML5 markup
        CSS custom properties
        Flexbox
        CSS Grid
        Mobile-first workflow
        React - JS library
        Next.js - React framework
        Styled Components - For styles */}
    </Subsection>
}
