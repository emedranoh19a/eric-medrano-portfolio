import { Poppins } from "next/font/google"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] })
export default function Page() {
    return <div className={`${poppins.className} grid place-items-center text-white relative z-0 w-full min-h-screen bg-[#684BB1] px-10 lg:px-20 py-10`}>
        <div className="w-full h-full">

            <Image className="absolute object-cover -z-10 hidden lg:block" fill alt="" src="/projects/newbie/huddle-landing-page-with-single-introductory-section/bg-desktop.svg" />
            <Image className="absolute object-cover -z-10 lg:hidden" fill alt="" src="/projects/newbie/huddle-landing-page-with-single-introductory-section/bg-mobile.svg" />
            <div className="relative flex flex-col h-full justify-between">

                <Logo />
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-16">

                    <Illustration />
                    <Content />
                </div>
                <SocialMedia />
            </div>
        </div>
    </div>
}

function Logo() {
    return <div className="relative w-36 sm:w-56 h-20 ">
        <Image alt="Huddle logo" fill className="object-contain" src="/projects/newbie/huddle-landing-page-with-single-introductory-section/logo.svg" />
    </div>
}
function Illustration() {
    return <div className="relative w-full h-[209px] lg:h-[493px]">
        <Image alt="Huddle mockups" fill className="object-contain" src="/projects/newbie/huddle-landing-page-with-single-introductory-section/illustration-mockups.svg" />
    </div>
}
function Content() {
    return <div className="flex flex-col gap-6 items-center lg:items-start lg:mt-20 text-center lg:text-left">
        <h1 className="font-semibold text-[40px] leading-[60px] ">Build The Community Your Fans Will Love</h1>
        <p className="max-w-md mb-6 font-normal text-[18px] leading-[27px]" >Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
        <button className="text-[#684BB1] bg-white rounded-full lg:px-16 px-[76px] py-4 w-fit shadow-xl transition-colors hover:bg-[#E880E8] hover:text-white">Register</button>
    </div>
}
function SocialMedia() {
    return <div className=" mt-10 flex w-full justify-center lg:justify-end flex-row gap-4 h-7 lg:h-10 hover:fill-[#FF52C1] flex w-fit">
        <SNSIcon />
        <SNSIcon variant="twitter" />
        <SNSIcon variant="instagram" />
    </div>
}

function SNSIcon({ variant = "facebook" }) {
    return <button className="group transition-colors  h-full aspect-square rounded-full border border-white hover:border-[#FF52C1] grid place-items-center">
        {variant === "facebook" ? <FaFacebookF className="transition-colors group-hover:fill-[#FF52C1]" /> : variant === "twitter" ? <FaTwitter className="transition-colors group-hover:fill-[#FF52C1]" /> : <FaInstagram className="transition-colors group-hover:fill-[#FF52C1]" />}
    </button>
}
