import StyleSetup from "./ui/components/StyleSetup";
import Footer from "./ui/sections/Footer";
import Hero from "./ui/sections/Hero";
import Navbar from "./ui/sections/Navbar";
import Testimonial from "./ui/sections/Testimonial";

export default function Page() {
    return <StyleSetup>
        <Navbar />
        <Hero />
        <Testimonial />
        <Footer />
    </StyleSetup>;
}
