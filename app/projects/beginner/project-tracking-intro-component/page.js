import Content from "./components/Content"
import Illustration from "./components/Illustration"
import Navbar from "./components/Navbar"
import StyleSetup from "./components/StyleSetup"

export default function Page() {
    return <StyleSetup>
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-[87px] sm:gap-16 lg:gap-0">
            <Illustration />
            <Content />
        </div>
    </StyleSetup>
}
