import Image from "next/image";
import { iconHamburger } from "../imageIndex";
import Logo from "./Logo";

const menus = ["About", "Services", "Projects"];
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between ">
      <Logo />
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
}

function DesktopMenu() {
  return (
    <ul className="hidden lg:flex gap-10 items-center">
      {menus.map((menu, i) => (
        <li key={i} className="capitalize cursor-pointer text-white preset-10">
          {menu}
        </li>
      ))}
      <li>
        <button className="cursor-pointer py-4 px-8 text-grey-950 preset-8 uppercase rounded-full bg-white">
          contact
        </button>
      </li>
    </ul>
  );
}

function MobileMenu() {
  return (
    <div className="block lg:hidden relative w-6 h-[18px] sm:w-8 sm:h-6">
      <Image src={iconHamburger} alt="menu" fill className="object-contain" />
    </div>
  );
}
