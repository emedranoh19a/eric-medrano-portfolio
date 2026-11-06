import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import { imageStrategicDesktop, imageStrategicMobile, imageStrategicTablet } from "../assets/assetIndex";
import { Button, Wave } from "../components";

export default function About() {
    return <section id="about" className="relative">
        <div className="z-0 grid grid-cols-1 sm:grid-cols-2 text-white w-full mx-auto">
            <div className="bg-bg-black absolute h-full w-screen left-1/2 translate-x-[-50vw] -z-10" />
            <AboutImage />
            {/* Empty div for the grid layout */}
            <div />
            <AboutContent />
        </div>
    </section>
}
function AboutImage() {
    const imageStyles = clsx(
        "h-50 -z-10 w-full inline-block left-1/2 -z-10",
        "sm:absolute sm:left-1/2 sm:translate-x-[-50vw] sm:w-[50vw] sm:h-full",
    );
    return <div className={imageStyles}>
        <div className="h-full w-full relative">
            <Image fill src={imageStrategicMobile} className="sm:hidden object-cover" alt="stategic" />
            <Image fill src={imageStrategicTablet} className="inline-block lg:hidden object-cover" alt="stategic" />
            <Image fill src={imageStrategicDesktop} className="hidden lg:inline-block object-cover" alt="stategic" />
        </div>
    </div>
    //continued development: I couln't achieve the full-bleed layout of the mobile image

}
function AboutContent() {
    const waveStyles = cn(
        "bottom-full translate-y-[-58px]",
        "sm:right-full sm:translate-x-[-38px] sm:translate-y-1/2 sm:bottom-1/2",
        "lg:translate-x-[-86px]",
    )
    return <div className="w-full py-18 sm:py-30 sm:pl-17.5 lg:pl-43.5 lg:py-50 max-w-111.25">
        <h2 className="h2 mb-6 sm:mb-8 lg:mb-11 relative">
            <Wave variant="red" className={waveStyles} />
            <span className="text-red">
                Design{" "}
            </span>
            is strategic.
        </h2>
        <p className="mb-10 sm:mb-8 lg:mb-12">
            A well-crafted design strategy consistently produces desired outcomes and brand awareness.
            We are firm believers that success lies in creative collaboration with our clients.
        </p>

        <Button text="Schedule a call" color="red" variant="outline" />
    </div>
}

