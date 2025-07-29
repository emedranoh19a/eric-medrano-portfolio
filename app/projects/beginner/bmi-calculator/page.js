import StyleSetup from "./components/StyleSetup"
import About from "./sections/About"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Limitations from "./sections/Limitations"
//TODO: - Select whether they want to use metric or imperial units
//TODO: - Enter their height and weight
//TODO: - See their BMI result, with their weight classification and healthy weight range
//TODO: - View the optimal layout for the interface depending on their device's screen size
//TODO: - See hover and focus states for all interactive elements on the page
export default function Page() {
    return <StyleSetup>
        <Hero />
        <About />
        <Features />
        <Limitations />
    </StyleSetup>
}
