import Modal, { ModalOpen, ModalWindow } from "@/app/components/ui/Modal";
import Image from "next/image";
import { useContext } from "react";
import { dessertsCatalogue } from "../dessertsCatalogue";
import { CartContext } from "../page";
import CartItem from "./CartItem";
import OrderConfirmation from "./OrderConfirmation";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const itemsNumber = cartItems.reduce((acum, item) => item.quantity + acum, 0);

  const totalAmount = cartItems.reduce((acum, item) => {
    //find the item
    const dessertItem = dessertsCatalogue.find(
      (dessert) => dessert.id === item.id
    );
    return acum + item.quantity * dessertItem.price;
  }, 0);

  return (
    <div className="bg-white h-fit p-4 text-sm">
      <h2 className="font-bold text-[var(--red)] text-lg mb-2">
        Your Cart ({itemsNumber})
      </h2>
      {itemsNumber === 0 ? (
        <div>
          <div className="relative w-40 aspect-square mx-auto my-5">
            <Image
              src="/projects/beginner/product-list-with-cart/images/illustration-empty-cart.svg"
              fill
              className="object-contain"
              alt=""
            />
          </div>
          <p className="text-center font-bold text-[var(--rose-500)] mb-5 text-sm">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            {cartItems.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span>Order Total</span>
            <span className="font-bold text-lg">${totalAmount.toFixed(2)}</span>
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
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </div>
          </div>
          <Modal>
            <ModalWindow
              name="cartModal"
              overlayStyles=""
              modalStyles="p-5"
              closeButtonStyles="hidden"
            >
              <OrderConfirmation />
            </ModalWindow>
            <ModalOpen opens="cartModal">
              <button className="bg-[var(--red)] hover:brightness-[.9] transition text-center text-[var(--rose-100)] w-full rounded-full py-2">
                Confirm Order
              </button>
            </ModalOpen>
          </Modal>
        </div>
      )}
    </div>
  );
}
