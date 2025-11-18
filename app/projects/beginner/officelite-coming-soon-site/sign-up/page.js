import clsx from "clsx"
import Image from "next/image"
import Navbar from "../components/sections/Navbar"
import Counter from "../components/ui/Counter"
import Form from "../components/ui/form/Form"
import StyleSetup from "../components/ui/StyleSetup"
import { bgPatternSide } from "./sign-up-assets"

export default function Page() {

    return (
        <StyleSetup>
            <div className="container mx-auto">
                <Background />
                <Navbar />
                <div className="flex flex-col pb-20 sm:pb-[119px] lg:pb-[285px] gap-20 justify-between lg:flex-row items-center">
                    <Content />
                    <Form />
                </div>
            </div>
        </StyleSetup>
    )
}
function Content() {
    return <div className="text-center lg:text-left">
        <h1 className="preset-1 text-neutral-800 mb-6">Work smarter. Save time.</h1>
        <p className="preset-3 text-neutral-500 mb-10">Easily manage your projects. Get on the list and receive in-app perks available only to
            early subscribers. We are moving into final development and getting ready for official launch soon.
        </p>
        <Counter formStyles className="mx-auto lg:ml-0 max-w-[445px]" />
    </div>
}

function Background() {
    const backgroundStyles = clsx(
        "bg-neutral-900 absolute -z-10",
        "bottom-0 w-screen h-[316px]  right-1/2 translate-x-[50vw]",
        "sm:h-[473px]",
        "lg:right-0 lg:w-[420px] lg:h-screen lg:translate-x-0 lg:top-0 lg:botton-none"
    )
    const imageContainerStyles = clsx("relative size-[1454px] lg:size-[2036px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-[calc(50%+100px)]")
    return <div className={backgroundStyles}>
        <div className="relative w-full h-full overflow-hidden">
            <div className={imageContainerStyles}>
                <Image src={bgPatternSide} alt="" className="object-contain " fill />
            </div>
        </div>
    </div>
}


