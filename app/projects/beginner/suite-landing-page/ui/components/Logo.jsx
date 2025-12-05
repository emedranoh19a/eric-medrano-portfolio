import Image from "next/image";
import { logo } from "../../assetIndex";

export default function Logo() {
  return (
    <div className="relative w-[78px] h-[25px]">
      <Image src={logo} className="object-contain" fill alt="Suite logo" />
    </div>
  );
}
