import CTA from "./components/sections/CTA";
import FAQ from "./components/sections/FAQ";
import Hero from "./components/sections/Hero";
import Main from "./components/sections/Main";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import StyleSetup from "./components/ui/StyleSetup";

export default function Page() {
    return <StyleSetup>
        <Navbar />
        <Hero />
        <Main />
        <FAQ />
        <CTA />
        <Footer />

    </StyleSetup>
}
