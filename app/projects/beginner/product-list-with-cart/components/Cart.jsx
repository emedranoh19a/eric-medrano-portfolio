import Image from "next/image";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="bg-white h-fit p-4 text-sm">
      <h2 className="font-bold text-[var(--red)] text-lg mb-2">
        Your Cart (7)
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="flex justify-between items-center">
          <span>Order Total</span>
          <span className="font-bold text-lg">${(46.5).toFixed(2)}</span>
        </div>
        <div className="bg-[var(--rose-50)] py-3 rounded-lg flex gap-2 justify-center items-center">
          <div className="relative h-4 aspect-square">
            <Image
              src="/projects/beginner/product-list-with-cart/images/icon-carbon-neutral.svg"
              fill
              className="object-contain"
              alt="carbon neutral icon"
            />
          </div>
          <div>
            This is a <span className="font-bold">carbon-neutral</span> delivery
          </div>
        </div>
        <button className="bg-[var(--red)] text-center text-[var(--rose-100)] w-full rounded-full py-2">
          Confirm Order
        </button>
      </div>
    </div>
  );
}
