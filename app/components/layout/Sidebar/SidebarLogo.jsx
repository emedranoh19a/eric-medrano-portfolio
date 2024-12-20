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
        className="w-full h-auto"
        width={400}
        height={400}
        alt="Eric Medrano Logo"
      />
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span> */}
    </Link>
  );
}
