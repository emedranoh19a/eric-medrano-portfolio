import Content from "./components/Content"
import Illustration from "./components/Illustration"
import StyleSetup from "./components/StyleSetup"
import Navbar from "./components/ui/Navbar"

export default function Page() {
    return <StyleSetup>
        <div className="container mx-auto">
            <Navbar />
            <div className="px-[90px] grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-32">
                <Illustration />
                <Content />
            </div>
        </div>
    </StyleSetup>
}
