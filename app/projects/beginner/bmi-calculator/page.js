import StyleSetup from "./components/StyleSetup"
import About from "./sections/About"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Limitations from "./sections/Limitations"
export default function Page() {
    return <StyleSetup>
        <Hero />
        <About />
        <Features />
        <Limitations />
    </StyleSetup>
}
