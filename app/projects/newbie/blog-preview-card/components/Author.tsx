import Image from "next/image";
import gregHooper from "../images/image-avatar.webp";
import { Text } from "./Text";
export function Author() {
  return (
    <div className="flex justify-start items-center gap-3">
      <div className="relative w-8 h-8 rounded-ful overflow-hidden">
        <Image
          fill
          className="object-cover"
          src={gregHooper}
          alt="avatar of Greg Hooper"
        />
      </div>
      <Text as="span" preset={4}>Greg Hooper</Text>
    </div>
  );
}
