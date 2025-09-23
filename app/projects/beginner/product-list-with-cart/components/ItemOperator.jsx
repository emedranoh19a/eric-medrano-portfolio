import { useContext } from "react";
import { CartContext } from "../page";

export default function ItemOperator({ decrements, dessertId }) {
  const { handleDelete, handleAdd } = useContext(CartContext);
  //Handlers:
  //Note: At this point, the item is already in the cart
  return (
    <button
      className="group cursor-pointer p-1 border border-(--rose-100) transition-colors rounded-full hover:bg-(--rose-100)"
      onClick={() => {
        if (decrements) {
          handleDelete(dessertId);
        } else {
          handleAdd(dessertId);
        }
      }}
    >
      <div className="relative aspect-square w-2.5 fill-(--rose-50) transition-colors group-hover:fill-(--red) grid place-items-center">
        <OperatorIcon decrements={decrements} />
      </div>
    </button>
  );
}

function OperatorIcon({ decrements }) {
  if (decrements) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="2"
        // fill="none"
        viewBox="0 0 10 2"
        className=""
      >
        <path d="M0 .375h10v1.25H0V.375Z" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
      >
        <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
      </svg>
    );
  }
}
