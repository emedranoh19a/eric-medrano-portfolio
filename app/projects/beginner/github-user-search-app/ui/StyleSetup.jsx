import { spaceMono } from "./fonts";
import "./theme.css";
export default function StyleSetup({ children }) {
  return (
    <div
      className={`min-h-screen relative z-0 bg-neutral-100 pt-8 sm:pt-10 px-4 sm:px-8 pb-[97px] lg:pt-[130px] ${spaceMono.className}`}
    >
      <div className="mx-auto w-full max-w-[730px] flex flex-col gap-8 sm:gap-10">
        {children}
      </div>
    </div>
  );
}
