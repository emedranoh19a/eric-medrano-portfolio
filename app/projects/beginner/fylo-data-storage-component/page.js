import Navbar from "./components/Navbar"
import StyleSetup from "./components/StyleSetup"
import UsageCard from "./components/UsageCard"

export default function Page() {
    return <StyleSetup>
        <div className="sm:max-w-[540px] lg:max-w-none w-full flex flex-col items-center sm:items-start lg:items-end lg:justify-center lg:flex-row gap-4 lg:gap-8">
            <Navbar />
            <UsageCard />
        </div>
    </StyleSetup>
}
