import Image from "next/image";
import { heroMobile } from "../imageIndex";

export default function LadyMobile() {
  return (
    <div className="relative lg:hidden w-full h-auto">
      <Image
        alt="Gorgeous lady"
        src={heroMobile}
        width={1000}
        height={1}
        className="object-cover object-top h-auto"
      />
    </div>
  );
}
