import StyleSetup from "./components/StyleSetup"
import About from "./sections/About/About"
import CTA from "./sections/CTA"
import Hero from "./sections/Hero/Hero"
import Nav from "./sections/shared/Nav"
import Works from "./sections/Works"
import "./styles/typography.css"

export default function Page() {
    return <StyleSetup>
        <Hero />
        <About />
        <Works />
        <CTA />
        <Nav as="footer" />
    </StyleSetup>
}
