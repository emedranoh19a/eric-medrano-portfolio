import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebar } from "./SidebarProvider";

export default function MobileSidebar({ className, children, ...props }) {
  //State:
  const { open, setOpen } = useSidebar();

  //Style:
  const containerStyles = cn(
    "h-screen w-screen md:hidden",
    "fixed flex flex-row items-center justify-center align-center",
    "p-0",
    "bg-transparent w-full z-10 transition transition-all",
    !open && "-z-10"
  );
  return (
    <>
      <div className={containerStyles} {...props}>
        {/* <div className="flex justify-end z-20 w-full" key="principal">
        <IoMenu
          className="text-neutral-800 dark:text-neutral-200"
          onClick={() => setOpen(!open)}
        />
        {/* <IconMenu2
              className="text-neutral-800 dark:text-neutral-200"
              onClick={() => setOpen(!open)}
            /> *
      </div> */}
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
                "fixed h-full w-screen bg-white/50 backdrop-blur-md  inset-0 p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              ></div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <NavigationButton open={open} setOpen={setOpen} />
    </>
  );
}

function NavigationButton({ setOpen, open }) {
  const basePosition =
    "h-12 sm:h-16 md:h-18 lg:h-20 aspect-square top-5 right-5 md:hidden";

  const buttonStyles = clsx(
    basePosition,
    "group scale-1.25",
    "fixed z-[2000] bg-white/5 rounded-full",
    "text-center cursor-pointer shadow-2xl "
  );
  const backgroundStyles = clsx(
    basePosition,
    "fixed z-[1000]",
    // "bg-gradient-radial from-white to-transparent rounded-full",
    "bg-gradient-radial from-white/100 to-white/80 rounded-full",
    "shadow-2xl transition duration-1000 ease-in-out",
    open && "scale-screen"
  );

  const iconStyles = cn(
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "inline-block  w-1/2 h-[2px]",
    "absolute before:absolute after:absolute",
    "transition duration-200",
    "bg-black before:bg-black after:bg-black",
    "rounded-full before:rounded-full after:rounded-full",
    "before:h-full before:w-full after:w-full after:h-full",
    "before:top-0 before:left-0 before:-translate-y-2",
    "after:top-0 after:left-0 after:translate-y-2",
    "before:transition before:duration-200",
    "after:transition after:duration-200",
    //group hover
    !open &&
      "group-hover:after:translate-y-1.5 group-hover:before:-translate-y-1.5",
    open &&
      "bg-transparent after:translate-y-1/2 after:rotate-[135deg] before:translate-y-1/2 before:-rotate-[135deg]",
    ""
  );

  return (
    <>
      <button
        // className="navigation__checkbox"
        className={buttonStyles}
        id="navi-toggle"
        onClick={() => setOpen((s) => !s)}
      >
        <div className="relative">
          {/* <label htmlFor="navi-toggle" class="navigation__button"> */}
          <span className={iconStyles}>&nbsp;</span>
        </div>
        {/* </label> */}
      </button>
      <div className={backgroundStyles}>&nbsp;</div>
    </>
  );
}
