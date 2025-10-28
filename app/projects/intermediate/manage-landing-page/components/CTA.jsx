import Button from "./ui/Button";

export default function CTA() {
  return (
    <section className="relative z-0 py-[94px] sm:py-10 lg:py-16 gap-10 flex flex-col lg:flex-row justify-between items-center bg-lime-500">
      <div className="bg-orange-400 absolute h-full w-screen top-0 -z-10 left-1/2 -translate-x-[50vw]" />
      <p className="text-white preset-2 max-w-[295px] sm:max-w-[440px] lg:max-w-[445px] text-center lg:text-left">
        Simplify how your team works today.
      </p>
      <Button label="Get Started" variant="secondary" />
    </section>
  );
}
