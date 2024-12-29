import { cn } from "@/app/utils/utils";

export default function Subheading({ className = "", children }) {
  const headingStyles = cn(
    "font-bold indent-0 text-[1.5rem] text-neutral-900 text-center lg:text-left block",
    className
  );
  return <h3 className={headingStyles}>{children} </h3>;
}
