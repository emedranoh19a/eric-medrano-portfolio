"use client";
import Image from "next/image";

export default function QRImage() {
  return (
    <ImageContainer className=" rounded-lg overflow-hidden mb-4">
      <Image
        src="/projects/newbie/qr-code-component/images/image-qr-code.png"
        fill
        objectFit="fit"
        alt=""
        className="w-full"
      />
    </ImageContainer>
  );
}
