import Image from "next/image";
import { logo } from "../imageIndex";

export default function Logo() {
  return (
    <div className="relative w-[134px] mb-14 md:mb-20 h-14 md:mt-48 lg:mt-0 col-start-1 row-start-1">
      <Image fill src={logo} className="object-contain" alt="Logo" />
    </div>
  );
}
