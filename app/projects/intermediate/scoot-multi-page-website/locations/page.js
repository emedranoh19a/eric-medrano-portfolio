import PageBanner from "../components/PageBanner"
import { careersLocationHeroMobile, careersLocationsHeroDesktop, careersLocationsHeroTablet } from "../imageIndex"
import Content from "./Content"
import Map from "./Map"

export default function Page() {
    return (
        <>
            <PageBanner title="Locations" mobileSrc={careersLocationHeroMobile} tabletSrc={careersLocationsHeroTablet} desktopSrc={careersLocationsHeroDesktop} />
            <Map />
            <Content />
            {/* 



           



            New York
            London
            Yokohama
            Jakarta

            Your city not listed?

            If you’d like to see Scoot in your hometown, be sure to let us know. We track
            requests and plan launches based on demand. Feel free to message us by clicking
            the link or messaging us on social.

            Message Us
*/}
        </>
    )
}
