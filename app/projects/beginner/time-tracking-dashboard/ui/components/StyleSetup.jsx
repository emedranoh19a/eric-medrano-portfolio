import { rubik } from "../fonts";
import "../theme.css";
export default function StyleSetup({ children }) {
  return (
    <div
      className={`min-h-screen w-full antialiased bg-navy-950 px-6 py-20 grid place-items-center ${rubik.className}`}
    >
      {children}
    </div>
  );
}
