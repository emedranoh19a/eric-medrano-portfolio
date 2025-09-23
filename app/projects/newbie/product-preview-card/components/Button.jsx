import Image from "next/image";
import { iconCart } from "../imageIndex";
import Text from "./Text";

export default function Button() {
  return (
    <Text
      as="button"
      className="py-4 cursor-pointer h-fit px-8 rounded-lg text-center flex justify-center w-full items-center bg-(--green-500) hover:bg-(--green-700) transition-colors"
    >
      <div className="relative h-[16px] aspect-square mr-2">
        <Image
          src={iconCart}
          fill
          alt="Shopping cart icon"
          className="object-contain "
        />
      </div>
      <Text as="span" className="text-white align-center" preset={2}>
        Add to cart
      </Text>
    </Text>
  );
}
