import Image from "next/image";
import { logo } from "../../imageIndex";

export default function Logo() {
  return (
    <div className="w-[87px] h-[35px] lg:w-[84px] lg:h-[27px] relative">
      <Image src={logo} fill className="object-contain" alt="logo" />
    </div>
  );
}
