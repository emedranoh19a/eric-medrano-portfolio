import Image from "next/image";
import { omelette } from "../imageIndex";

export default function FoodImage() {
  return (
    <div className="relative w-full h-60 md:rounded-lg mb-4 overflow-hidden">
      <Image alt="An Omelette" fill className="object-cover" src={omelette} />
    </div>
  );
}
