import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import Button from "../components/Button";
import Container from "../components/Container";
import Glow from "../components/Glow";
import Text from "../components/Text";
import { check } from "../imageIndex";

const cards = [
  {
    title: "Starter",
    price: "19",
    features: ["1 book/month", "Online forums"],
  },
  //   Subscribe now
  {
    title: "Pro",
    price: "29",
    features: ["2 books/month", "Virtual meetups"],
    specialCard: true,
  },
  //   Talk to us
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Team access", "Private sessions"],
  },
];
export default function MembershipOptions() {
  const cardsContainerStyles = clsx(
    "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "lg:flex lg:flex-row lg:justify-center",
    ""
  );
  return (
    <Container as="section" id="pricing">
      <div className="lg:px-24">
        <Text
          preset={2}
          as="h2"
          className="text-[var(--neutral-900)] mb-6 sm:mb-10 lg:mb-16 w-full text-center"
        >
          Membership options
        </Text>
        <div className={cardsContainerStyles}>
          {cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </div>
    </Container>
  );
}

function Card({ features, specialCard = false }) {
  const containerStyles = cn(
    "relative z-0 flex flex-col gap-8 overflow-hidden",
    "p-6",
    "rounded-lg border boder-[var(--neutral-200)] lg:place-self-center",
    specialCard && "lg:py-10 bg-[var(--light-salmon-50)]"
  );
  return (
    <div className={containerStyles}>
      {specialCard && (
        <Glow className="-z-10 w-full bottom-0 right-0 translate-x-1/3 translate-y-1/3" />
      )}
      <Text preset={4} as="h4" className="text-[var(--neutral-900)]">
        Starter
      </Text>
      <div className="flex flex-row items-center gap-3">
        <Text as="span" className="text-[var(--neutral-900)]" preset={3}>
          $19
        </Text>
        <Text as="span" className="text-[var(--neutral-700)]" preset={5}>
          /month
        </Text>
      </div>
      <hr />
      <ul className="flex flex-col gap-4 flex-1">
        {features.map((feature, i) => (
          <li className="flex flex-row gap-3" key={i}>
            <div className="relative w-8 aspect-square">
              <Image
                className="object-contain"
                alt="check icon"
                fill
                src={check}
              />
            </div>
            <Text preset={5} className="text-[var(--neutral-700)]" as="span">
              {feature}
            </Text>
          </li>
        ))}
      </ul>
      <Button text="Subscribe now" className="text-center" />
    </div>
  );
}
