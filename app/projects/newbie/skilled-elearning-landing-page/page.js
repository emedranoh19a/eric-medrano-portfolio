import Content from "./blocks/Content"
import Footer from "./blocks/Footer"
import Hero from "./blocks/Hero"
import Nav from "./blocks/Nav"
import StylesSetup from "./components/StylesSetup"

export default function Page() {
    return <StylesSetup>
        <Nav />
        <Hero />
        <Content />
        <Footer />
    </StylesSetup>
}
