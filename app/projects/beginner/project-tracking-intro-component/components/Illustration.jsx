import clsx from "clsx";
import Image from "next/image";
import { illustrationDevices } from "../imageIndex";

export default function Illustration() {
  const containerStyles = clsx(
    "relative",
    //Responsive sizing
    "w-[482px] h-[239px]",
    "sm:w-[910px] sm:h-[452px]",
    "lg:w-[916px] lg:h-[455px]",
    "ml-8 sm:ml-32 lg:ml-18",
    "lg:order-2"
  );
  return (
    <div className={containerStyles}>
      <Image
        src={illustrationDevices}
        alt="Devices"
        fill
        className="object-contain"
      />
    </div>
  );
}
