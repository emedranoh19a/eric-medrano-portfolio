import StyleSetup from "./components/StyleSetup"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Gallery from "./sections/Gallery"
import Header from "./sections/Header"
import Testimonials from "./sections/Testimonials"

export default function Page() {
    return (
        <StyleSetup>
            <Header />
            <Features />
            <Testimonials />
            <Gallery />
            <Footer />
        </StyleSetup>
    )
}
