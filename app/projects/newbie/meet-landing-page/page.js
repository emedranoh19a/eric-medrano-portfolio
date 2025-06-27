import StylesSetup from "./components/StylesSetup"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

export default function Page() {
    return <StylesSetup>
        <Navbar />
        <Hero />
        <About />
        <Footer />
    </StylesSetup>
}
