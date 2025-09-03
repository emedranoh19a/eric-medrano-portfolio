import Image from "next/image";
import Text from "./Text";

export default function Article({ index, title, content, imgSrc }) {
  //TODO: Not sure about the max width
  return (
    <div className="h-full w-full flex justify-start gap-6 mb-10">
      <div className="relative min-w-[100px] h-full bg-neutral-200">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-2 max-w-[212px] ">
        <Text preset={3} as="span">
          {`${index}`.padStart(2, "0")}
        </Text>
        <Text preset={5}>{title}</Text>
        <Text preset={6}>{content} </Text>
      </div>
    </div>
  );
}
