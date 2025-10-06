import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import {
  illustrationFinancialFreedom,
  illustrationLifestyle,
  illustrationPassions,
  illustrationWorkAnywhere,
} from "../imageIndex";

const features = [
  {
    icon: illustrationPassions,
    iconClassName: "w-[88px] h-[105px] left-[55%]",
    title: "Indulge your passions",
    description:
      "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
  },
  {
    icon: illustrationFinancialFreedom,
    iconClassName: "w-[74px] h-[88.25px]",
    title: "Gain financial freedom",
    description:
      "Start making money work for you. There’s nothing quite like earning while you sleep. ",
  },
  {
    icon: illustrationLifestyle,
    iconClassName: "w-[80px] h-[93.5px]",
    title: "Choose your lifestyle",
    description:
      "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.",
  },
  {
    icon: illustrationWorkAnywhere,
    iconClassName: "w-[104px] h-[74px]",
    title: "Work from anywhere",
    description:
      "Selling online means not being pinned down. Want to work AND travel? Go for it!",
  },
];
export default function Features() {
  return (
    <section id="features">
      <div className="flex flex-col lg:flex-row gap-12 sm:gap-8">
        {features.map((feature, i) => (
          <Feature
            {...feature}
            key={i}
            className={i % 2 === 0 ? "sm:pl-12 lg:pl-0" : "lg:pt-12"}
          />
        ))}
      </div>
    </section>
  );
}

function Feature({ icon, title, description, className, iconClassName }) {
  const containerStyles = cn(
    "flex flex-col items-center lg:items-start sm:flex-row lg:flex-col gap-8 sm:gap-12",
    "text-center sm:text-left",
    className
  );
  //FIX icon sizing.
  return (
    <div className={containerStyles}>
      <div className="w-[160px] h-[164px]  relative shrink-0 bg-blue-800 rounded-[48px] relative">
        <div
          className={clsx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            iconClassName
          )}
        >
          <div className="relative w-full h-full">
            <Image
              src={icon}
              alt={`${title} icon`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="preset-4 text-white mb-3 sm:mb-4 lg:mb-6">{title}</h2>
        <p className="preset-5">{description}</p>
      </div>
    </div>
  );
}
