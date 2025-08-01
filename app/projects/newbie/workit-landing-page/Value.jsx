import clsx from "clsx";
import Image from "next/image";
import Text from "./components/Text";
import { ornamental2 } from "./imageIndex";

const features = [
  {
    title: "Actionable insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    title: "Data-driven decisions",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    title: "Always affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
];
export default function Value() {
  const sectionClasses = clsx(
    "relative",
    "md:px-10 xl:px-20",
    //We don't need padding top, because we got far from the cellphone image with margin.
    "mt-16 px-5 py-14 py-28 md:py-40 xl:py-72  bg-[var(--purple-100)]"
  );
  const featuresLayoutStyles = clsx(
    "flex flex-col xl:flex-row mx-auto gap-8  ",
    "items-center md:items-start xl:justify-center xl:items-start",
    "text-center md:text-start xl:text-center"
  );
  return (
    <section id="value" className={sectionClasses}>
      <div className={featuresLayoutStyles}>
        {features.map((feature, index) => (
          <Feature key={index} {...feature} number={index + 1} />
        ))}
      </div>
      <div className="absolute w-full h-6 md:h-14 xl:h-20  bottom-0 left-0">
        <div className="relative w-full h-full">
          <Image src={ornamental2} fill className="object-fill" />
        </div>
      </div>
      {/* <Ornamental
        className="bg-[var(--purple-100)] bottom-0"
        bottomColor="var(--white)"
      /> */}
    </section>
  );
}

function Feature({ title, description, number }) {
  return (
    <div className="gap-6 flex flex-col md:flex-row xl:flex-col">
      <FeatureNumber number={number} />
      <FeatureContent title={title} description={description} />
    </div>
  );
}

function FeatureNumber({ number = 1 }) {
  const circleStyles =
    "relative mx-auto my-auto w-12 xl:w-14 h-12 xl:h-14 aspect-square text-center rounded-full grid place-items-center border border-2 border-[var(--purple-900)]";
  const textStyles =
    "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2";

  return (
    <div className={circleStyles}>
      <span className={textStyles}>{number}</span>
    </div>
  );
}

function FeatureContent({ title, description }) {
  return (
    <div>
      <Text preset={3} className="mb-4">
        {title}
      </Text>
      <Text preset={4}>{description} </Text>
    </div>
  );
}
