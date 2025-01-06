import { cn } from "@/app/utils/utils";

export default function Text({ children, className = "" }) {
  //Set a good typography in the layout.
  const textStyles = cn(
    "mt-[.5rem] text-[1.4rem] text-neutral-700 block indent-6 text-left max-w-lg ",
    className
  );
  return <p className={textStyles}>{children}</p>;
}
