"use client"
import { useRouter } from "next/navigation";
import { homeImageHeroCoffeePress, homeImageHeroCoffeePressMobile, homeImageHeroCoffeePressTablet } from "../../assets/assetIndex";
import Button from "../../ui/Button";
import HeaderContainer from "../../ui/HeaderContainer";

export default function Hero() {
    const router = useRouter();
    return <section className="mb-20 bg-black-500">
        <HeaderContainer imgMobile={homeImageHeroCoffeePressMobile} imgTablet={homeImageHeroCoffeePressTablet} imgDesktop={homeImageHeroCoffeePress}>
            <div className="text-light-cream mx-auto sm:ml-0 max-w-69.75 sm:max-w-99.5 lg:max-w-123.25">
                <h1 className="mb-6 lg:mb-8 heading-2 sm:text-[48px] lg:heading-1">
                    Great coffee <br />
                    made simple.
                </h1>
                <p className="mb-10 lg:mb-14 body text-light-cream/80">
                    Start your mornings with the world&apos;s best coffees. Try our expertly curated artisan
                    coffees from our best roasters delivered directly to your door, at your schedule.
                </p>
                <Button label="Create your plan" onClick={() => router.push("/projects/intermediate/coffee-roasters-subscription-site/subscribe")} />
            </div>
        </HeaderContainer>
    </section>
}


