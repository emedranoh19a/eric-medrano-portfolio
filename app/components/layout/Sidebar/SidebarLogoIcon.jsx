import { cn } from "@/app/utils/utils";
import Link from "next/link";

export default function SidebarLogoIcon() {
  //Style:
  const linkStyles = cn(
    "space-x-2  py-1",
    "relative flex items-center justify-center z-20"
  );

  const containerStyles = cn(
    "text-2xl text-center text-white font-light",
    "h-fit w-full bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm ",
    "flex-shrink-0"
  );

  return (
    <Link href="#" className={linkStyles}>
      <div className={containerStyles}>E</div>
    </Link>
  );
}
