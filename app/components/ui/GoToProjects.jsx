"use client";
import { FaArrowRight } from "react-icons/fa6";

import { cn } from "@/app/utils/utils";
import { useRouter } from "next/navigation";

export default function GoToProject(
  { text = "Button", className, ...props },
  ref
) {
  //State:
  const router = useRouter();
  //Style:
  const buttonStyles = cn(
    "group relative",
    "w-fit   py-3 px-6 ",
    "overflow-hidden rounded-full border",
    "text-center font-semibold",
    "cursor-pointer",
    className
  );

  const standardTextStyles = cn(
    "",
    "",
    "inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0"
  );

  const textSpanStyles = cn(
    "absolute flex items-center justify-center gap-2 z-10 top-0 translate-x-12",
    "h-full w-full",
    "text-white",
    "transition-all duration-300",
    "opacity-0 group-hover:-translate-x-5 group-hover:opacity-100"
  );
  const decorationStyles = cn(
    "absolute left-[5%] top-[50%]",
    "h-2 w-2 ",
    "",
    "transition-all duration-300",
    "group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full",
    "rounded-lg bg-black   group-hover:scale-[1.8] group-hover:bg-black"
  );

  return (
    <button
      ref={ref}
      className={buttonStyles}
      onClick={() => router.push("/projects/newbie/social-links-profile")}
      {...props}
    >
      <span className={standardTextStyles}>{text}</span>
      <div className={textSpanStyles}>
        <span>{text}</span>
        <FaArrowRight />
      </div>
      <div className={decorationStyles}></div>
    </button>
  );
}
