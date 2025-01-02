import { cn } from "@/app/utils/utils"
import { Poppins } from "next/font/google"
import Image from "next/image"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] })


const ctaCn = "bg-[url('/projects/beginner/shortly/images/bg-boost-desktop.svg')] bg-no-repeat bg-cover"
const ficonCn = "hover:filter hover:invert-[79%] hover:sepia-[61%] hover:saturate-[464%] hover:hue-rotate-[130deg] hover:brightness-[89%] hover:contrast-[85%]"
const hamburguerCn = "cursor-pointer w-6 h-6 transition-all duration-250 relative"
const hamburguerCommonCn = "absolute w-6 h-[3px] top-0 left-0 bg-[#9c9aa6] rotate-0 transition-all duration-500"
const hamburguerTopCn = hamburguerCommonCn
const hamburguerMiddleCn = cn(hamburguerCommonCn, "translate-y-[7px]")
const hamburguerBottomCn = cn(hamburguerCommonCn, "translate-y-[14px]")


export default function Page() {
    return <div className={`${poppins.className}`} style={{
        "--cyan": 'hsl(180, 66%, 49%)',
        "--cyanLight": 'hsl(180, 66%, 69%)',
        "--darkViolet": 'hsl(257, 27%, 26%)',
        "--red": 'hsl(0, 87%, 67%)',
        "--grayishViolet": 'hsl(257, 7%, 63%)',
        "--veryDarkBlue": 'hsl(255, 11%, 22%)',
        "--veryDarkViolet": 'hsl(260, 8%, 14%) ',
    }}>
        <Navigation />
        <Hero />
        <Shorten />
        <Stats />
        <Feature />
        <CTA />
        <Footer />
    </div>
}

function Navigation() {
    return <nav className="relative container mx-auto p-6">
        {/* <!-- Flex Container For All Items --> */}
        <div className="flex items-center justify-between">
            {/* <!-- Flex Container For Logo/Menu --> */}
            <div className="flex items-center space-x-20">
                {/* <!-- Logo --> */}
                <Image src="/projects/beginner/shortly/images/logo.svg" alt="" width={100} height={100} />
                {/* <!-- Left Menu --> */}
                <div className="hidden space-x-8 font-bold lg:flex">
                    {["Features", "Pricing", "Resources"].map((item, i) => <a key={i} href="#" className="text-[var(--grayishViolet)] hover:text-[--veryDarkViolet]"
                    >{item}</a>)}
                </div>
            </div>

            {/* <!-- Right Buttons Menu --> */}
            <div
                className="hidden items-center space-x-6 font-bold text-[var(--grayishViolet)] lg:flex"
            >
                <div className="hover:text-[var(--veryDarkViolet)]">Login</div>
                <a
                    href="#"
                    className="px-8 py-3 font-bold text-white bg-[var(--cyan)] rounded-full hover:opacity-70"
                >Sign Up</a>
            </div>

            {/* <!-- Hamburger Button --> */}
            <button
                id="menu-btn"
                className={cn(hamburguerCn, "block lg:hidden focus:outline-none")}
                type="button"
            >
                <span className={hamburguerTopCn}></span>
                <span className={hamburguerMiddleCn}></span>
                <span className={hamburguerBottomCn}></span>
            </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
            id="menu"
            className="absolute hidden p-6 rounded-lg bg-[var(--darkViolet)] left-6 right-6 top-20 z-100"
        >
            <div
                className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm"
            >
                {["Features", "Pricing", "Resources"].map((item, i) => (<a href="#" key={i} className="w-full text-center">{item}</a>))}
                <a href="#" className="w-full pt-6 border-t border-gray-400 text-center">Login</a>
                <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">Sign Up</a>
            </div>
        </div>
    </nav>
}

