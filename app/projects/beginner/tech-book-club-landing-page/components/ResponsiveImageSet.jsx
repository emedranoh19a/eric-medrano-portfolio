import { cn } from "@/app/utils/utils";
import Image from "next/image";

export default function ResponsiveImageSet({ imageSet, alt, className }) {
  const { desktop, mobile, tablet } = imageSet;
  return (
    <>
      <Image
        alt={alt}
        fill
        className={cn("object-cover hidden lg:block", className)}
        src={desktop}
      />
      <Image
        alt={alt}
        fill
        className={cn("object-cover hidden sm:block lg:hidden", className)}
        src={tablet}
      />
      <Image
        alt={alt}
        fill
        className={cn("object-cover block sm:hidden", className)}
        src={mobile}
      />
    </>
  );
}
