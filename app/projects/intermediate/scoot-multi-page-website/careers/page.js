import PageBanner from "../components/PageBanner"
import { careersLocationHeroMobile, careersLocationsHeroDesktop, careersLocationsHeroTablet } from "../imageIndex"
import About from "./About"
import CareersList from "./CareersList"
import Features from "./Features"

export default function Page() {
    // TODO: Pattern 1, direction to bottom left.
    return (
        <div>
            <PageBanner title="Careers" mobileSrc={careersLocationHeroMobile} tabletSrc={careersLocationsHeroTablet} desktopSrc={careersLocationsHeroDesktop} />
            <About />
            <Features />
            <CareersList />
        </div>
    )
}
