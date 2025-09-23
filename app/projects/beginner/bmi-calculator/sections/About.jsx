"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import Curve from "../components/Curve";
import Text from "../components/Text";
import manEating from "../images/image-man-eating.webp";
export default function About() {
  const sectionCn = clsx(
    "w-fit lg:w-full",
    "grid grid-cols-1 sm:grid-cols-2 place-items-center",
    "mx-auto mb-[60px] sm:mb-[96px] lg:mb-[86px]",
    "sm:mr-[43px] lg:mr-0 lg:px-36",
    "gap-12 sm:gap-20 lg:gap-24",
    "lg:translate-x-0",
    "right-0 relative"
  );
  return (
    <section id="about" className={sectionCn}>
      <ManIllustration />
      <Content />
    </section>
  );
}

function ManIllustration() {
  return (
    <div className="relative w-full h-[354px] sm:scale-[1.15] lg:scale-100 origin-right sm:h-96 lg:h-[533px] mx-auto">
      <Image fill className="object-contain" src={manEating} alt="Man eating" />
    </div>
  );
}

function Content() {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint === "lg";
  return (
    <div className="relative max-w-[328px] sm:max-w-[331px] lg:max-w-[465px] mx-6">
      <Curve
        className="hidden lg:block top-0 right-0 -translate-y-[140%]"
        left
      />
      <Text
        as="h2"
        preset={isDesktop ? 2 : 3}
        className="text-(--blue-900) mb-8"
      >
        What your BMI result means
      </Text>
      <Text preset={6} className="text-(--grey-500)">
        A BMI range of 18.5 to 24.9 is considered a &lquot;healthy
        weight.&rquot; Maintaining a healthy weight may lower your chances of
        experiencing health issues later on, such as obesity and type 2
        diabetes. Aim for a nutritious diet with reduced fat and sugar content,
        incorporating ample fruits and vegetables. Additionally, strive for
        regular physical activity, ideally about 30 minutes daily for five days
        a week.
      </Text>
    </div>
  );
}
