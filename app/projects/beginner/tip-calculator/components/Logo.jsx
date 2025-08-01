import Image from "next/image";
import { logo } from "../imageIndex";

export default function Logo() {
  //public
  return (
    <div className="relative w-[86px] h-[53px]">
      <Image src={logo} alt="Splitter Logo" fill className="object-contain" />
    </div>
  );
}
