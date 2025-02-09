import { useContext } from "react";
import { dessertsCatalogue } from "../dessertsCatalogue";
import { CartContext } from "../page";

export default function CartItem({ id, quantity }) {
  const { handleDeleteKind } = useContext(CartContext);
  //Dataflow:
  //Find the item in the catalogue
  const dessertInfo = dessertsCatalogue.find((item) => item.id === id);
  const { title, price } = dessertInfo;
  const dessertSubtotal = (price * quantity).toFixed(2);

  return (
    <div className="flex justify-between py-3 items-center border-b-2 border-[var(--rose-50)]">
      <div className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-1">
        <div className="col-span-4 font-bold">{title}</div>
        <div className="text-[var(--red)] font-bold">{quantity}x</div>
        <div className="text-[var(--rose-400)] mr-2">@ ${price.toFixed(2)}</div>
        <div className="font-bold text-[var(--rose-500)]">
          ${dessertSubtotal}
        </div>
      </div>
      <button
        onClick={() => handleDeleteKind(id)}
        className="border-2 border-[var(--rose-300)] rounded-full p-1 group hover:border-[var(--rose-500)]"
      >
        <div className="relative w-2 aspect-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            className="fill-[var(--rose-300)] group-hover:fill-[var(--rose-500)]"
            viewBox="0 0 10 10"
          >
            <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
          </svg>
        </div>
      </button>
    </div>
  );
}
