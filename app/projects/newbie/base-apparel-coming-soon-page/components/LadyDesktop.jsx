import Image from "next/image";
import { heroDesktop } from "../imageIndex";

export default function LadyDesktop() {
  return (
    <div className="hidden lg:block relative h-screen min-w-[600px] w-auto">
      <Image
        src={heroDesktop}
        alt="gorgeous lady"
        fill
        className="object-cover hidden lg:block"
      />
    </div>
  );
}
