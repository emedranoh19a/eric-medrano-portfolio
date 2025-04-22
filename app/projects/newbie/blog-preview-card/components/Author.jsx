import clsx from "clsx";
import Image from "next/image";
import Text from "./Text";

export default function Author() {
  const authorBox = clsx("");
  const imgContainer = clsx("");

  return (
    <div className="inline-flex justify-start items-center gap-3">
      <div className="relative w-8 h-8 rounded-ful overflow-hidden">
        <Image
          fill
          className="object-cover"
          src="/projects/newbie/blog-preview-card/images/image-avatar.webp"
        />
      </div>
      <Text preset={4}>Greg Hooper</Text>
    </div>
  );
}
