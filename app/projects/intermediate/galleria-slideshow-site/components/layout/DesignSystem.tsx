import { cn } from "@/app/utils/utils";
import { Libre_Baskerville } from "next/font/google";
import { ReactNode } from "react";
import "./theme.css";

type DesignSystemProps = {
    children: ReactNode;
    className: string;
}

const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
});
export default function DesignSystem({ children, className }: DesignSystemProps) {
    const backgroundStyles = cn("relative grid ",
        libreBaskerville.className,
        //For easy layout control, we enter as props
        className);
    return <div className={backgroundStyles} id="overlay-root">



        {children}
    </div >
}

