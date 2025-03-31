"use client";
import Image from "next/image";
import { useState } from "react";

//TODO: Implement with a portal, the pop over.
export default function Cart() {
  //State:
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative aspect-square w-5" onClick={() => setIsOpen(true)}>
      <Image
        fill
        className="object-contain"
        alt="Logo of Sneakers"
        src="/projects/intermediate/ecommerce-product-page/images/icon-cart.svg"
      />
    </div>
  );
}

function CartContent() {
  return <div>Cart Content</div>;
}
