import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { logoDark, logoLight } from "../imageIndex";

export default function Logo({ light }) {
  const containerStyles = cn("w-[154px] h-[20.93px] relative", light && "mb-8");
  return (
    <div className={containerStyles}>
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
