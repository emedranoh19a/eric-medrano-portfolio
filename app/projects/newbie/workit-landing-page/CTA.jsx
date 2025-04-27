import clsx from "clsx";
import Button from "./components/Button";
import Text from "./components/Text";

export default function CTA() {
  const containerStyles = clsx(
    "relative w-full max-w-6xl grid bg-orange-500/20 place-items-center mx-auto"
    // "grid-cols-1 grid-rows-[1fr_2fr]",
    // "md:grid-cols-[1fr_4fr] md:grid-rows-[1fr_1fr]",
    // "xl:grid-rows-[1fr_1fr] "
  );

  const purpleContainerStyles = clsx(
    "relative bg-[var(--purple-900)]",
    "w-[335px] md:w-[504px] xl:w-[730px]",
    "mx-auto md:mx-0 md:ml-auto",
    "flex flex-col gap-8 p-8",
    "text-center md:text-left"
  );
  return (
    <section className=" bg-white pt-28 px-5 md:px-10">
      <div className={containerStyles}>
        <UserImage />
        <div className={purpleContainerStyles}>
          <Content />
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
        Hi, I'm Louis Graham, the founder of the company. Book a demo call with
        me to become a beta tester for our app and kickstart your company. Apply
        for access below and I’ll be in touch to schedule a call.
      </Text>
      <Button text="Apply for access" className="mx-auto md:mx-none" />
    </>
  );
}
function UserImage() {
  // "w-[335px] md:w-[504px] xl:w-[730px]",

  const userStyles = clsx(
    " w-60 aspect-square",
    "absolute top-0 right-1/2 translate-x-1/2 -translate-y-[80%] bg-lime-500 ",
    "md:right-[504px] md:-translate-y-[60%] md:translate-x-[40%] md:bg-sky-500",
    "xl:bg-fuchsia-500",
    "rounded-full"
  );
  return <div className={userStyles}>a</div>;
}
