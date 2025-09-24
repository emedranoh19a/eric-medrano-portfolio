import Image from "next/image";
import { logo } from "../imageIndex";

export default function Logo() {
  return (
    <div className="w-[134px] h-[40px] relative">
      <Image src={logo} fill className="object-contain" alt="Logo" />
    </div>
  );
}
