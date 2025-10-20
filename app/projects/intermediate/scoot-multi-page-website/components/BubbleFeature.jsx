import Image from "next/image";

function BubbleFeature({ img, alt, number, title, description }) {
  return (
    <li className="text-center">
      <div className="w-[240px] mx-auto aspect-square relative z-0 mb-16 md:mb-[87px]">
        <Image
          src={img}
          alt={alt}
          fill
          className="object-contain rounded-full"
        />
        <NumberCircle number={number} />
      </div>
      <h4 className="preset-4 text-dark-navy mb-[27px]">{title}</h4>
      <p className="text-dim-grey preset-body max-w-[457px] mx-auto ">
        {description}
      </p>
    </li>
  );
}

function NumberCircle({ number }) {
  return (
    <div className="w-24 aspect-square bg-yellow rounded-full absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-full h-full relative">
        <span className="absolute text-dark-navy top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 preset-4">
          {`${number}`.padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
export default BubbleFeature;
