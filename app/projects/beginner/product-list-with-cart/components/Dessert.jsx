import { cn } from "@/app/utils/utils";
import Image from "next/image";

export default function Dessert({ id, type, imgInterpolation, title, price }) {
  //State:

  //Dataflow:
  const isInCart = true;
  //Style:

  const mainButtonStyles = cn(
    "h-fit w-2/3 px-3 py-1.5",
    "flex gap-2 items-center justify-center",
    "absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2",
    "border border-[var(--rose-400)] bg-white rounded-full",
    "",
    isInCart && "bg-[var(--red)] border-[var(--red)] justify-between text-white"
  );
  const imgContainerStyles = cn(
    "relative aspect-video lg:aspect-square w-full bg-gray-200 rounded-lg overflow-hidden",
    isInCart && "border-2 border-[var(--red)]"
  );
  //Handlers:

  return (
    <div className="flex gap-5 flex-col mb-2">
      <div className="relative h-fit w-full">
        <div className={imgContainerStyles}>
          <Image
            src={`/projects/beginner/product-list-with-cart/images/image-${imgInterpolation}-desktop.jpg`}
            fill
            className="object-cover"
            alt={title}
          />
        </div>
        <div className={mainButtonStyles}>
          {!isInCart ? (
            <>
              <div className="relative w-4 aspect-square">
                <Image
                  src="/projects/beginner/product-list-with-cart/images/icon-add-to-cart.svg"
                  fill
                  className="object-contain fill-white"
                />
              </div>
              <span className="whitespace-nowrap text-xs font-bold">
                Add to Cart
              </span>
            </>
          ) : (
            <>
              <ItemOperator decrements id={id} />
              <span>4</span>
              <ItemOperator id={id} />
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col font-bold text-sm">
        <span className="text-xs text-[var(--rose-500)]">{type}</span>
        <h3 className="text-md">{title}</h3>
        <span className="text-[var(--red)]">${price.toFixed(2)}</span>
      </div>
    </div>
  );
}

function ItemOperator({ decrements, dessertId }) {
  const imgInterpolation = decrements ? "decrement" : "increment";
  //Handlers:
  const handleClick = () => {
    if (decrements) {
      console.log("a dessert is decrementing");
    } else {
      console.log("adding");
    }
  };

  return (
    <div className="p-1 border border-white rounded-full" onClick={handleClick}>
      <div className="relative aspect-square w-2">
        <Image
          src={`/projects/beginner/product-list-with-cart/images/icon-${imgInterpolation}-quantity.svg`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
