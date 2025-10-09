import CTA from "./components/CTA"
import Features from "./components/Features"
import Hero from "./components/Hero"
import StyleSetup from "./components/StyleSetup"
import Testimonials from "./components/Testimonials"
import Footer from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"

export default function Page() {
    return <StyleSetup>
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
    </StyleSetup>
}
