import "../style/testimonials-grid-section-theme.css";

import { Barlow_Semi_Condensed } from "next/font/google";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
});
export default function StyleSetup({ children }) {
  return (
    <div
      className={`min-h-screen w-full py-[73px] px-[35px] sm:pt-[83px] sm:pb-[113px] sm:px-[60px] lg:px-[163px] lg:py-[223px] bg-[#F6F5F6] ${barlowSemiCondensed.className}`}
    >
      {children}
    </div>
  );
}
