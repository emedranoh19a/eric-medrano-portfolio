"use client"

import ProjectNavigation from "../components/layout/ProjectNavigation"

export default function ProyectsLayout({ children }) {
    //TODO: Tackle different layout z-index. Mobile navbar is missing...
    return <>
        <div className="min-h-screen w-full">
            {children}
        </div>
        <ProjectNavigation />
    </>



}

