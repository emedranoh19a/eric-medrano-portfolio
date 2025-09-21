import Image from "next/image";
import { imgAmy } from "../../imageIndex";

export default function Amy() {
  return (
    <div className="aspect-square w-[300px] lg:w-[445px] relative mx-auto lg:mx-0">
      <Image
        src={imgAmy}
        alt="Amy excited to work"
        fill
        className="object-contain"
      />
    </div>
  );
}
