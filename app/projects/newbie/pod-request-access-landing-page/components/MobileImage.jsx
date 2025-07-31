import Image from "next/image";
import { mobileImageHost } from "../imageIndex";

export default function MobileImage() {
  return (
    <div className="absolute w-full h-full sm:hidden -z-10 opacity-10">
      <Image src={mobileImageHost} fill className="object-cover" />
    </div>
  );
}
