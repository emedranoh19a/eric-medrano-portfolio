import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "../../data";
import { hamburger } from "../../imageIndex";
import Button from "../Button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-[22px] bg-white">
      <MobileNavigation />
      <div className="flex flex-row gap-[58px]">
        <Logo className="place-self-center shrink-0" />
        <NavigationLinks />
      </div>
      <Button text="Get Scooting" className="hidden md:block" />
      {/* This div for centering the logo on flexbox */}
      <div className="md:hidden w-[38px] sm:w-[54px]" />
    </nav>
  );
}
function MobileNavigation() {
  //TODO: Get a portal moving to the main body.
  return (
    <button className="w-4 h-5 relative md:hidden">
      <Image src={hamburger} alt="menu" fill className="object-contain" />
    </button>
  );
}
//about, location and careers

function NavigationLinks() {
  return (
    <ul className="hidden  text-dim-grey ml:[58px] gap-8 items-center md:flex justify-between font-space-mono text-[15px] font-bold leading-[25px] tracking-none">
      {navigationLinks.map((navigationLink) => (
        <li className="cursor-pointer">
          <Link href={navigationLink.link}> {navigationLink.label}</Link>
        </li>
      ))}
    </ul>
  );
}
