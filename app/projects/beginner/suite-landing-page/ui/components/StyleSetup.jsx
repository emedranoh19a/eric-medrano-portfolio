import { epilogue } from "../font";
import "../theme.css";
export default function StyleSetup({ children }) {
  return (
    <div
      className={`antialiased min-h-screen w-full relative-0 px-4 sm:px-8 pt-6 sm:pt-8 lg:pt-[50px] ${epilogue.className}`}
    >
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
