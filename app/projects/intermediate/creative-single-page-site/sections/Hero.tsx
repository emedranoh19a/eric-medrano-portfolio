import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { imageHeroDesktop, imageHeroMobile, imageHeroTablet } from "../assets/assetIndex";
import { Button } from "../components";

export default function Hero() {
    const imageStyles = cn(
        "-z-10",
        "h-50 w-screen",
        "absolute top-0 right-1/2 translate-x-[50vw]",
        "sm:translate-x-[50vw] sm:w-[438px] sm:h-full",
        "lg:w-[895px]"
    );
    return <section id="hero">
        <div className="w-full relative">
            <div className="h-50 sm:hidden" />
            <div className={imageStyles}>
                <Image src={imageHeroMobile} className="object-cover sm:hidden" fill alt="workers" />
                <Image src={imageHeroTablet} className="object-cover hidden sm:inline-block lg:hidden" fill alt="workers" />
                <Image src={imageHeroDesktop} className="object-cover hidden lg:inline-block" fill alt="workers" />
            </div>
            <div className="pt-14 pb-24 max-w-99.5 lg:max-w-182.5">
                <h1 className="h1 mb-4 sm:mb-5 lg:mb-10 text-pretty">
                    Branding & <br className="hidden sm:inline" />website design agency
                </h1>
                <p className="mb-10 sm:mb-8 lg:mb-12 max-w-[540px]">
                    We specialize in visual storytelling by creating cohesive brand and website design
                    solutions for small businesses, giving lasting impressions to audiences in a digital world.
                </p>
                <Button text="Learn more" variant="filled" color="red" />
            </div>
        </div>
    </section>
}
