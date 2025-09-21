import StyleSetup from "./components/StyleSetup"
import About from "./sections/About/About"
import CTA from "./sections/CTA"
import Hero from "./sections/Hero/Hero"
import Nav from "./sections/shared/Nav"
import Works from "./sections/Works"
import "./styles/typography.css"
//TODO: Get the proper layout on the bento grid. 
//TODO: Get the layout for three works (no calculations for now.)
//TODO: Apply motion also for just three cases for now. 
export default function Page() {
    return <StyleSetup>
        <Hero />
        <About />
        <Works />
        <CTA />
        <Nav as="footer" />
    </StyleSetup>
}
