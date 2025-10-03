import { Epilogue } from "next/font/google";
import "../theme.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "700"],
});
export default function StyleSetup({ children }) {
  return (
    <div
      className={`w-full pb-[94px] sm:pb-[52px] lg:pb-[122px] bg-white p-4 sm:pt-6 sm:px-10  min-h-screen h-fit ${epilogue.className}`}
    >
      {children}
    </div>
  );
}
