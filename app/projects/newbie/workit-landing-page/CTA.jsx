import clsx from "clsx";
import Image from "next/image";
import Button from "./components/Button";
import Text from "./components/Text";
import { imgFounder } from "./imageIndex";

export default function CTA() {
  const containerStyles = clsx(
    "relative w-full  max-w-6xl xl:max-w-screen-2xl  w-full grid   mx-auto",
    "mt-10 pb-10",
    "md:mt-20 md:pb-20",
    "xl:mt-40 xl:pb-40",
    "xl:pl-40"
  );

  const purpleContainerStyles = clsx(
    "relative bg-[var(--purple-900)]",
    "w-[335px] md:w-[504px] xl:w-[730px] ",
    "mx-auto md:mx-0 md:ml-auto",
    "xl:ml-auto",
    "flex flex-col gap-8 p-8",
    "text-center md:text-left"
  );
  return (
    <section className="relative bg-white pt-60 px-5 md:px-10 pb-10">
      <div className="max-w-2xl mx-auto">
        <div className={containerStyles}>
          <UserImage />
          <div className={purpleContainerStyles}>
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
}

function Content() {
  return (
    <>
      <Text preset={2} className="text-[var(--purple-100)] font-normal">
        Be the first to test
      </Text>

      <Text preset={4} className="text-white text-[var(--purple-100)]">
        Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call
        with me to become a beta tester for our app and kickstart your company.
        Apply for access below and I&apos;ll be in touch to schedule a call.
      </Text>
      <Button text="Apply for access" className="mx-auto md:mx-none" />
    </>
  );
}
function UserImage() {
  // "w-[335px] md:w-[504px] xl:w-[730px]",

  const userStyles = clsx(
    " w-60 aspect-square",
    "absolute top-0 right-1/2 translate-x-1/2 -translate-y-[80%]",
    "md:right-[504px] md:-translate-y-[60%] md:translate-x-[40%]",
    "xl:w-96 xl:transform-[translateX(-50%)]",
    "rounded-full"
  );
  return (
    <div className={userStyles}>
      <div className="w-full h-full relative">
        <Image
          fill
          alt="Founder of Webkit"
          className="object-cover"
          src={imgFounder}
        />
      </div>
    </div>
  );
}
