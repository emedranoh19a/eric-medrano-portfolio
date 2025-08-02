import Image from "next/image";
import { logo } from "../imageIndex";

export default function Logo() {
  return (
    <div className="relative w-[193px] h-[36px]">
      <Image
        src={logo}
        fill
        className="object-contain"
        alt="Tech Book Club Logo"
      />
    </div>
  );
}
