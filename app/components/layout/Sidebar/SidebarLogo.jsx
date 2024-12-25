import Image from "next/image";
import Link from "next/link";
export default function SidebarLogo() {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/Logo.png"
        className="w-full h-auto max-w-40"
        width={200}
        height={200}
        alt="Eric Medrano Logo"
      />
    </Link>
  );
}
