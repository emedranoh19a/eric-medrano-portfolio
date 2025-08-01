import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useContext } from "react";
import { iconAddToCart } from "../imageIndex";
import { CartContext } from "../page";
import ItemOperator from "./ItemOperator";

export default function Dessert({ id, type, imageSet, title, price }) {
  //State:
  const { cartItems, handleAdd } = useContext(CartContext);
  //Dataflow:
  const isInCart = cartItems.find((item) => item.id === id);
  const cartQuantity = isInCart?.quantity || 0;

  const { desktop, movile, tablet, thumbnail } = imageSet;
  //Style:

  const mainButtonStyles = cn(
    "h-fit w-2/3 px-3 py-1.5",
    "flex gap-2 items-center justify-center",
    "absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2",
    "border border-[var(--rose-400)] bg-white rounded-full transition-colors",
    "",
    isInCart &&
      "bg-[var(--red)] border-[var(--red)] justify-between text-white",
    !isInCart && "hover:text-[var(--red)]"
  );
  const imgContainerStyles = cn(
    "relative aspect-video lg:aspect-square w-full bg-gray-200 rounded-lg overflow-hidden",
    isInCart && "border-2 border-[var(--red)]"
  );

  return (
    <div className="flex gap-5 flex-col mb-2">
      <div className="relative h-fit w-full">
        <div className={imgContainerStyles}>
          <Image src={desktop} fill className="object-cover" alt={title} />
        </div>

        {!isInCart ? (
          <button className={mainButtonStyles} onClick={() => handleAdd(id)}>
            <div className="relative w-4 aspect-square">
              <Image
                src={iconAddToCart}
                fill
                className="object-contain fill-white"
                alt="Add to cart icon"
              />
            </div>
            <span className="whitespace-nowrap text-xs font-bold">
              Add to Cart
            </span>
          </button>
        ) : (
          <div className={mainButtonStyles}>
            <ItemOperator decrements dessertId={id} />
            <span>{cartQuantity}</span>
            <ItemOperator dessertId={id} />
          </div>
        )}
      </div>
      <div className="flex flex-col font-bold text-sm">
        <span className="text-xs text-[var(--rose-500)]">{type}</span>
        <h3 className="text-md">{title}</h3>
        <span className="text-[var(--red)]">${price.toFixed(2)}</span>
      </div>
    </div>
  );
}
