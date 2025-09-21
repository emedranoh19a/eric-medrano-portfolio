import Image from "next/image";
import { logoFull, logoMark } from "../imageIndex";

export default function Logo({ full = false }) {
  return (
    <>
      {full ? (
        <div className="w-[209px] h-[30px] relative">
          <Image src={logoFull} fill className="object-contain" alt="logo" />
        </div>
      ) : (
        <div className="w-10 aspect-square relative">
          <Image src={logoMark} fill className="object-contain" alt="logo" />
        </div>
      )}
    </>
  );
}
