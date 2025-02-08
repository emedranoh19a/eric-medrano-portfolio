import Dessert from "./Dessert";

const desserts = [
  {
    id: 1,
    type: "Waffle",
    title: "Waffle with Berries",
    price: 6.5,
    imgInterpolation: "waffle",
  },
  {
    id: 2,
    type: "Crème Brûlée ",
    title: "Vanilla Bean Crème Brûlée ",
    price: 7,
    imgInterpolation: "creme-brulee",
  },
  {
    id: 3,
    type: "Macaron",
    title: "Macaron Mix of Five",
    price: 8,
    imgInterpolation: "macaron",
  },
  {
    id: 4,
    type: "Tiramisu",
    title: "classic Tiramisu",
    price: 5.5,
    imgInterpolation: "tiramisu",
  },
  {
    id: 5,
    type: "Baklava",
    title: "Pistachio Baklava",
    price: 5,
    imgInterpolation: "baklava",
  },
  {
    id: 6,
    type: "Pie",
    title: "Lemon Meringue Pie",
    price: 5,
    imgInterpolation: "meringue",
  },
  {
    id: 7,
    type: "Cake",
    title: "Red Velvet Cake",
    price: 4.5,
    imgInterpolation: "cake",
  },
  {
    id: 8,
    type: "Brownie",
    title: "Salted Caramel Brownie",
    price: 5.5,
    imgInterpolation: "brownie",
  },
  {
    id: 9,
    type: "Panna Cotta",
    title: "Vanilla Panna Cotta",
    price: 6.5,
    imgInterpolation: "panna-cotta",
  },
];

export default function DessertCatalogue() {
  return (
    <div className="">
      <h2 className="mb-2 font-bold text-3xl">Desserts</h2>
      <div className="h-fit  grid grid-cols-1 lg:grid-cols-3 gap-4">
        {desserts.map((dessert, index) => (
          <Dessert key={index} {...dessert} />
        ))}
      </div>
    </div>
  );
}
