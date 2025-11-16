import { kumbhSans } from "./fonts";
import "./theme.css";

export default function StyleSetup({ children }) {
  return (
    <div
      className={`min-h-screen overflow-hidden relative z-0 w-full bg-neutral-50 pt-10 sm:pt-20 px-4 sm:px-10 xl:px-[165px] ${kumbhSans.className}`}
    >
      {children}
    </div>
  );
}
