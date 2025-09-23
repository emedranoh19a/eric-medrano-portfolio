import { useClickOutside } from "@/app/hooks/useClickOutside";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Select({
  options,
  isOpen,
  setIsOpen,
  activeOption,
  setActiveOption,
}) {
  //State:
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setIsOpen(false));
  //Style:
  const labelStyles = "block text-sm/6 font-medium text-gray-900";
  const listStyles = clsx(
    "absolute max-h-56 w-full z-10",
    "text-base sm:text-sm",
    "bg-white mt-1 py-1 rounded-md shadow-lg",
    "overflow-auto",
    "ring-1 ring-black/5 focus:outline-hidden"
  );
  const buttonStyles = clsx(
    "flex items-center justify-between",
    "text-left text-gray-900 sm:text-sm/6",
    "w-full min-w-40 w-fit bg-white rounded-md py-1.5 pl-3 pr-2",
    "outline-solid outline-1 -outline-offset-1 outline-gray-300",
    "focus:outline-solid focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",
    "cursor-pointer transition-colors duration-200"
  );
  //Handlers:

  const handleClick = (value) => {
    setActiveOption(options[value]);
    setIsOpen(false);
  };
  return (
    <div ref={clickRef}>
      <label className={labelStyles}>Sorted by:</label>
      <div className="relative mt-2">
        <button className={buttonStyles} onClick={() => setIsOpen((s) => !s)}>
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            {activeOption.icon}
            <span className="block truncate"> {activeOption.label}</span>
          </span>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="h-full aspect-square"
          >
            <RiArrowDropDownLine className="fill-gray-600 text-4xl" />
          </motion.div>
        </button>

        {isOpen && (
          <motion.ul className={listStyles}>
            {options.map((option, i) => (
              <Option
                key={i}
                {...option}
                handleClick={handleClick}
                isActive={option.value === activeOption.value}
                index={i}
              />
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
}

function Option({ isActive = false, index, icon, label, handleClick, value }) {
  //Style:
  const optionStyles = cn(
    "relative cursor-pointer select-none py-2 pl-3 pr-9 text-neutral-900 transition-colors duration-100",
    "hover:bg-indigo-600/80 hover:text-white font-normal",
    isActive && "fill-white-600 text-white bg-indigo-600 font-bold"
  );
  const iconStyles = cn("grid place-items-center h-full right-0 top-0");
  return (
    <motion.li
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index }}
      className={optionStyles}
      onClick={() => handleClick(value)}
    >
      <div className="flex items-center">
        <div className={iconStyles}>{icon}</div>
        <span className="ml-3 block truncate">{label}</span>
      </div>
    </motion.li>
  );
}
