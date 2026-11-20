import { cn } from "@/app/utils/utils"
import { Rubik } from "next/font/google"
import Phoneillustration from "./PhoneIllustration"

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500"] })

export default function Page() {

    const containerClassName = cn(
        "relative z-0 antialiased overflow-hidden",
        "bg-[#fafafa] min-h-screen max-w-screen h-fit",
        "flex flex-col lg:flex-row lg:justify-center items-center gap-16 lg:gap-[125px]",
        "py-16 px-8",
        rubik.className
    )

    return <div className={containerClassName}>

        <Ornamental className="-z-10 left-0 top-1/2 -translate-y-full -translate-x-1/2 " />
        <Ornamental className="opacity-4 -z-10 right-0 bottom-1/2 translate-y-full translate-x-1/2" />


        <Phoneillustration />
        <Content />

    </div>
}

function Content() {
    return <div className="max-w-111.25">
        <h1 className="mb-6 text-[40px] font-medium tracking-normal text-[#3E2753]">
            Simple booking
        </h1>
        <p>
            Stay in touch with our dog walkers through the chat interface.
            This makes it easy to discuss arrangements and make bookings.
            Once the walk has been completed you can rate your walker and book again all through the chat.
        </p>
    </div>
}

function Ornamental({ className }) {
    const ornamentalStyles = cn("absolute w-127.5 h-254.5 rounded-[255px] bg-[linear-gradient(225deg,#E844FF_0%,#8739FF_100%)]", className)
    return <div className={ornamentalStyles} />
}
