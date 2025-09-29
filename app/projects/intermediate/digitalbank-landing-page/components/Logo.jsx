import Image from "next/image";
import { logoDark, logoLight } from "../imageIndex";

export default function Logo({ light }) {
  return (
    <div className="w-[154px] h-[20.93px] relative mb-8">
      <Image
        src={light ? logoLight : logoDark}
        fill
        className="object-contain"
        alt="logo"
        priority={true}
      />
    </div>
  );
}
