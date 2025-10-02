import Footer from "./components/Footer"
import StyleSetup from "./components/StyleSetup"
import Articles from "./sections/Articles"
import Features from "./sections/Features"
import Hero from "./sections/Hero"

export default function Page() {
    return (
        <StyleSetup>
            <Hero />
            <Features />
            <Articles />
            <Footer />
        </StyleSetup>
    )
}
