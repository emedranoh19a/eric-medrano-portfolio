import Image from "next/image";

export default function TestimonialCard({ name, job, quote, image }) {
  return (
    <div>
      <div className=" mx-auto mb-14 w-18 aspect-square relative rounded-full overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Image of ${name}`}
        />
      </div>
      <p className="preset-10 text-grey-600 mb-8 lg:mb-18">{quote}</p>
      <h3 className="preset-7 text-grey-950 mb-2">{name}</h3>
      <h4 className="preset-12 text-grey-400">{job}</h4>
    </div>
  );
}
