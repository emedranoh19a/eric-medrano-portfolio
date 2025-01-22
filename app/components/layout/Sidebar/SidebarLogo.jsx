import Image from "next/image";
import Link from "next/link";
export default function SidebarLogo() {
  return (
    <Link
      href="/"
      className="relative flex items-center justify-center z-20 w-80 md:w-full aspect-square mx-auto"
    >
      <Image
        src="/Logo.png"
        className="w-full h-full"
        fill
        // width={200}
        // height={200}
        alt="Eric Medrano Logo"
      />
    </Link>
  );
}
