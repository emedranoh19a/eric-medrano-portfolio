import { cn } from "@/app/utils/utils"
import { Big_Shoulders_Display, Lexend_Deca } from "next/font/google"
import Image from "next/image"
import LuxuryIcon from "./images/icon-luxury.svg"
import SedansIcon from "./images/icon-sedans.svg"
import SuvsIcon from "./images/icon-suvs.svg"
//normal
const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: ["400"] })
//semibold
const bigShouldersDisplay = Big_Shoulders_Display({ subsets: ["latin"], weight: ["700"] })

const items = [
    {
        title: "Sedans",
        icon: SedansIcon,
        className: "bg-[var(--bright-orange)]",
        buttonClassName: "text-[var(--bright-orange)]",
        description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
    },
    {
        title: "SUVs",
        icon: SuvsIcon,
        className: "bg-[var(--dark-cyan)]",
        buttonClassName: "text-[var(--dark-cyan)]",
        description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
    },
    {
        title: "Luxury",
        icon: LuxuryIcon,
        className: "bg-[var(--very-dark-cyan)]",
        buttonClassName: "text-[var(--very-dark-cyan)]",
        description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
    }
]

export default function Page() {
    return <StylesSetup>
        <Cards />
    </StylesSetup>
}

function StylesSetup({ children }) {
    return <div className={`w-full min-h-screen px-6 py-[88px] grid place-items-center bg-[var(--very-light-gray)] ${lexendDeca.className}`}
        style={{
            "--bright-orange": "#e38826",
            "--dark-cyan": "#006970",
            "--very-dark-cyan": "#004241",
            "--transparent-white": "rgba(255, 255, 255, 0.75)",
            "--very-light-gray": "hsl(0, 0%, 95%)"
        }}>{children}</div>
}

function Cards() {
    return <div className="rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">{items.map((item, i) => <Card key={i} {...item} />)}</div>
}

function Card({ className, buttonClassName, title, icon, description }) {
    const containerStyles = cn("relative z-0 group p-12", "flex flex-col", "gap-10", className)
    const buttonStyles = cn(
        "px-8 py-3 bg-[var(--very-light-gray)]",
        "rounded-full text-[15px] z-20",
        "border-2 border-[var(--very-light-gray)]",
        "transition-colors hover:bg-transparent hover:text-[var(--very-light-gray)]",
        buttonClassName)

    return <div className={containerStyles}>
        <div className="absolute w-full h-full bg-black/20 top-0 left-0 z-10 group-hover:bg-black/0 transition-colors">
            {/* Overlay */}
        </div>
        <div className="relative w-16 h-10 z-20">
            <Image
                fill
                className="object-contain"
                alt={title}
                src={icon}
            />
        </div>
        <h2 className={`text-[var(--very-light-gray)] text-[40px] font-bold z-20 ${bigShouldersDisplay.className}`}>
            {title}
        </h2>
        <p className="text-[var(--transparent-white)] text-[15px] leading-[25px] max-w-[212px] z-20">{description}</p>
        <button className={buttonStyles}>Learn More</button>
    </div>
}
