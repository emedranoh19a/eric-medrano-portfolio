import { ReactNode } from "react";
import DesignSystem from "./ui/DesignSystem";
import Footer from "./ui/layout/Footer";
import Navbar from "./ui/layout/Navbar/Navbar";
import "./ui/theme.css";


export default function Layout({ children }: { children: ReactNode }) {
    return <DesignSystem>


        <Navbar />
        <div className="flex flex-1">

            {children}
        </div>
        <Footer />
    </DesignSystem>

}
