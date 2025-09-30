import { Barlow, Barlow_Condensed } from "next/font/google";
import "../theme.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--next-barlow",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--next-barlow-condensed",
});

export default function StyleSetup({ children }) {
  return (
    <div
      className={`min-h-screen bg-white w-full z-0 relative px-8 sm:px-20 lg:px-[165px] pt-[38.18px] lg:pt-16 ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <Shape />
      {children}
    </div>
  );
}

function Shape() {
  return (
    <div className="absolute -z-10 top-0 right-0 bg-blue-100 w-40 h-[425px] sm:w-[545px] sm:h-[390px] lg:w-[705px] lg:h-[427px] rounded-bl-[60px] " />
  );
}
