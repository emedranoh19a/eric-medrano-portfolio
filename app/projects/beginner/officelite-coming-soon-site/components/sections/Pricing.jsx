"use client";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { bgPatternPricing } from "../../home-assets";
import Button from "../ui/Button";

const cards = [
  {
    id: 1,
    eyebrow: "Basic",
    price: "Free",
    priceDescription: "Up to 5 users for free",
    features: [
      "Basic document collaboration",
      "2 GB storage",
      "Great security and support",
    ],
    variant: "normal",
  },
  {
    id: 2,
    eyebrow: "Pro",
    price: "$9.99",
    priceDescription: "Per user, billed monthly",
    features: [
      "All essential integrations",
      "50 GB storage",
      "More control and insights",
    ],
    variant: "primary",
  },
  {
    id: 3,
    eyebrow: "Ultimate",
    price: "$19.99",
    priceDescription: "Per user, billed monthly",
    features: ["Robust work management", "100 GB storage", "VIP support"],
    variant: "normal",
  },
];
export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-0 w-full grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-5 lg:gap-8"
    >
      <div className="bg-neutral-900 absolute -z-10 w-screen h-[calc(50%+500px)] top-1/2 left-1/2 -translate-x-[50vw]">
        <div className="relative z-0 w-full h-full overflow-hidden opacity-50 ">
          <div className="w-[1200px] sm:w-[1454px] lg:w-[2036px] aspect-square absolute -bottom-24 sm:-bottom-[483px] lg:-bottom-[816px] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:-left-[702px]">
            <div className="relative z-0 w-full h-full">
              <Image
                src={bgPatternPricing}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {cards.map((card) => (
        <PricingCard key={card.id} {...card} />
      ))}
      {/* <CTA /> */}
    </section>
  );
}
function PricingCard({ eyebrow, price, priceDescription, features, variant }) {
  const router = useRouter();
  const isPrimary = variant === "primary";
  const cardContainerStyles = clsx(
    "relative z-0 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-12 sm:gap-y-6 lg:gap-10 overflow-hidden",
    "px-6 py-10 sm:p-12 lg:px-5 lg:py-10",
    isPrimary ? "bg-blue-500 text-white" : "bg-neutral-0 text-neutral-800"
  );
  const buttonVariant = isPrimary ? "white" : "secondary";
  return (
    <div className={cardContainerStyles}>
      {isPrimary && (
        <div className=" -z-10 hidden sm:block lg:hidden size-[880px] absolute top-1/2 -translate-y-1/2 right-[142px]">
          <Image
            src={bgPatternPricing}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      )}
      <CardDescription
        eyebrow={eyebrow}
        price={price}
        priceDescription={priceDescription}
        className=""
      />
      <CardFeatures
        features={features}
        variant={variant}
        className="sm:row-span-2 self-center"
      />
      <Button
        variant={buttonVariant}
        className="w-fit mx-auto sm:ml-0 lg:mx-auto"
        onClick={() => {
          router.push("/projects/beginner/officelite-coming-soon-site/sign-up");
        }}
      />
    </div>
  );
}

function CardDescription({ eyebrow, price, priceDescription, className }) {
  const containerStyles = clsx(
    "text-center sm:text-left lg:text-center",
    className
  );
  return (
    <div className={containerStyles}>
      <span className="preset-2 mb-4 lg:mb-10 block">{eyebrow}</span>
      <span className="preset-1 mb-2 block">{price}</span>
      <span className="preset-4 block">{priceDescription}</span>
    </div>
  );
}
function CardFeatures({ features, variant, className }) {
  const containerStyles = clsx(
    "flex flex-col gap-4 text-center sm:text-left lg:text-center",
    className
  );
  const listItemStyles = clsx(
    variant === "primary" ? "text-neutral-0/75" : "text-neutral-500"
  );
  return (
    <ul className={containerStyles}>
      {features.map((feature, index) => (
        <li key={index} className={listItemStyles}>
          {feature}
        </li>
      ))}
    </ul>
  );
}
