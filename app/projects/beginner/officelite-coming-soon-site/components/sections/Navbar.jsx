import { cn } from "@/app/utils/utils";
import Logo from "../ui/Logo";

export default function Navbar({ className }) {
  const navStyles = cn(
    " flex justify-center sm:justify-start mb-20 sm:mb-[112px] lg:mb-[140px]",
    className
  );
  return (
    <nav className={navStyles}>
      <Logo />
    </nav>
  );
}
