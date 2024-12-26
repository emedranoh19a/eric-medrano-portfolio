"use client"

import ProjectNavigation from "../components/layout/ProjectNavigation"

export default function ProyectsLayout({ children }) {

    return <>
        <div className="bg-orange-100 min-h-screen w-full">
            {children}
        </div>
        <ProjectNavigation />
    </>



}

