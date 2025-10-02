import Image from "next/image";
import { features } from "../data/data";

export default function Features() {
  return (
    <section
      id="features"
      className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-x-18 sm:gap-y-20 max-w-[907px] mx-auto"
    >
      {features.map((feature, index) => (
        <Feature {...feature} key={index} />
      ))}
    </section>
  );
}

function Feature({ title, text, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 sm:w-[104px] aspect-square  mb-6 sm:mb-4 relative">
        <Image src={icon} className="object-contain" fill alt={title} />
      </div>
      <h2 className="preset-2 mb-2">{title}</h2>
      <p className="preset-8">{text}</p>
    </div>
  );
}
