import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { useSidebar } from "./SidebarProvider";
export default function DesktopSidebar({ className, children, ...props }) {
  //State:
  const { open, setOpen, animate } = useSidebar();

  //Style:
  const containerStyles = cn(
    "hidden",
    "flex-shrink-0 md:flex md:flex-col",
    "h-full w-[300px] p-4",
    "bg-neutral-100",
    className
  );
  return (
    <motion.div
      className={containerStyles}
      animate={{
        width: animate ? (open ? "300px" : "60px") : "300px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
