import Image from "next/image";
import { iconMoon } from "../../assetIndex";

export default function DarkThemeToggle() {
  return (
    <button className="flex cursor-pointer flex-row items-center gap-3 sm:gap-4">
      <span className="preset-8 text-neutral-500 uppercase">Dark</span>
      <div className="size-5 relative">
        <Image src={iconMoon} alt="moon" className="object-contain" fill />
      </div>
    </button>
  );
}
