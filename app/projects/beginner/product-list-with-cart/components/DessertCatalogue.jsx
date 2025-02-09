import { dessertsCatalogue } from "../dessertsCatalogue";
import Dessert from "./Dessert";

export default function DessertCatalogue() {
  return (
    <div className="">
      <h2 className="mb-2 font-bold text-3xl">Desserts</h2>
      <div className="h-fit  grid grid-cols-1 lg:grid-cols-3 gap-4">
        {dessertsCatalogue.map((dessert, index) => (
          <Dessert key={index} {...dessert} />
        ))}
      </div>
    </div>
  );
}
