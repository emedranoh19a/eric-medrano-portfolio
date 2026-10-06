import { cn } from "@/app/utils/utils";
import GoToSlideshow from "./GoToSlideshow";
import Logo from "./Logo";

export default function Navbar() {
    //This navbar should detect the actual page and conditionally render the current GoTo
    const containerStyles = cn(
        "sticky top-0 inset-x-0",
        "flex flex-row justify-between items-center",
        "bg-white py-6 sm:py-7 lg:py-10",
        "z-0 before:z-10 before:absolute before:h-px before:w-screen before:bg-[#E5E5E5] before:bottom-0 before:left-1/2 before:translate-x-[-50vw]",
    )
    return <nav className={containerStyles}>
        <Logo />
        <GoToSlideshow />
    </nav>
}

