import ProductInfo from "./ProductInfo";
import ProductShowcase from "./ProductShowcase";

export default function Product() {
  return (
    <div className="bg-red-500 w-full flex-1 grid grid-rows-[1fr_2fr] sm:grid-rows-[auto] gap-3 place-items-center grid-cols-1 sm:grid-cols-2">
      <ProductShowcase />
      <ProductInfo />
    </div>
  );
}
