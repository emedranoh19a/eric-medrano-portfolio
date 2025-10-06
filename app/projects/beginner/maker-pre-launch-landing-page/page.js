import CTA from "./components/CTA"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import StyleSetup from "./components/StyleSetup"

export default function Page() {
    return (
        <StyleSetup>
            <Hero />
            <Features />
            <Pricing />
            <CTA />
        </StyleSetup>
    )
}
