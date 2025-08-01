import StylesSetup from "./components/StylesSetup"
import CTA from "./CTA"
import Footer from "./Footer"
import Hero from "./Hero"
import Value from "./Value"

export default function Page() {
    return <StylesSetup>
        <Hero />
        <Value />
        <CTA />
        <Footer />
    </StylesSetup>
}
