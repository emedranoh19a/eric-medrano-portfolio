import StyleSetup from "./components/StyleSetup"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Journey from "./sections/Journey"
import MembershipOptions from "./sections/MembershipOptions"
import Testimonials from "./sections/Testimonials"

export default function Page() {
    //Note: Specify the font-weight when using the preset 4
    return (
        <StyleSetup>
            <Hero />
            <Features />
            <Journey />
            <MembershipOptions />
            <Testimonials />
            <Footer />
        </StyleSetup>
    )
}
