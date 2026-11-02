"use client"
import { Scales } from "@/app/(home)/components/vendors/Scales";
import { ProjectPage } from "@/app/data/projects/Proyect.types";
import { useLanguage } from "@/app/hooks/LanguageProvider";
import Image from "next/image";
import Subsection from "../../../components/Typography/Subsection";
import Subtitle from "../../../components/Typography/Subtitle";
// import preview from "./3-devices-black-cropped.png";
type PageScreenshots = {
    pages: ProjectPage[]
}
export default function PageScreenshots({ pages }: PageScreenshots) {
    // return <div id="page-previews" className="bg-white mb-10 border-y-2 border-dashed border-neutral-200">
    return <Subsection id="links">
        <Subtitle text="Screenshots" />
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-y-2 border-dashed border-neutral-200/80 divide-y-2 divide-x-2 divide-neutral-200/80 relative z-0"> */}
        <ul>
            <Scales className="-z-10 opacity-30" />
            {pages.map((page) => <PageScreenshot {...page} />)}
        </ul>
    </Subsection>
}

type PageScreenShowProps = ProjectPage
function PageScreenshot({ title, description, preview, links }: PageScreenShowProps) {

    const { language } = useLanguage();
    return <li className="list-none w-full px-4 relative z-0">
        {/* <DotPattern className="-z-10 opacity-40" /> */}
        {/* <div className="bg-neutral-200 w-full h-60 relative overflow-hidden"> */}
        <div className="">
            <Image src={preview} alt="" className="object-contain opacity-100" height={1000} width={1000} />
            {/* </div> */}
            {/* <div className="h-6" /> */}
            <h4 className="">
                {title[language]}
            </h4>
            <p>{description[language]}</p>
        </div>
    </li>
}
