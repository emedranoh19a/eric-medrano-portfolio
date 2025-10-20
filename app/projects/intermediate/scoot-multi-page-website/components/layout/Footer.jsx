import { cn } from "@/app/utils/utils";
import Link from "next/link";
import { navigationLinks } from "../../data";
import Logo from "./Logo";
import SNSIcon from "./SNSIcon";

export default function Footer() {
  return (
    <footer className="relative z-0 py-16">
      <div className="bg-[#333a44] h-full w-screen absolute -z-10 top-0 left-1/2 -translate-x-[50vw]" />
      <div className="flex flex-col md:flex-row justify-start items-center">
        <Logo
          light
          className="mb-10 md:mb-0 md:translate-x-0 md:mr-[58px] overflow-hidden"
        />
        <Links />
        <SNSIcons className="md:ml-auto" />
      </div>
    </footer>
  );
}
function Links() {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-4 mb-[85px] md:mb-0 text-center md:text-left">
      {navigationLinks.map((navigationLink, i) => (
        <li
          key={navigationLink.link}
          className="text-dim-grey font-space-mono font-[15px] font-bold leading-[25px] tracking-normal"
        >
          <Link href={navigationLink.link}>{navigationLink.label}</Link>
        </li>
      ))}
    </ul>
  );
}
function SNSIcons({ className }) {
  const containerStyles = cn("gap-6 flex", className);
  return (
    <ul className={containerStyles}>
      <SNSIcon variant="facebook" />
      <SNSIcon variant="twitter" />
      <SNSIcon variant="instagram" />
    </ul>
  );
}
