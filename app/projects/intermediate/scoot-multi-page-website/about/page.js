import PageBanner from "../components/PageBanner"
import { aboutHeroDesktop, aboutHeroMobile, aboutHeroTablet } from "../imageIndex"
import FAQs from "./FAQs"
import Intro from "./Intro"
import Values from "./Values"

export default function Page() {
    return (
        <>
            <PageBanner title="About" mobileSrc={aboutHeroMobile} tabletSrc={aboutHeroTablet} desktopSrc={aboutHeroDesktop} />
            <Intro />
            <Values />
            <FAQs />

        </>
    )
}
