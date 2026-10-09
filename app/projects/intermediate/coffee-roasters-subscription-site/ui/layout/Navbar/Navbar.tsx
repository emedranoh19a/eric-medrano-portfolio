import Image from "next/image";
import { hamburgerIcon } from "../../../assets/assetIndex";
import Logo from "../Logo";
import Menu from "../Menu/Menu";

export default function Navbar() {

    return <div className="bg-light-cream flex justify-between sticky top-0 py-8 sm:py-10 lg:py-11 mb-2 sm:mb-3.5 lg:mb-0">
        <Logo variant="black" />
        <Menu variant="Navbar" />
    </div>
}



function Hamburguer() {
    return <div className="relative aspect-square w-4">
        <Image src={hamburgerIcon} alt="menu" fill className="object-contain object-right" />
    </div>
}

function MenuItem() {
    return <li className="hover:text-dark-grey-blue">Hello</li>
}
