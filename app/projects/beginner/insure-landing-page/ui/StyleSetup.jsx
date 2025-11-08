import { dmSerifDisplay, karla } from "./fonts";
import "./theme.css";
export default function StyleSetup({ children }) {
  return (
    <div
      className={`antialiased w-full min-h-screen relative px-6 z-0 ${dmSerifDisplay.variable} ${karla.variable}`}
    >
      <div className="w-full container mx-auto">{children}</div>
    </div>
  );
}
