import Footer from "./components/Footer"
import StyleSetup from "./components/StyleSetup"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Productivity from "./sections/Productivity"
import SocialProof from "./sections/SocialProof"
export default function Page() {
    return (
        <StyleSetup>
            <Hero />
            <Features />
            <Productivity />
            <SocialProof />
            <Footer />
        </StyleSetup>
    )
}
