import { cn } from "@/app/utils/utils";

export default function Heading({ text, className = "" }) {
  //Style:
  const headingStyles = cn(
    "overflow-visible text-[3.5rem] font-semibold relative block",
    className
  );
  return (
    <>
      {/* <span className="absolute top-0 left-0 text-neutral-500/10 text-8xl">
          {text}
        </span> */}
      <h2 className={headingStyles}>
        {text}
        <span className="text-[#5046e6]">.</span>
      </h2>
    </>
  );
}
