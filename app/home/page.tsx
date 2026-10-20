import DesignSystem from "./components/ui/DesignSystem";
import TechnologyIcon from "./components/ui/TechnologyIcon/TechnologyIcon";
import Backlight from "./components/vendors/Backlight";
import { Technology } from "./data/types/Technology.types";

const technologies: Technology[] = [
    "css",
    "sass",
    "dnd-kit",
    "html",
    "javascript",
    "typescript",
    "tailwind-css",
    "next-js",
    "motion",
    "react-hook-form",
    "tanstack-query",
    "react",
    "zustand",
]
export default function Page() {
    return <DesignSystem className="min-h-screen">
        <h1> Organizing the TechnologyIcon component, one by one.</h1>
        <div className="grid grid-cols-6 place-items-center">
            {technologies.map((tech) => (
                <div key={tech} className="relative group/item">
                    <Backlight
                        blur={20}
                        className="opacity-0 transition-opacity duration-500 group-hover/item:opacity-100"
                    >
                        <TechnologyIcon technology={tech} />
                    </Backlight>

                    <TechnologyIcon
                        technology={tech}
                        className="absolute top-0 left-0 opacity-50 grayscale-100 group-hover/item:opacity-0 transition"
                    />
                </div>
            ))}

            {/* <TechnologyIcon technology="react-hook-form" /> */}
            {/* <TechnologyIcon technology="react-hot-toast" /> */}

            {/* <div className="bg-neutral-500 relative"></div> */}

        </div>
        {/* <p>There are more things in heaven and earth than those dreamt of in your philosofy.</p>
        <p>There are more thamt of in your philosofy.</p> */}
        {/* <ProjectPreview /> */}
    </DesignSystem>
}
//TODO: Add the preview.
//TODO: Add the dummy title
//TODO: Add the description
//TODO: Add the list of learnt things
//TODO: Add the technologies.
//TODO: Add a summary.
//TODO: Add the responsive devices.
//TODO: Add the Button to navigate.
//TODO: Add the level chip.
//TODO: Add the New thingy
//TODO: Add the particles and change the state

