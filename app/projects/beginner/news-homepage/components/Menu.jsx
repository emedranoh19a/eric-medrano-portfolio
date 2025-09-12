import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import { logo } from "../imageIndex";
import Drawer from "./Drawer";
import Text from "./Text";

//TODO: Do the Dropdown version (Drawer)
const menus = ["Home", "New", "Popular", "Trending", "Categories"];
export default function Menu({ className }) {
  const containerStyles = cn("flex justify-between items-center", className);
  return (
    <div className={containerStyles}>
      <Logo />
      <Menus className="hidden lg:flex" />
      <Drawer className="block lg:hidden">
        <Menus className="flex flex-col gap-6" />
      </Drawer>
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
function Menus({ className = "", preset = 6, textCn }) {
  const listCn = clsx("list-none relative gap-10", className);
  const textStyles = cn(
    "hover:text-[var(--gold-400)] cursor-pointer transition-colors",
    textCn
  );
  return (
    <ul className={listCn}>
      {menus.map((menu, i) => (
        <Text as="li" preset={preset} key={i} className={textStyles}>
          {menu}
        </Text>
      ))}
    </ul>
  );
}

// function Hamburger({ className = "" }) {
//   const containerCn = cn("relative w-10 h-[17px]", className);
//   return (
//     <div className={containerCn}>
//       <Image src={iconMenu} fill alt="Menu" className="object-contain" />
//     </div>
//   );
// }
