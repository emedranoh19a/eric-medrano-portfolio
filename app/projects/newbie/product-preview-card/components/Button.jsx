import Image from "next/image";
import Text from "./Text";

export default function Button() {
  return (
    <Text
      as="button"
      className="py-4 h-fit px-8 rounded-lg text-center flex justify-center w-full items-center bg-[var(--green-500)] hover:bg-[var(--green-700)] transition-colors"
    >
      <div className="relative h-[16px] aspect-square mr-2">
        <Image
          src="/projects/newbie/product-preview-card/images/icon-cart.svg"
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
