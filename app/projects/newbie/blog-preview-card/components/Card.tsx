import { cn } from "@/app/utils/utils";
import { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  const cardStyles = cn(
    //Sizing
    "group box-border-2 w-fit",
    //Whitespace
    "p-6",
    //Positioning.
    "flex flex-col gap-6",
    //Background & Borders
    "hover:cursor-pointer bg-white border rounded-[20px] border-solid border-(--gray-950)",
    //Effects
    "shadow-[8px_8px_0px_#000000]",
    className
  );
  return <div className={cardStyles}>{children}</div>;
}
