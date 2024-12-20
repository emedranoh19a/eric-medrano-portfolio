import Image from "next/image";

export default function Mac() {
  //TODO: Make a mac
  //Make the image fluid.
  //TODO: absolutely position a red square.
  return (
    <div className="aspect-[4/3] h-20">
      <Image src="/macbook.png" fill className="object-cover" />
    </div>
  );
}
