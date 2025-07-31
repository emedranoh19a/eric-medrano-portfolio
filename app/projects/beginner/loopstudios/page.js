"use client"
import { cn } from "@/app/utils/utils"
import Image from "next/image"

const btnCn = "px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white"
const itemContainerCn = "flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8"
const itemCn = "relative overflow-hidden md:w-1/4"
const itemGradientCn = "absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"

const hamburguerCn = "cursor-pointer w-[24px] h-[24px] transition-all duration-200 ease-in-out"
const hamburguerIconCommon = "absolute w-[24px] h-[2px] top-0 left-0 bg-white rotate-0 transition-all duration-500"
const hamburguerTopCn = ""
const hamburguerMiddleCn = "translate-y-[7px]"
const hamburguerBottom = "translate-y-[14px]"

import { Alata } from "next/font/google"
import { useState } from "react"
import { curiosityDesktop, curiosityMobile, deepEarthDesktop, deepEarthMobile, fisheyeDesktop, fisheyeMobile, fromAboveDesktop, fromAboveMobile, gridDesktop, gridMobile, iconFacebook, iconInstagram, iconPinterest, iconTwitter, imgHeroDesktop, imgHeroMobile, interactiveDesktop, logo, nightArcadeDesktop, nightArcadeMobile, pocketBorealisDesktop, pocketBorealisMobile, soccerTeamDesktop, soccerTeamMobile } from "./imageIndex"
const alata = Alata({ subsets: ["latin"], weight: "400" })

const labels = ["About", "Careers", "Events", "Products", "Support"]

export default function Page() {
    return <div className="bg-white w-full min-h-screnn">
        <Hero />
        <Features />
        <Creations />
        <Footer />
    </div>

}
function Hero() {
    //State: 
    const [open, setOpen] = useState(false)
    //Style:

    const buttonStyles = cn(hamburguerCn, "z-40 block md-hidden focus:outline-none top-5 left-5")

    const hamburguerTopStyles = cn(hamburguerIconCommon, hamburguerTopCn)
    const hamburguerMiddleStyles = cn(hamburguerIconCommon, hamburguerMiddleCn)
    const hamburguerBottomStyles = cn(hamburguerIconCommon, hamburguerBottom)

    //TODO: Implement open functionality



    // //   .open .hamburger-middle {
    // //     display: none;
    // //   }

    // //   .open .hamburger-bottom {
    // //     transform: rotate(-45deg) translateY(6px) translateX(-6px);
    // //   }

    return <section id="hero" className="relative z-0 pt-10 md:pt-0 bg-center md:bg-cover">
        <div className="absolute inset-0 -z-10">
            <Image src={imgHeroMobile} fill className="object-cover md:hidden" alt="Man with VR" />
            <Image src={imgHeroDesktop} fill className="object-coverhidden md:block" alt="Man with VR" />
        </div>
        <div className="container max-w-6xl mx-auto px-6 py-12">
            <nav className="flex items-center justify-between font-bold text-white">
                <Image src={logo} width={100} height={100} alt="" />
                <Menu />
                <div className="md:hidden relative">
                    <button
                        id="menu-btn"
                        type="button"
                        className={cn(buttonStyles, open && "rotate-90")}
                        onClick={() => setOpen((s) => !s)}
                    >
                        <span className={cn(hamburguerTopStyles, open && "rotate-45 translate-y-[6px] translate-x-[6px]")}></span>
                        <span className={cn(hamburguerMiddleStyles, open && "hidden")}></span>
                        <span className={cn(hamburguerBottomStyles, open && "-rotate-45 translate-y-[6px] translate-x-[6px]")}></span>
                    </button>
                </div>
            </nav>

            <div
                id="menu"
                className={cn("absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black",
                    open && "flex hidden")}
            >
                {labels.map((label, i) => <a href="#" className="hover:text-pink-500" key={i}>{label}</a>)}

            </div>

            <div
                className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl"
            >
                Impressive Experiences That Deliver
            </div>
        </div>
    </section >
}


function Menu() {
    return <div className={`hidden h-10  md:flex md:space-x-8 ${alata.className}`}>
        {labels.map((label, i) => <MenuItem key={i} label={label} />)}
    </div>
}
function MenuItem({ label }) {
    return <div className="group">
        <a href="#">{label}</a>
        <div
            className="mx-2 group-hover:border-b group-hover:border-blue-50"
        />
    </div>
}

function Features() {
    return <section id="feature">
        <div
            className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0"
        >
            {/* <!-- Image --> */}
            <Image className="-translate-y-10" src={interactiveDesktop} width={600} height={500} alt="Man with VR Interactive device." />
            {/* <!-- Text Container --> */}
            <div
                className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20"
            >
                <h2
                    className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
                >
                    The leader in interactive VR
                </h2>

                <p className="max-w-md text-center md:text-left">
                    Founded in 2011, Loopstudios has been producing world-class virtual
                    reality projects for some of the best companies around the globe.
                    Our award-winning creations have transformed businesses through
                    digital experiences that bind to their brand.
                </p>
            </div>
        </div>
    </section>
}

