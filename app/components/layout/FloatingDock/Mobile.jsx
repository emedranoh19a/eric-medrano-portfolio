import { cn } from "@/app/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function FloatingDockMobile({ items, className }) {
  const [open, setOpen] = useState(false);
  //TODO: pass the difficulty here.
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <MobileProjectIcon
                key={idx}
                {...item}
                idx={idx}
                length={items.length}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50  flex items-center justify-center"
      >
        {/* TODO: replace with something good. */}
        {/* <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" /> */}
      </button>
    </div>
  );
}

function MobileProjectIcon({
  image,
  title,
  idx,
  url,
  isComplete,
  isPublic,
  isExternalProject,
  length,
}) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 10,
        transition: {
          delay: idx * 0.05,
        },
      }}
      transition={{ delay: (length - 1 - idx) * 0.05 }}
    >
      <Link
        href={url}
        key={title}
        className="relative h-10 w-10 overflow-hidden rounded-full bg-red-500  flex items-center justify-center"
      >
        <Image
          src={image}
          fill
          objectFit="cover"
          objectPosition="top"
          alt={`Go to project: ${title} `}
        />
      </Link>
    </motion.div>
  );
}
//TODO: overflow hidden to the desktop version of the project icons
