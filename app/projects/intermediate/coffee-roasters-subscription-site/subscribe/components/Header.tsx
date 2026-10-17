import { planImageHeroBlackCup, planImageHeroBlackCupMobile, planImageHeroBlackCupTablet } from "../../assets/assetIndex";
import HeaderContainer from "../../ui/HeaderContainer";

export default function Header() {
    return <section className="header mb-30 sm:mb-36 lg:mb-42">
        <HeaderContainer
            imgMobile={planImageHeroBlackCupMobile}
            imgTablet={planImageHeroBlackCupTablet}
            imgDesktop={planImageHeroBlackCup}>
            <div className=" text-light-cream mx-auto sm:ml-0 max-w-69.75 sm:max-w-99.5 lg:max-w-121.5">
                <h1 className="mb-6 lg:mb-8 heading-2 sm:text-[48px] lg:heading-1">
                    Create a plan
                </h1>
                <p className="body text-light-cream/80">
                    Build a subscription plan that best fits your needs. We offer an assortment of the best
                    artisan coffees from around the globe delivered fresh to your door.
                </p>
            </div>
        </HeaderContainer>
    </section>
}

