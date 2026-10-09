import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { facebookIcon, instagramIcon, twitterIcon } from "../../assets/assetIndex";
import Logo from "./Logo";
import Menu from "./Menu/Menu";

export default function Footer() {
    //Hecho a ciegas
    const footerStyles = cn("w-full bg-[#2C343E] bottom-0",
        "flex flex-col lg:flex-row items-center ",
        "gap-[49px] sm:gap-16.25 lg:justify-between",
        "py-[54px] lg:py-[47px] lg:px-[85px]")
    return <footer className={footerStyles}>
        <div className="flex flex-col items-center lg:flex-row gap-12 sm:gap-8 lg:gap-25.75">
            <Logo variant="white" />
            <Menu />
        </div>
        <FooterSocialList />
    </footer>
}

function FooterSocialList() {
    return <ul className="flex flex-row gap-6">
        <li className="inline-block relative w-6 aspect-square">
            <Image src={facebookIcon} alt="facebook" fill className="object-contain" />
        </li>
        <li className="inline-block relative w-6 aspect-square">
            <Image src={twitterIcon} alt="twitter" fill className="object-contain" />
        </li>
        <li className="inline-block relative w-6 aspect-square">
            <Image src={instagramIcon} alt="instagram" fill className="object-contain" />
        </li>
    </ul>
}
