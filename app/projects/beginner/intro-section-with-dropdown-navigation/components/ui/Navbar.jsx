import Image from "next/image";
import { navItems } from "../../data/data";
import { iconMenu } from "../../imageIndex";
import Button from "./Button";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";

const secondaryNav = { features: "", company: "" };
export default function Navbar() {
  return (
    <nav className="flex justify-between relative mb-6 sm:mb-8 lg:mb-[75px]">
      <div className="w-fit flex gap-16 items-center">
        <Logo />
        <Links />
      </div>
      <div className="hidden lg:flex gap-10 items-center ">
        <Button
          text="Login"
          variant="secondary"
          size="sm"
          className="border-none px-0 py-0"
        />
        <Button text="Register" variant="secondary" size="sm" />
      </div>
      <button className="lg:hidden w-8 h-[18px] relative cursor-pointer ">
        <Image src={iconMenu} alt="menu" className="object-contain" fill />
      </button>
    </nav>
  );
}

function Links() {
  return (
    <ul className="hidden lg:flex justify-start gap-10 capitalize">
      {navItems.map((navItem, i) => (
        <NavbarMenu key={i} {...navItem} />
      ))}
    </ul>
  );
}
