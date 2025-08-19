import StylesSetup from "./components/StylesSetup"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import TechnologyStack from "./sections/TechnologyStack"

export default function Page() {
    return (
        <StylesSetup>
            <Hero />
            <TechnologyStack />
            <Projects />
            <Contact />
        </StylesSetup>
    )
}
