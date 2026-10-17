import { aboutImageHeroWhiteCup, aboutImageHeroWhiteCupMobile, aboutImageHeroWhiteCupTablet } from "../../assets/assetIndex";
import HeaderContainer from "../../ui/HeaderContainer";

export default function Header() {
    return <section className="header mb-30 sm:mb-36 lg:mb-42">
        <HeaderContainer
            imgMobile={aboutImageHeroWhiteCupMobile}
            imgTablet={aboutImageHeroWhiteCupTablet}
            imgDesktop={aboutImageHeroWhiteCup}
        >
            <div className="text-light-cream mx-auto sm:ml-0 max-w-69.75 sm:max-w-99.5 lg:max-w-111.25">
                <h1 className="mb-6 lg:mb-8 heading-2 sm:text-[48px] lg:heading-1">
                    About Us
                </h1>
                <p className="body text-light-cream/80">
                    Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
                </p>
            </div>
        </HeaderContainer>

    </section>
}

