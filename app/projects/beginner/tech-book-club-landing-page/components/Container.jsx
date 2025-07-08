import { cn } from "@/app/utils/utils";

export default function Container({
  children,
  as: Tag = "div",
  className,
  ...otherProps
}) {
  const containerStyles = cn(
    "mx-auto px-5 sm:px-8 lg:px-[135px] w-full",
    className
  );
  return (
    <Tag className={containerStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
