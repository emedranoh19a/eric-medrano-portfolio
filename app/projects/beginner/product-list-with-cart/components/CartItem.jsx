import Image from "next/image";

export default function CartItem() {
  //Handlers:
  const handleDelete = () => {
    console.log("Remmoving item...");
  };
  return (
    <div className="flex justify-between py-3 items-center border-b-2 border-[var(--rose-50)]">
      <div className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-1">
        <div className="col-span-4 font-bold">Classic Tiramisu</div>
        <div className="text-[var(--red)] font-bold">1x</div>
        <div className="text-[var(--rose-400)] mr-2">@ $5.50</div>
        <div className="font-bold text-[var(--rose-500)]">$5.50</div>
      </div>
      <div
        onClick={handleDelete}
        className="border-2 border-[var(--rose-300)] rounded-full p-1"
      >
        <div className="relative w-2 aspect-square">
          <Image
            src="/projects/beginner/product-list-with-cart/images/icon-remove-item.svg"
            fill
            className="object-contain"
            alt="remove icon"
          />
        </div>
      </div>
    </div>
  );
}
