import Image from "next/image";
import { logoDark, logoLight } from "../imageIndex";

export default function Logo({ dark = false }) {
  return (
    <div className="relative w-[111px] h-[28px]">
      <Image
        fill
        className="object-contain"
        alt="Skilled logo"
        src={dark ? logoDark : logoLight}
      />
    </div>
  );
}
