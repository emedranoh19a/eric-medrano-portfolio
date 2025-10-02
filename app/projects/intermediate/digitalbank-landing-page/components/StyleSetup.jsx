import { Public_Sans } from "next/font/google";
import "../theme.css";
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
//light, regular, bold
export default function StyleSetup({ children }) {
  return (
    <div
      className={`relative  z-0 overflow-visible w-full min-h-screen bg-gray-50 px-6 sm:px-10 lg:px-[162px] ${publicSans.className}`}
      style={{
        "--gradient-green-start": "#33d35e",
        "--gradient-green-end": "#2ab6d9",
        "--gradient-gray-start": "#2d314d", //End to transparent
        // "--gradient-gray-end": "#2d314d",
      }}
    >
      {children}
    </div>
  );
}
