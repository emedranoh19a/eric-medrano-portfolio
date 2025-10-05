import About from "./components/About"
import Banner from "./components/Banner"
import Features from "./components/Features"
import Hero from "./components/Hero"
import StyleSetup from "./components/StyleSetup"
import Footer from "./components/ui/Footer"

export default function Page() {
    return <StyleSetup>
        <Hero />
        <About />
        <Banner />
        <Features />
        <Footer />
    </StyleSetup>
}
