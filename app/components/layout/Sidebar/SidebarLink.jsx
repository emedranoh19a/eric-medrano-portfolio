import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSidebar } from "./SidebarProvider";

export default function SidebarLink({ link, className, ...props }) {
  //State:
  const { open, animate, setOpen } = useSidebar();
  // useSmoothScroll();

  //Style:
  const linkStyles = cn(
    "flex items-center justify-start gap-2  group/sidebar py-2 w-fit lg:w-full mx-auto md:mx-0",
    !open && "justify-center",
    className
  );
  const spanStyles = cn(
    "text-neutral-900 md:text-neutral-600 font-bold text-4xl md:text-sm whitespace-pre",
    "inline-block",
    "",
    "group-hover/sidebar:translate-x-1 transition duration-150"
    // "      p-0! m-0!"
  );

  return (
    <Link
      href={link.href}
      className={linkStyles}
      onClick={() => setOpen((s) => !s)}
      {...props}
    >
      <span className="hidden md:inline">{link.icon}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={spanStyles}
      >
        {link.label}
      </motion.span>
    </Link>
  );
}
