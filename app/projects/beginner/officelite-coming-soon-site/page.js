import clsx from "clsx"
import Image from "next/image"
import CTA from "./components/sections/CTA"
import Hero from "./components/sections/Hero"
import Navbar from "./components/sections/Navbar"
import Pricing from "./components/sections/Pricing"
import StyleSetup from "./components/ui/StyleSetup"
import { bgPatternHeader } from "./home-assets"

export default function Page() {
    const shapeStyles = clsx(
        "absolute -z-10",
        "size-[460px] -top-[174px] left-1/2 -translate-x-1/2",
        "sm:size-[666px] sm:-top-[158px] sm:left-[376px] sm:translate-x-0",
        "lg:size-[1134px] lg:-top-[420px] lg:left-[665px]")
    return (
        <StyleSetup>
            <div className="container mx-auto">
                <div className={shapeStyles}>
                    <Image src={bgPatternHeader} alt="" fill className="object-contain" />
                </div>

                <Navbar />
                <Hero />
                <Pricing />
                <CTA />
            </div>
        </StyleSetup>
    )
}

//TODO: - See error states when the contact form is submitted if:
//TODO:   - The `Name` and/or `Email Address` fields are empty
//TODO:   - The `Email Address` is not formatted correctly
//TODO: - **Bonus**: See a custom-styled `select` form control in the sign-up form
