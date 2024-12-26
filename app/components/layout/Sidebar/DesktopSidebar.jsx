import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { useSidebar } from "./SidebarProvider";
export default function DesktopSidebar({ className, children, ...props }) {
  //State:
  const { open, setOpen, animate } = useSidebar();

  //Style:
  const containerStyles = cn(
    "hidden",
    "md:flex md:flex-col fixed",
    "h-full w-[300px] p-4",
    "bg-neutral-100",
    className
  );
  return (
    <motion.div
      className={containerStyles}
      //the styles are stopped here.
      initial={{ width: "60px" }}
      animate={{
        width: animate ? (open ? "200px" : "60px") : "200px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      // whileHover={() => setOpen(true)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
