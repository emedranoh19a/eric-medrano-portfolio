import { Be_Vietnam_Pro } from "next/font/google";
import "../theme.css";
const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export default function StyleSetup({ children }) {
  return (
    <div
      className={`w-screen mx-auto px-6 sm:px-12 lg:px-41 pt-10 lg:pt-14 antialiased overflow-hidden min-h-screen antialiased ${beVietnam.className}`}
    >
      {children}
    </div>
  );
}
