import clsx from "clsx";
import Image from "next/image";
import Button from "../components/Button";
import Text from "../components/Text";
import {
  iconAnimation,
  iconBusiness,
  iconCrypto,
  iconDesign,
  iconPhotography,
} from "../imageIndex";

const features = [
  {
    icon: iconAnimation,
    title: "Animation",
    content:
      "Animation Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    icon: iconDesign,
    title: "Design",
    content:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    icon: iconPhotography,
    title: "Photography",
    content:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    icon: iconCrypto,
    title: "Crypto",
    content:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
  },
  {
    icon: iconBusiness,
    title: "Business",
    content:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
];
export default function Content() {
  const sectionStyles = clsx(
    "pt-16 pb-20 px-5",
    "md:px-10 md:pb-36",
    "xl:px-20",
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    "gap-y-8 xl:gap-y-14",
    "md:gap-x-6 xl:gap-x-8"
  );
  const firstItemStyles = clsx(
    "h-auto mt-8 py-8 px-8 md:py-16 shadow-2xl shadow-neutral-100/80 rounded-3xl",
    "bg-gradient-to-b from-[var(--gradient-pink-top)] to-[var(--gradient-pink-bottom)]"
  );
  return (
    <section className={sectionStyles}>
      <div className={firstItemStyles}>
        <Text className="text-white" preset={3} as="h2">
          Check out our most popular courses!
        </Text>
      </div>
      {features.map((feature, i) => (
        <Feature key={i} {...feature} />
      ))}
    </section>
  );
}
function Feature({ icon, title, content }) {
  return (
    <div className="relative bg-white shadow-2xl shadow-neutral-100/80 py-16 mt-8 px-8 flex flex-col items-start gap-6 rounded-3xl">
      <FeatureIcon icon={icon} />
      <Text preset={4} as="h3">
        {title}
      </Text>
      <Text preset={5}>{content}</Text>
      <Button variant="link" />
    </div>
  );
}
function FeatureIcon({ icon }) {
  return (
    <div className="absolute w-14 aspect-square top-0 left-8 -translate-y-1/2 bg-gradient-to-b from-[var(--gradient-pink-top)] to-[var(--gradient-pink-bottom)] rounded-full">
      <div className="w-full h-full relative">
        <Image fill className="object-contain" alt="" src={icon} />
      </div>
    </div>
  );
}