function Hero() {
    return <section id="hero">
        {/* <!-- Hero Container --> */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            {/* <!-- Content Container --> */}
            <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
                <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left"
                >
                    More than just shorter links
                </h1>
                <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left"                    >
                    Build your brand&apos;s recognition and get detailed insights on how your
                    links are performing.
                </p>
                <div className="mx-auto lg:mx-0">
                    <a
                        href="#"
                        className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">
                        Get Started
                    </a>
                </div>
            </div>

            {/* <!-- Image --> */}
            <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2 relative">
                <Image src="/projects/beginner/shortly/images/illustration-working.svg" alt=""
                    // fill
                    // objectFit="contain"
                    // objectPosition="center"
                    width={400} height={400}
                    className="" />

            </div>
        </div>
    </section>
}
function Shorten() {

    const links = [
        {
            btnCn: "bg-[var(--cyan)]",
            link: "https://frontendmentor.io",
            shortLink: "https://rel.ink/k4IKyk",
        },
        {
            btnCn: "bg-[var(--darkViolet)]",
            link: "https://twitter.com/frontendmentor",
            shortLink: "https://rel.ink/gxOXp9",
        },
        {
            btnCn: "bg-[var(--cyan)]",
            link: "https://linkedin.com/frontend-mentor",
            shortLink: "https://rel.ink/gob3X9",
        },

    ]


    function Link({ btnCn, link, shortLink }) {
        return <div
            className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
        >
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
                {link}
            </p>

            <div
                className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
            >
                <div className="font-bold text-cyan">
                    {shortLink}
                </div>
                <button
                    className={cn("p-2 px-8 text-white  rounded-lg hover:opacity-70 focus:outline-none", btnCn)}
                >
                    Copy
                </button>
            </div>
        </div>
    }

    return <section id="shorten" className="relative bg-gray-100">
        {/* <!-- Shorten Container --> */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* <!-- Form --> */}
            <form
                id="link-form"
                className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-[var(--darkViolet)] rounded-lg md:flex-row md:space-y-0 md:space-x-3"
            >
                <input
                    type="text"
                    className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
                    placeholder="Shorten a link here"
                    id="link-input"
                />

                <button
                    className="px-10 py-3 text-white bg-[var(--cyan)] rounded-lg hover:bg-[var(--cyanLight)] focus:outline-none md:py-2"
                >
                    Shorten It!
                </button>

                {/* <!-- Error Message --> */}
                <div
                    id="err-msg"
                    className="absolute left-7 bottom-3 text-red text-sm italic"
                ></div>
            </form>
            {links.map((link, i) => <Link {...link} key={i} />)}

        </div>
    </section>
}
function Stats() {

    return <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
            <h2 className="text-4xl mb-6 font-bold text-center">Advanced Statistics</h2>
            <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
                Track how your links are performing across the web with our advanced
                statistics dashboard.
            </p>
        </div>
    </section>
}
function Feature() {

    const boxes = [
        {
            title: "Brand Recognition",
            text: "Boost your brand recognition with each click. Generic links don'tmean a thing. Branded links help instil confidence in your content.",
            boxCn: "",
            image: "/projects/beginner/shortly/images/icon-brand-recognition.svg"
        },
        {
            title: "Detailed records",
            text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            boxCn: "mt-24 md:mt-8 md:w-1/3",
            image: "/projects/beginner/shortly/images/icon-detailed-records.svg"
        },
        {
            title: "Fully customizable",
            text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
            boxCn: "mt-24 md:mt-16 md:w-1/3",
            image: "/projects/beginner/shortly/images/icon-fully-customizable.svg"
        },
    ]
    function Box({ boxCn, title, text, image }) {
        const boxClassName = cn("relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 rounded-lg", boxCn)
        return <div
            className={boxClassName}
        >
            {/* <!-- Image Positioning --> */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                {/* <!-- Image Container For Background & Center --> */}
                <div
                    className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-[var(--veryDarkViolet)]"
                >
                    <Image src={image} alt="" width={50} height={50} />
                </div>
            </div>
            <h5
                className="pt-6 text-xl font-bold text-center capitalize md:text-left"
            >
                {title}
            </h5>
            <p className="text-center text-gray-400 md:text-left">
                {text}
            </p>
        </div>
    }
    return <section id="features" className="pb-32 bg-gray-100">
        <div
            className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7"
        >
            {/* <!-- Horizontal Line --> */}
            <div
                className="hidden absolute top-24 w-10/12 left-16 h-3 bg-[var(--cyan)] md:block"
            ></div>
            {/* <!-- Vertical Line --> */}
            <div className="absolute w-2 left-1/2 h-full -ml-1 bg-[var(--cyan)] md:hidden"></div>

            {boxes.map((box, i) => <Box {...box} key={i} />)}

        </div>
    </section>
}
function CTA() {

    return <section id="cta" className={cn(ctaCn, "py-24 bg-[var(--darkViolet)]")}>
        <div className="flex flex-col p-2 space-y-6">
            <h5
                className="mx-auto space-y-10 text-4xl font-bold text-center text-white"
            >
                Boost your links today
            </h5>
            <button
                className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-[var(--cyanLlight)] md:text-base md:py-3 focus:outline-none"
            >
                Get Started
            </button>
        </div>
    </section>
}

function Footer() {
    function Menu({ title, links }) {
        return <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">{title}</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
                {links.map((link, i) => <a href="#" className="capitalize text-[var(--grayishViolet)] hover:text-[var(--cyan)]" key={i}>{link}</a>)}
            </div>
        </div>
    }
    const menus = [
        { title: "Features", links: ["Link shortening", "Branded links", "Analytics"] },
        { title: "Resources", links: ["Blog", "Developers", "Support"] },
        { title: "Company", links: ["About", "Our Team", "Careers", "Contact"] }
    ]
    return <footer className="py-16 bg-[var(--veryDarkViolet)]">
        <div
            className="container flex flex-col items-center  mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start" >
            {/* <!-- Logo --> */}
            <Image src="/projects/beginner/shortly/images/logo.svg" alt="" width={150} height={150} className="mr-16" />

            {/* <!-- Menus Container --> */}
            <div
                className="flex flex-col  justify-between space-y-16 md:space-x-20 md:flex-row md:space-y-0"
            >
                {menus.map((menu, i) => <Menu {...menu} key={i} />)}
                {/* <!-- Social Container --> */}
                <div className="flex space-x-6 w-full">
                    <a href="#">
                        <Image src="/projects/beginner/shortly/images/icon-facebook.svg" alt="" className={ficonCn} width={100} height={100} />
                    </a>
                    <a href="#">
                        <Image src="/projects/beginner/shortly/images/icon-twitter.svg" alt="" className={ficonCn} width={100} height={100} />
                    </a>
                    <a href="#">
                        <Image src="/projects/beginner/shortly/images/icon-pinterest.svg" alt="" className={ficonCn} width={100} height={100} />
                    </a>
                    <a href="#">
                        <Image src="/projects/beginner/shortly/images/icon-instagram.svg" alt="" className={ficonCn} width={100} height={100} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
}
