import { cn } from "@/app/utils/utils";

export default function Text({ as: Tag = "p", className, children }) {
  const textStyles = cn(
    "antialiased font-normal text-[16px] text-(--gray) leading-[26px] ",
    Tag === "h1" &&
      "text-[56px] font-black text-(--dark-gray) leading-[56px] uppercase",
    Tag === "h2" &&
      "text-[32px]  font-black text-(--dark-gray) leading-[32px] uppercase",
    Tag === "h3" &&
      "text-[24px]  font-black text-(--dark-gray) leading-[28px] uppercase",
    className
  );
  return <Tag className={textStyles}>{children}</Tag>;
}
