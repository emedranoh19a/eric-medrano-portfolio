import Content from "./components/Content"
import DesktopImage from "./components/DesktopImage"
import Logo from "./components/Logo"
import MobileImage from "./components/MobileImage"
import StylesSetup from "./components/StylesSetup"
export default function Page() {
    return <StylesSetup className="relative grid place-items-center relative p-9 md:pr-0 lg:pl-28 md:pt-0 md:place-items-start lg:place-items-center z-0" >
        <MobileImage />
        <div className="relative w-full grid grid-cols-1 md:grid-cols-[3fr_3fr_1fr] md:grid-rows-[1fr_2fr]">
            {/* <DesktopImage /> */}
            <Logo />
            <Content />
            <DesktopImage />
        </div>
    </StylesSetup>
}






