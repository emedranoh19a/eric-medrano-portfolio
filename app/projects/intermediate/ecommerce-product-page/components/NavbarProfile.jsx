import Image from "next/image";
import Cart from "./Cart";

export default function NavbarProfile() {
  return (
    <div className="bg-red-500 flex flex-row gap-3 items-center">
      <Cart />
      <Avatar />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative aspect-square w-10">
      <Image
        fill
        className="object-contain"
        alt="Logo of Sneakers"
        src="/projects/intermediate/ecommerce-product-page/images/image-avatar.png"
      />
    </div>
  );
}
