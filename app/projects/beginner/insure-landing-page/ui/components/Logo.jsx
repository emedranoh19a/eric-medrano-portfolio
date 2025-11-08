import Image from "next/image";
import { logo } from "../../imageIndex";

export default function Logo() {
  return (
    <div className="w-[111px] h-[18px] relative">
      <Image src={logo} fill className="object-contain" alt="Insure Logo" />
    </div>
  );
}
