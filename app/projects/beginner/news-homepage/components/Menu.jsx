//TODO: Do the Navbar version

import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import { iconMenu, logo } from "../imageIndex";
import Text from "./Text";

//TODO: Do the Dropdown version (Drawer)
const menus = ["Home", "New", "Popular", "Trending", "Categories"];
export default function Menu() {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <Menus className="hidden lg:flex" />
      <Hamburger className="block lg:hidden" />
    </div>
  );
}

function Logo() {
  return (
    <div className="relative w-[64px] h-[40px]">
      <Image
        src={logo}
        alt="Logo"
        fill
        className="object-contain"
        priority={true}
      />
    </div>
  );
}
function Menus({ className = "" }) {
  const listCn = clsx("list-none relative gap-10", className);
  return (
    <ul className={listCn}>
      {menus.map((menu, i) => (
        <Text
          as="li"
          preset={6}
          key={i}
          className=" hover:text-[var(--gold-400)] cursor-pointer transition-colors"
        >
          {menu}
        </Text>
      ))}
    </ul>
  );
}

function Hamburger({ className = "" }) {
  const containerCn = cn("relative w-10 h-[17px]", className);
  return (
    <div className={containerCn}>
      <Image src={iconMenu} fill alt="Menu" className="object-contain" />
    </div>
  );
}
