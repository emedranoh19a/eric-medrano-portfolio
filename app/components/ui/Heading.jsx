import { cn } from "@/app/utils/utils";
import BoxReveal from "../effects/BoxReveal";

export default function Heading({ text, className = "" }) {
  //Style:
  const headingStyles = cn(
    "overflow-visible text-[3.5rem] font-semibold relative block",
    className
  );
  return (
    <>
      <BoxReveal className="w-full">
        {/* <span className="absolute top-0 left-0 text-neutral-500/10 text-8xl">
          {text}
        </span> */}
        <h2 className={headingStyles}>
          {text}
          <span className="text-[#5046e6]">.</span>
        </h2>
      </BoxReveal>
    </>
  );
}