function Creations() {
    const creations = [
        {
            desktopImage: deepEarthDesktop,
            mobileImage: deepEarthMobile,
            title: "Deep Earth"
        },
        {
            desktopImage: nightArcadeDesktop,
            mobileImage: nightArcadeMobile,
            title: "Night Arcade"
        },
        {
            desktopImage: soccerTeamDesktop,
            mobileImage: soccerTeamMobile,
            title: "Soccer Team"
        },
        {
            desktopImage: gridDesktop,
            mobileImage: gridMobile,
            title: "The Grid"
        },
    ]
    const secondCreations = [
        {
            desktopImage: fromAboveDesktop,
            mobileImage: fromAboveMobile,
            title: "From Up Above VR"
        },
        {
            desktopImage: pocketBorealisDesktop,
            mobileImage: pocketBorealisMobile,
            title: "Pocket Borealis"
        },
        {
            desktopImage: curiosityDesktop,
            mobileImage: curiosityMobile,
            title: "The Curiosity"
        },
        {
            desktopImage: fisheyeDesktop,
            mobileImage: fisheyeMobile,
            title: "Make it Fisheye"
        },
    ]
    function Creation({ desktopImage, mobileImage, title }) {
        const creationContainerStyles = cn(itemCn, "group")
        return <div className={creationContainerStyles}>
            {/* <!-- Desktop Image --> */}
            {/* {desktopPath, mobilePath} */}
            <Image
                src={desktopImage}
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                width={500} height={500}
            // fill
            // objectFit="cover"
            // objectPosition="center"

            />
            {/* <!-- Mobile Image --> */}
            <Image
                src={mobileImage}
                alt=""
                className="w-full md:hidden"
                width={500}
                height={500}
            />
            {/* <!-- Item Gradient --> */}
            <div className={itemGradientCn}></div>
            {/* <!-- Item Text --> */}
            <Heading as="h5" className="text-white" text={title} />
        </div>

    }

    return <section id="creations">
        {/* <!-- Creations Container --> */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
            {/* <!-- Creations Header --> */}
            <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                    Our Creations
                </h2>

                <button className="hidden btn md:block">See All</button>
            </div>

            {/* <!-- Items Container --> */}
            <div className={itemContainerCn}>
                {creations.map((creation, i) => <Creation key={i} {...creation} />)}
            </div>
            {/* <!-- Item Container 2 --> */}
            <div className={cn(itemContainerCn, "mt-10")} >
                {secondCreations.map((secondCreation, i) => <Creation key={i} {...secondCreation} />)}

            </div>
            {/* <!-- Bottom Button Container --> */}
            <div className="flex justify-center mt-10 md:hidden">
                <button className={cn(btnCn, "w-full md:hidden")} > See All</button>
            </div>
        </div>
    </section >
}

function Footer() {

    function Item({ text }) {
        return <div className="h-10 group">
            <a href="#">{text}</a>
            <div
                className="mx-2 group-hover:border-b group-hover:border-blue-50"
            ></div>
        </div>
    }
    function SocialIcon({ src }) {
        return <div className="h-8 group">
            <a href="#">
                <Image src={src} alt="" className="h-6" width={30} height={20} />
            </a>
        </div>
    }

    const icons = [
        iconFacebook,
        iconTwitter,
        iconPinterest,
        iconInstagram
    ]
    return <footer className="bg-black">
        {/* <!-- Container --> */}
        <div className="container max-w-6xl py-10 mx-auto">
            {/* <!-- Footer Flex Container --> */}
            <div
                className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start"
            >
                {/* <!-- Menu & Logo Container --> */}
                <div
                    className="flex flex-col items-center space-y-8 md:items-start md:space-y-4"
                >
                    {/* <!-- Logo --> */}
                    <div className="h-8">
                        <Image src={logo} alt="" className="w-44 md:ml-3" height={100} width={100} />
                    </div>
                    {/* <!-- Menu Container --> */}
                    <div
                        className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3"
                    >
                        {labels.map((label, i) => <Item key={i} text={label} />)}

                    </div>
                </div>

                {/* <!-- Social & Copy Container --> */}
                <div
                    className="flex flex-col items-start justify-between space-y-4 text-gray-500"
                >
                    {/* <!-- icons Container --> */}
                    <div
                        className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0"
                    >
                        {icons.map((icon, i) => <SocialIcon key={i} src={icon} />)}

                    </div>

                    {/* <!-- Copy --> */}
                    <div className="font-bold">
                        &copy; 2022 Loopstudios. All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

function Heading({ as = "h5", text, className = "" }) {
    const headingStyles = cn(
        as === "h5" && "absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black",
        "", "", className)
    if (as === "h5") return <h5 className={headingStyles}>{text}</h5>
    return <>{text}</>
}
