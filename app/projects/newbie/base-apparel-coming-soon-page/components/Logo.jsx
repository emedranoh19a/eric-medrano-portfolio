import Image from "next/image";
import { logo } from "../imageIndex";

export default function Logo() {
  return (
    <div className="relative mb-8 lg:mb-[136px] w-[133px] sm:w-[260px] h-[20px]">
      <Image
        fill
        className="object-contain object-right sm:object-center lg:object-left"
        src={logo}
      />
    </div>
  );
}
