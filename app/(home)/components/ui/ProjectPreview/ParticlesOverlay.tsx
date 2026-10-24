"use client"
import { useElementSize } from "@/app/hooks/useElementSize";
import { ReactNode } from "react";
// import TechnologyIcon from "../TechnologyIcon/TechnologyIcon";

export default function ParticlesOverlay({ children, level }: { children: ReactNode, level }) {
    const { ref, width, height } = useElementSize<HTMLDivElement>();

    const radius = Math.min(width, height) * 0.25;
    return <div ref={ref} className="fixed inset-0 grid place-items-center bg-neutral-200/10 py-20 backdrop-blur-lg">

        {/* <FloatingParticles size={3} drift={1.2} depth={0.1} opacity={0.5} quantity={1000} /> */}
        {/* <div className="w-full h-full bg-red-500 absolute top-0 left-0 ">

        </div> */}
        <div className="absolute h-screen w-screen overflow-hidden z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* <OrbitingCircles radius={radius} className="bg-red-500 left-1/2 top-1/2">
                <TechnologyIcon />
                <TechnologyIcon />
                <TechnologyIcon />
            </OrbitingCircles>
            <OrbitingCircles radius={400} className="bg-lime-500 left-1/2 top-1/2" reverse>
                <TechnologyIcon />
                <TechnologyIcon />
                <TechnologyIcon />


            </OrbitingCircles> */}
        </div>
        {children}
    </div >
}
