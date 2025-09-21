import { cn } from "@/app/utils/utils";
import Image from "next/image";
import {
  ptnApps,
  ptnGraphicDesign,
  ptnIllustrations,
  ptnMotionGraphics,
  ptnPhotography,
  ptnUiUx,
} from "../../imageIndex";

const services = [
  {
    imgCn: "w-[128px] h-[192px]",
    className: "col-span-2 row-span-2 bg-[var(--galactic-blue-500)]", //FIX this. it does not span the rows on mobile.
    imgSrc: ptnGraphicDesign,
    title: "Graphic Design",
  },
  {
    imgCn: "w-16 aspect-square",
    className: "bg-[var(--summer-yellow-500)]",
    imgSrc: ptnUiUx,
    title: "UI/UX",
  },
  {
    imgCn: "w-16 aspect-square",
    className: "bg-[var(--pink-500)]",
    imgSrc: ptnApps,
    title: "Apps",
  },
  {
    imgCn: "w-32 h-16",
    className:
      "col-span-2 lg:col-start-3 lg:row-start-2 bg-[var(--light-red-500)]",
    imgSrc: ptnIllustrations,
    title: "Illustrations",
  },
  {
    imgCn: "w-[160px] h-16",
    className: "col-span-2 bg-[var(--cyan-500)]",
    imgSrc: ptnPhotography,
    title: "Photography",
  },
  {
    imgCn: "w-[128] h-16",
    className: "col-span-2 bg-[var(--dark-purple-500)]",
    imgSrc: ptnMotionGraphics,
    title: "Motion Graphics",
  },
];

function Service({ imgCn, className, imgSrc, title }) {
  const containerStyles = cn(
    "w-full min-h-[182px] h-full rounded-lg p-5",
    className
  );
  const imgContainerStyles = cn("absolute z-10 top-0 right-0", imgCn);
  return (
    <div className={containerStyles}>
      <div className="relative w-full h-full">
        {/* TODO: insert the image as an absolute element */}
        {/* <div className="bg-red-500 absolute top-0 right-0 w-10 aspect-square"></div> */}
        <div className={imgContainerStyles}>
          <div className="w-full h-full relative ">
            <Image src={imgSrc} fill className="object-contain" alt="alt" />
          </div>
        </div>
        <span className="preset-3 text-[var(--neutral-0)] mt-auto absolute bottom-0 left-0">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function Services() {
  //TODO: How to apply the same height to all?
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-y-5 gap-x-6">
      {services.map((service, i) => (
        <Service key={i} {...service} />
      ))}
    </div>
  );
}
