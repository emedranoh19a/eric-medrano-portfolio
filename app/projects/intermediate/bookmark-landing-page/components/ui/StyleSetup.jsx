import { Rubik } from "next/font/google";
import "./theme.css";
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function StyleSetup({ children }) {
  return (
    <div
      className={`antialiased relative z-0 w-full min-h-screen px-8 pt-10 lg:pt-12 ${rubik.className}`}
    >
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
