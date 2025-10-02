import Image from "next/image";
import { logo } from "../imageIndex";

export default function Logo({ variant = "footer" }) {
  return (
    <div className="w-[108px] h-8 relative">
      <Image src={logo} alt="logo" className="object-contain" fill />
    </div>
  );
}
