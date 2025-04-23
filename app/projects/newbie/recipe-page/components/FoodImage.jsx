import Image from "next/image";

export default function FoodImage() {
  return (
    <div className="relative w-full h-60 md:rounded-lg mb-4 overflow-hidden">
      <Image
        alt="Image of an Omelette"
        fill
        className="object-cover"
        src="/projects/newbie/recipe-page/image-omelette.jpeg"
      />
    </div>
  );
}
