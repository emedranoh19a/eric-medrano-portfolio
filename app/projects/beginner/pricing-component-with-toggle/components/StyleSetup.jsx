import clsx from "clsx";
import { Montserrat } from "next/font/google";
import "../theme.css";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
export default function StyleSetup({ children }) {
  const pageStyles = clsx(
    montserrat.className,
    "antialised relative z-0 grid place-items-center",
    "w-full min-h-screen overflow-hidden",
    "pt-[71px] pb-20 px-6 sm:px-20 lg:px-[195px] lg:pb-[103px]"
  );
  return <div className={pageStyles}>{children}</div>;
}
