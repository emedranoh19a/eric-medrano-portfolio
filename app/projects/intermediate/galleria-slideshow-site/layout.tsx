import { ReactNode } from "react";
import DesignSystem from "./components/layout/DesignSystem";
import Navbar from "./components/layout/Navbar/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
    return <DesignSystem className="relative px-6 max-w-screen min-h-screen">
        <div className="z-0 relative flex flex-col w-full min-h-screen">
            <Navbar />
            <div className="flex-1 flex flex-col -z-10">
                {children}
            </div>
        </div>
    </DesignSystem>
}
