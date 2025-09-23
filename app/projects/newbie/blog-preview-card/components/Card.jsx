import { cn } from "@/app/utils/utils";

export default function Card({ children }) {
  const cardStyles = cn(
    //Sizing
    "group box-border w-fit h-fit max-w-sm",
    //Whitespace
    "p-6",
    //Positioning.
    "flex flex-col gap-6",
    //Background & Borders
    "hover:cursor-pointer bg-white border rounded-[20px] border-solid border-(--gray-950)",
    //Effects
    "shadow-[8px_8px_0px_#000000]"
  );
  return <div className={cardStyles}>{children}</div>;
}
