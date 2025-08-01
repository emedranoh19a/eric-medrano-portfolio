import Image from "next/image";
import { logoDark, logoLight } from "../imageIndex";

export default function Logo({ dark = false }) {
  //variant must be "dark" or "light"
  const imageUrl = dark ? logoDark : logoLight;
  return (
    <div className="w-24 h-6 relative inline-block">
      <Image src={imageUrl} fill className="object-contain" alt="workit logo" />
    </div>
  );
}
