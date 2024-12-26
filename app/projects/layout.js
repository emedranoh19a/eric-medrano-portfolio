"use client"

import ProjectNavigation from "../components/layout/ProjectNavigation"

export default function ProyectsLayout({ children }) {
    //This is not the navigation at home (filterable). This has instead, some tabs, etc.


    //TODO: erase the bg
    return <div className="w-full min-h-screen h-fit max-w-full overflow-x-hidden bg-red-500 p-2">

        {/* {children}
        <div className="fixed bottom-0 left-0 w-full h-full bg-orange-400">
            <ProyectNavigation /> */}
        {children}
        <ProjectNavigation />
    </div>



}




