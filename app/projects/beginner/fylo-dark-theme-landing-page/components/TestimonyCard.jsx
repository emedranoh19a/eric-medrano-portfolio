import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { bgQuotes } from "../imageIndex";

export default function TestimonyCard({
  hasQuote,
  name,
  occupation,
  img,
  testimony,
}) {
  const containerStyles = cn(
    "py-8 px-6 bg-navy-800 shadow-[5px_5px_8px_4px_rgba(56,_56,_56,_0.0991282)]",
    "rounded-lg",
    "flex flex-col gap-4"
  );
  return (
    <div className="relative z-0">
      {hasQuote && (
        <div className="h-[55px] w-[45px] absolute -top-10 -left-5 -z-10">
          <div className="w-full h-full relative">
            <Image src={bgQuotes} className="object-contain" fill alt="" />
          </div>
        </div>
      )}
      <div className={containerStyles}>
        <p className="preset-8">{testimony}</p>
        <div className="flex gap-2 justify-start items-center">
          <div className="aspect-square w-6 relative rounded-full overflow-hidden">
            <Image
              src={img}
              alt={`Image of ${name}`}
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col justify-start">
            <span className="preset-9-bold">{name}</span>
            <span className="preset-10">{occupation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
