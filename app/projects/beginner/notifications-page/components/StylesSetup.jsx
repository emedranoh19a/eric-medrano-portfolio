import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "800"],
});

export default function StylesSetup({ children }) {
  //Fonts: extrabold, and medium.
  return (
    <div
      className={`${plusJakartaSans.className} w-full min-h-screen grid place-items-center py-10 bg-[var(--grayish-blue-50)]`}
      style={{
        "--red": "hsl(1, 90%, 64%)",
        "--blue": "hsl(219, 85%, 26%)",
        "--grayish-blue-50": "hsl(210, 60%, 98%)", //card background
        "--grayish-blue-100": "hsl(211, 68%, 94%)",
        "--grayish-blue-200": "hsl(205, 33%, 90%)", //background
        "--grayish-blue-300": "hsl(219, 14%, 63%)", //texdays
        "--grayish-blue-500": "hsl(219, 12%, 42%)", //normal highlight
        "--grayish-blue-900": "hsl(224, 21%, 14%)", //author name
      }}
    >
      {children}
    </div>
  );
}
