import { useClickOutside } from "@/app/hooks/useClickOutside";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRef } from "react";

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
    "ring-1 ring-black/5 focus:outline-none"
  );
  const buttonStyles = clsx(
    "grid grid-cols-1",
    "text-left text-gray-900 sm:text-sm/6",
    "w-full min-w-40 w-fit bg-white rounded-md py-1.5 pl-3 pr-2",
    "outline outline-1 -outline-offset-1 outline-gray-300",
    "focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600",
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
      <div class="relative mt-2">
        <button className={buttonStyles} onClick={() => setIsOpen((s) => !s)}>
          <span class="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            {activeOption.icon}
            <span class="block truncate"> {activeOption.label}</span>
          </span>
          {/* TODO: Add an icon. move it with framer motion */}
        </button>

        {isOpen && (
          <motion.ul className={listStyles}>
            {options.map((option, i) => (
              <Option
                key={i}
                {...option}
                handleClick={handleClick}
                isActive={option.value === activeOption.value}
              />
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
}

function Option({ isActive = false, icon, label, handleClick, value }) {
  //Style:
  const optionStyles = cn(
    "relative cursor-pointer select-none py-2 pl-3 pr-9 text-neutral-900 transition-colors duration-100",
    "hover:bg-indigo-600/80 hover:text-white font-normal",
    isActive && "fill-white-600 text-white bg-indigo-600 font-bold"
  );
  const iconStyles = cn("grid place-items-center h-full right-0 top-0");
  return (
    <li className={optionStyles} onClick={() => handleClick(value)}>
      <div className="flex items-center">
        <div className={iconStyles}>{icon}</div>
        <span className="ml-3 block truncate">{label}</span>
      </div>
    </li>
  );
}
