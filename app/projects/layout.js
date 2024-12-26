"use client"

import ProyectNavigation from "../components/layout/ProyectNavigation"


export default function ProyectsLayout({ children }) {



    return <div>
        {children}
        <div>
            <div
                className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">

                <ProyectNavigation />
                {/* <ProjectNavigation items={links} /> */}

                {/* <div className="flex items-center justify-center h-[35rem] w-full">
                    {/* <FloatingDock
                        // only for demo, remove for production
                        mobileClassName="translate-y-20"
                        items={links} /> 
                </div> */}
            </div>
        </div>
    </div>
}

