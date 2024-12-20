import { cn } from "@/app/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { useSidebar } from "./SidebarProvider";

//TODO: Make the responsive sidebar work
export default function MobileSidebar({ className, children, ...props }) {
  //State:
  const { open, setOpen } = useSidebar();

  //Style:
  //FIX
  const containerStyles = cn(
    "h-screen md:hidden",
    "flex flex-row  items-center justify-between",
    "p-4",
    "",
    "bg-neutral-100 dark:bg-neutral-800 w-full"
  );
  return (
    <div className={containerStyles} {...props}>
      <div className="flex justify-end z-20 w-full" key="principal">
        <IoMenu
          className="text-neutral-800 dark:text-neutral-200"
          onClick={() => setOpen(!open)}
        />
        {/* <IconMenu2
              className="text-neutral-800 dark:text-neutral-200"
              onClick={() => setOpen(!open)}
            /> */}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
              className
            )}
          >
            <div
              className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
              onClick={() => setOpen(!open)}
            >
              {/* TODO */}
              {/* <IconX /> */}
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
