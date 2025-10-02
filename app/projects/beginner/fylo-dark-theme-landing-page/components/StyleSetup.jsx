import { Open_Sans, Raleway } from "next/font/google";
import "../theme.css";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--next-raleway",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--next-open-sans",
});
export default function StyleSetup({ children }) {
  return (
    <div
      className={`bg-navy-850 px-5 pt-6 sm:px-14 sm:pt-20 lg:px-20 text-white min-h-screen w-full relative z-0 ${raleway.variable} ${openSans.variable}`}
    >
      {children}
    </div>
  );
}
