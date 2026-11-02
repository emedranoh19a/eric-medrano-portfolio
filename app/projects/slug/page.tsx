"use client"
import DesignSystem from "@/app/components/DesignSystem"
import Link from "next/link"
import { useState } from "react"
import { galleriaSlideshowSite } from "../intermediate/galleria-slideshow-site/project"
import { ProjectCredits, ProjectOverview, ProjectProcess } from "./sections"
import ProjectHeader from "./sections/ProjectHeader/ProjectHeader"
//TODO: Typography: text-base/6
//TODO: Typography size hierarchy
//TODO: Typography spacing hierarchy
//TODO: Section Spacing hierarchy





export default function Page() {
    const [isOpen, setOpen] = useState(true)
    const project = galleriaSlideshowSite
    return <DesignSystem>
        <ProjectHeader
            title={project.title}
            description={project.description}
            level={project.level}
            category={project.category}
            status={project.status}
            preview={project.previews.mockup}
        />
        <div className="flex flex-row-reverse relative">
            <aside className="w-3xl shrink-none bg-red-500 h-fit sticky top-20">
                <p>Table of contents</p>
                <ul>
                    <li>
                        <Link href="#overview" >Overview</Link>
                    </li>
                    <li>
                        <Link href="#challenge">The Challenge</Link>
                    </li>
                    <li>
                        <Link href="#links" >Screenshots</Link>
                    </li>
                    <li>
                        <Link href="#process" >The Process</Link>
                    </li>
                    <li>
                        <Link href="#stack" >Stack</Link>
                    </li>
                    <li>
                        <Link href="#learned" >What I learned</Link>
                    </li>
                    <li>
                        <Link href="#next-steps" >Continued development</Link>
                    </li>
                    <li>
                        <Link href="#next-steps" >Next Steps</Link>
                    </li>
                    <li>
                        <Link href="#credits" >Ackowlegdements</Link>
                    </li>



                </ul>
            </aside>
            <div>
                <ProjectOverview level={project.level} challenges={project.challenges} pages={project.pages} />
                <ProjectProcess level={project.level} stack={project.stack} lessons={project.lessons} nextSteps={project.nextSteps} />
                <ProjectCredits level={project.level} credits={project.credits} />
            </div>
        </div>
        <div className="mb-40">More and more content</div>
        <div className="mb-40">More and more content</div>
        <div className="mb-40">More and more content</div>
        <div className="mb-40">More and more content</div>
        <div className="mb-40">More and more content</div>
        <div className="mb-40">More and more content</div>
    </DesignSystem>

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

}
