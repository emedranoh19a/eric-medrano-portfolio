import { cn } from "@/app/utils/utils";

export default function Card({
  children,
  as: Tag = "div",
  className,
  ...otherProps
}) {
  const cardStyles = cn(
    "bg-white h-screen w-screen sm:w-fit sm:h-fit sm:rounded-[36px] p-6 relative z-0",
    className
  );
  return (
    <Tag className={cardStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
