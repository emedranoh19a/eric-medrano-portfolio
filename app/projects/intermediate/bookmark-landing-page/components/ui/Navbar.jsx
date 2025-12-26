import Image from "next/image";
import { iconHamburger } from "../../imageIndex";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <Navigation />
    </nav>
  );
}

function Navigation() {
  return (
    <>
      {/* Mobile navigation */}
      <button className="w-[18px] h-[15px] relative lg:hidden">
        <Image src={iconHamburger} alt="Menu" fill className="object-contain" />
      </button>
      {/* desktop navigation */}
      <ul className="hidden lg:flex uppercase preset-6-regular text-blue-950 w-fit gap-12 items-center">
        <NavigationLink text="Features" />
        <NavigationLink text="Pricing" />
        <NavigationLink text="Contact" />
        <li>
          <button className="preset-6-regular uppercase text-white bg-red-400 rounded-[5px] px-8 py-2 cursor-pointer hover:bg-white hover:text-red-400 transition-colors border-2 border-red-400">
            Login
          </button>
        </li>
      </ul>
    </>
  );
}

function NavigationLink({ text }) {
  return (
    <li className="hover:text-red-400 transition-colors cursor-pointer">
      {text}
    </li>
  );
}
