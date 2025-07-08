import { cn } from "@/app/utils/utils";
import Image from "next/image";

export default function ResponsiveImageSet({ srcPrefix, alt, className }) {
  return (
    <>
      <Image
        alt={alt}
        fill
        className={cn("object-cover hidden lg:block", className)}
        src={`${srcPrefix}-desktop.webp`}
      />
      <Image
        alt={alt}
        fill
        className={cn("object-cover hidden sm:block lg:hidden", className)}
        src={`${srcPrefix}-tablet.webp`}
      />
      <Image
        alt={alt}
        fill
        className={cn("object-cover block sm:hidden", className)}
        src={`${srcPrefix}-mobile.webp`}
      />
    </>
  );
}
