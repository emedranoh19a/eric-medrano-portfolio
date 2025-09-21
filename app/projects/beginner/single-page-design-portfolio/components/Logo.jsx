import Image from "next/image";
import { logo } from "../imageIndex";

export default function Logo() {
  return (
    <div className="w-16 aspect-square relative cursor-pointer">
      <Image src={logo} fill alt="logo" className="object-contain" />
    </div>
  );
}
