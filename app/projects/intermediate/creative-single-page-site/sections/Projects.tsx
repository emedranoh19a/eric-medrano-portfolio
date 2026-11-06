import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { imageSlide1Desktop, imageSlide1Mobile, imageSlide1Tablet } from "../assets/assetIndex";
import { ArrowButton, Wave } from "../components";

const projects = [
    { project: "Lean Product Roadmap", year: 2019, projectAttribute: "Brand naming & guidelines" },
    { project: "New Majestic Hotel", year: 2018, projectAttribute: "Brand identity & merchandise" },
    { project: "Crypto Dashboard", year: 2016, projectAttribute: "Brand identity & web design" }
]
export default function Projects() {
    return <section id="projects" className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 relative">
            <Preview />
            <Controls />

        </div>
    </section>
}

function Preview() {
    //The base
    const containerStyles = cn("h-101 w-full relative z-0 order-first sm:order-last");
    //The hanged element
    const bleedStyles = cn(
        "absolute -z-10 w-screen h-full left-1/2 translate-x-[-50vw]",
        "sm:w-[50vw] sm:translate-x-0 sm:left-0",
    )
    const gradientStyles = cn(
        "bg-linear-to-b from-transparent to-black",
        "h-27.75 sm:h-32.5 lg:h-50 w-screen sm:w-[50vw]",
        "left-1/2 translate-x-[-50vw] sm:left-0 sm:translate-x-0",
        "absolute bottom-0");
    return <>
        <div className={containerStyles}>
            <div className={bleedStyles}>
                <Image src={imageSlide1Mobile} className="object-cover sm:hidden" fill alt="" />
                <Image src={imageSlide1Tablet} className="object-cover hidden sm:inline-block lg:hidden" fill alt="" />
                <Image src={imageSlide1Desktop} className="object-cover hidden lg:inline-block" fill alt="" />
            </div>
            <div className={gradientStyles} />
            <div className="text-white absolute bottom-8.75 sm:bottom-11.25 lg:bottom-17 right-0">
                <h3 className="font-extrabold text-[15px]/5 lg:text-[20px]/8">Project title</h3>
                <p className="font-normal text-[15px]/5 lg:text-[18px]/8">2019 project</p>
            </div>
        </div>
    </>
}

function Controls() {

    const backgroundStyles = cn(
        "absolute bg-bg-black -z-10 top-0 h-full",
        "w-screen right-1/2 translate-x-[50vw]",
        "sm:w-[50vw] sm:right-0 sm:translate-x-0",
        //  "w-screen right-1/2 translate-x-[50vw] h-full",
        // "w-[50vw]",
        // "sm:w-[50vw] sm:left-0 sm:translate-x-0",
        "");

    return <div className="relative w-full py-10 sm:py-50 lg:py-38 z-10">
        <div className={backgroundStyles} />
        <Wave variant="white" className="sm:top-31.5 lg:top-46.5 right-0 hidden sm:inline-block translate-x-1/2" />
        <h2 className="text-white h2 mb-6 sm:mb-8 lg:mb-12.75">
            Brand naming & guidelines
        </h2>
        <div className="flex gap-4">
            <ArrowButton variant="left" />
            <ArrowButton variant="right" />
        </div>
    </div >
}
