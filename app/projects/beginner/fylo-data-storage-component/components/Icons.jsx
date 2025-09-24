import Image from "next/image";
import { iconDocument, iconFolder, iconUpload } from "../imageIndex";

export default function Icons() {
  return (
    <div className="flex gap-4 justify-start">
      <Icon src={iconDocument} />
      <Icon src={iconFolder} />
      <Icon src={iconUpload} />
    </div>
  );
}

function Icon({ src }) {
  return (
    <div className="w-12 aspect-square px-[14px] py-[12px]  rounded-xl bg-blue-950">
      <div className="w-full h-full relative">
        <Image fill src={src} alt="" className="object-contain" />
      </div>
    </div>
  );
}
