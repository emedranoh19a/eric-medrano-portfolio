"use client";
import { Red_Hat_Text } from "next/font/google";
import Image from "next/image";
import { useContext } from "react";
import { dessertsCatalogue } from "../dessertsCatalogue";
import { iconOrderConfirmed } from "../imageIndex";
import { CartContext } from "../page";
const redHatText = Red_Hat_Text({ subsets: ["latin"] });

export default function OrderConfirmation({ onCloseModal }) {
  //State:
  const { cartItems, setCartItems } = useContext(CartContext);

  //Dataflow:
  //For each item in the cart, find the item's price and operate.
  const totalAmount = cartItems.reduce((ac, cartItem) => {
    const dessertInfo = dessertsCatalogue.find(
      (dessert) => dessert.id === cartItem.id
    );
    return ac + dessertInfo.price * cartItem.quantity;
  }, 0);

  return (
    <div
      className={redHatText.className}
      style={{
        "--red": "hsl(14,86%,42%)",
        "--green": "hsl(159, 69%, 38%)",
        "--rose-50": "hsl(20, 50%, 98%)",
        "--rose-100": "hsl(13, 31%, 94%)",
        "--rose-300": "hsl(14, 25%, 72%)",
        "--rose-400": "hsl(7, 20%, 60%)",
        "--rose-500": "hsl(12, 20%, 44%)",
        "--rose-900": "hsl(14, 65%, 9%)",
      }}
    >
      <Image
        src={iconOrderConfirmed}
        width={30}
        height={30}
        className="mb-3"
        alt="Confirm Order icon"
      />

      <h2 className="text-3xl text-[var(--rose-900)] font-bold">
        Order Confirmed
      </h2>
      <p className="mb-3 text-sm text-[var(--rose-500)]">
        We hope you enjoy your food!
      </p>
      <div className="mb-3 min-w-96 bg-[var(--rose-50)] p-4">
        <ul>
          {cartItems.map((item, index) => (
            <ListItem
              key={index}
              dessertId={item.id}
              quantity={item.quantity}
            />
          ))}
        </ul>
        <div className="w-full pt-4 flex justify-between items-center">
          <span className="text-[var(--rose-900)] text-sm font-semibold">
            Order total
          </span>
          <span className="text-xl font-bold text-[var(--rose-900)]">
            ${totalAmount.toFixed(2)}
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          onCloseModal();
          setCartItems([]);
        }}
        className="w-full text-center text-[var(--rose-50)] bg-[var(--red)] rounded-full py-2"
      >
        Start New Order
      </button>
    </div>
  );
}

function ListItem({ dessertId, quantity }) {
  const dessertInfo = dessertsCatalogue.find((item) => item.id === dessertId);
  const {
    title,
    price,
    imageSet: { thumbnail },
  } = dessertInfo;
  const subtotal = price * quantity;

  return (
    <li className="flex justify-between py-3 items-center">
      <div className="flex flex-row gap-3">
        <div className="relative aspect-square w-10 rounded-md overflow-hidden ">
          <Image
            src={thumbnail}
            className="object-cover"
            fill
            alt={`Thumbnail for ${title}`}
          />
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold text-[var(--rose-900)] text-sm">{title}</h5>
          <div className="flex gap-3">
            <span className="text-[var(--red)] font-bold text-xs">
              {quantity}x
            </span>
            <span className="text-[var(--rose-500)] text-xs">
              @ ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div>
        <span className="font-semibold text-sm">${subtotal.toFixed(2)}</span>
      </div>
    </li>
  );
}
