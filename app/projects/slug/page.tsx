"use client"
import DesignSystem from "@/app/components/DesignSystem"
import { useState } from "react"
import { galleriaSlideshowSite } from "../intermediate/galleria-slideshow-site/project"
import Subtitle from "./components/Typography/Subtitle"
import ProjectHeader from "./sections/ProjectHeader/ProjectHeader"
//TODO: Typography: text-base/6
//TODO: Typography size hierarchy
//TODO: Typography spacing hierarchy
//TODO: Section Spacing hierarchy
// function ContentsTable() {
//     return <div>
//         <Subtitle text="Table of contents" />
//         <li>

//             Overview
//             The challenge
//             Screenshot
//             Links
//             My process
//             Built with
//             What I learned
//             Continued development
//             Useful resources
//             Author
//             Acknowledgments
//         </li>
//     </div>
// }
function Resources() {
    return <div>
        <Subtitle text="Useful Resources" />
        Example resource 1 - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
        Example resource 2 - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

    </div>
}



export default function Page() {
    const [isOpen, setOpen] = useState(true)
    const { title, category, description, level, previewImage, } = galleriaSlideshowSite
    return <DesignSystem>
        <ProjectHeader preview={previewImage} title={title} />
    </DesignSystem>
    // return <DesignSystem className="">
    //     <ProjectHeader />
    //     <Section />
    //     <Section />
    //     <Section />
    //     <Section />
    //     <Section />
    //     <Section />
    {/* <MainTitle />
        <Overview /> */}
    {/* <MainTitle />
        <ContentsTable />
        <Overview />
        <ChallengeDescription />
        <PagePreviews />
        <Title text="My Process" />
        <BuiltWith />
        <LearnedThings />
        <Resources />
        <ContinuedDevelopment />
        <Author />
        <Acknowledgements /> */}
    {/* <div>
            <button onClick={() => setOpen((s) => !s)}>

                Hello
            </button>
            <div
                className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="bg-neutral-100 p-8">
                        <p>
                            This is a long piece of text. There are more things in heaven
                            and Earth than those dreamt of in your philosophy.
                        </p>
                    </div>
                </div>
            </div>
        </div> */}
    {/* <PagePreviews />
        <PagePreviews />
        <PagePreviews />
        <PagePreviews /> */}
    {/* <MainTitle />
        <ContentsTable />
        <Overview />
        <ChallengeDescription />
        <PagePreviews />
        <Title text="My Process" />
        <BuiltWith />
        <LearnedThings />
        <Resources />
        <ContinuedDevelopment />
        <Author />
        <Acknowledgements /> */}
    // </DesignSystem >
}

function Contents() {
    return <menu>
        Table of Contents:
        <ul></ul>
    </menu>
}

//Rearrangement proposal
// <MainTitle /> The name of the project.
// <ContentsTable />
// <Overview />
// <ChallengeDescription />
// <PagePreviews />
// <Title text="My Process" />
// <BuiltWith />
// <LearnedThings />
// <Resources />
// <ContinuedDevelopment />
// <Author />
// <Acknowledgements />
