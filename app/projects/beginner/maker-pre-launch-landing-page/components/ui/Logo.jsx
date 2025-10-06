import Image from "next/image";
import { logo } from "../../imageIndex";

export default function Logo() {
  return (
    <div className="w-[140px] h-[35px] relative z-0">
      <div className="z-10 absolute inset-0" />
      <Image src={logo} alt="Logo" fill className="object-contain" />
    </div>
  );
}
