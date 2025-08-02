import Image from "next/image";
import { patternDarkBg, patternLightBg } from "../imageIndex";

export default function Pattern({ variant = "light" }) {
  //Note: There is also a dark variant.
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={variant === "light" ? patternLightBg : patternDarkBg}
        fill
        alt=""
        className="object-cover"
      />
    </div>
  );
}
