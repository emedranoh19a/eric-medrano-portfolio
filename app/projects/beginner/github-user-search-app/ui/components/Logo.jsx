import Image from "next/image";
import { logo } from "../../assetIndex";

export default function Logo() {
  return (
    <div className="w-[128px] h-[26px] relative cursor-pointer">
      <Image src={logo} alt="Devfinder logo" className="object-contain" fill />
    </div>
  );
}
