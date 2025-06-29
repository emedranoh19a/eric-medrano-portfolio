import clsx from "clsx"
import { Libre_Franklin } from "next/font/google"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6"

const libreFranklin = Libre_Franklin({ subsets: ["latin"], weight: ["300", "600", "700"] })

export default function Page() {
    return <div className={`bg-white w-full min-h-screen relative pt-20 flex flex-col items-center px-9 ${libreFranklin.className}`}>
        <Hero />
        <Illustration />
        <Footer />
    </div>
}
function Logo() {
    return <div className="relative mx-auto w-14 h-6 mb-8 lg:mb-10">
        <Image alt="Ping logo" className="object-contain" fill src="/projects/newbie/ping/logo.svg" />
    </div>
}
function Hero() {
    const titleStyles = clsx("font-light mb-4",
        "text-[22px] text-[#969696] leading-[32px] tracking-0",
        "lg:text-[48px] lg:text-[#969696] lg:leading-[60px] lg:tracking-0")

    return <div className="mb-[72px] lg:mb-[94px] max-w-[302px] lg:max-w-[637px] mx-auto text-center">
        <Logo />
        <h1 className={titleStyles}>
            We are launching <span className="text-[#15202A] font-bold">soon!</span>
        </h1>
        <p className="text-[#15202A] text-[12px] lg:text[20px] font-light mb-[32px]">
            Subscribe and get notified
        </p>
        <form className="flex flex-col gap-2.5 lg:flex-row w-full">
            <input placeholder="Your email address..." className=" flex-1 border border-[#C2D3FF] rounded-full py-[18px] pl-[32px] w-full" />


            <button className="bg-[#4C7BF3] lg:w-[40%] shadow-xl shadow-[0px_5px_10px_2px_rgba(76,123,243,0.230414)] rounded-full font-semibold text-[16px] text-white py-[18px] px-[62px] w-full"> Notify Me</button>
        </form>
    </div>
}
function Illustration() {
    return <div className="flex-1 w-full text-center grid place-items-center">
        <div className="lg:mb-18 mb-28 relative mx-auto inline-block  w-full max-w-[320px] sm:max-w-none h-[192px] lg:w-[640px] sm:h-[383px]">
            <Image src="/projects/newbie/ping/illustration-dashboard.png" fill alt="dashboard" className="object-contain" />
        </div>
    </div>
}
function Footer() {
    return <div className="mx-auto text-center pb-[37px]">
        <div className="w-full flex justify-center gap-3 mb-6">
            <SNSIcon variant="facebook" />
            <SNSIcon variant="twitter" />
            <SNSIcon variant="instagram" />
        </div>
        <p className="font-light">&copy; Copyright Ping. All rights reserved.</p></div>
}

function SNSIcon({ variant = "facebook" }) {
    const iconContainerStyles = clsx("border border-[#4C7BF3] border-opacity-[14%] rounded-full p-2 grid place-items-center")
    const iconStyles = clsx("fill-[#4C7BF3] w-[15px] aspect-square ")
    return <div className={iconContainerStyles}>
        {variant === "facebook" ? <FaFacebookF className={iconStyles} /> :
            variant === "twitter" ? <FaTwitter className={iconStyles} /> :
                <FaInstagram className={iconStyles} />
        }
    </div>
}
