import CTA from "./ui/components/CTA"
import Footer from "./ui/components/Footer"
import Navbar from "./ui/components/Navbar"
import Features from "./ui/sections/Features"
import Header from "./ui/sections/Header"
import StyleSetup from "./ui/StyleSetup"

export default function Page() {
    return <StyleSetup>
        <Navbar />
        <Header />
        <Features />
        <CTA />
        <Footer />
    </StyleSetup>
}
