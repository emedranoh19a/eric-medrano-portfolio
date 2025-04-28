import { cn } from "@/app/utils/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Text({
  children,
  preset = 1,
  className = "",
  as: Tag = "p",
}) {
  const textStyles = cn(plusJakartaSans.className, "");
  return <Tag>{children}</Tag>;
}
