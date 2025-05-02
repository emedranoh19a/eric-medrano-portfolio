import clsx from "clsx";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["300", "500", "700"] });
export default function Text({
  as: Tag = "p",
  preset = 1,
  children,
  className,
}) {
  //1: Paragraph.
  //2: Name,
  //3: job
  const styles = clsx(
    inter.className,
    "text-center md:text-left",
    preset === 1 &&
      "text-[#202047] font-light text-[18px] leading-[24px] md:text-[32px] md:leading-[44px]",
    preset === 2 &&
      "text-[#202047] font-bold  text-[15px] leading-[20px] md:text-[20px] md:leading-[38px]",
    preset === 3 &&
      "text-[#B9B9CE] font-medium text-[15px] leading-[20px] md:text-[20px] md:leading-[38px]",
    className
  );
  return <Tag className={styles}>{children}</Tag>;
}
