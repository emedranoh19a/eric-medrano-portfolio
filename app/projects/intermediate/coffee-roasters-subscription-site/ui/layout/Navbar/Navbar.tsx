import Logo from "../Logo";
import Menu from "../Menu/Menu";

export default function Navbar() {

    return <div className="flex justify-between sticky top-0 py-8 sm:py-10 lg:py-11 mb-2 sm:mb-3.5 lg:mb-0 z-10">
        <div className="absolute w-screen top-0 left-1/2 -z-10 translate-x-[-50vw] h-full bg-light-cream" />
        <Logo variant="black" />
        <Menu variant="Navbar" />
    </div>
}


