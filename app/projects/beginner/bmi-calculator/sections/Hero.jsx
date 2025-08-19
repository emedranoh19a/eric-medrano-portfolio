import Image from "next/image";
import Card from "../components/Card";
import Text from "../components/Text";
import logo from "../images/logo.svg";
export default function Hero() {
  return (
    <header className="relative mb-20 z-0 pt-8 px-6 sm:px-10 lg:py-[88px] lg:px-36">
      {/* background */}

      {/* background: linear-gradient(90deg, rgba(214, 252, 254, 0) 0%, #D6E6FE 100%); */}

      <div className="absolute w-full h-2/3 top-0 left-0 lg:h-full lg:w-2/3 rounded-br-2xl bg-gradient-to-r from-[var(--gradient-start-transparent)]  to-[var(--gradient-end)] -z-10" />
      <div className="flex flex-col gap-8 sm:gap-10 lg:gap-6">
        <Logo />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-auto">
          <HeroContent />
          <Card />
        </div>
      </div>
    </header>
  );
}
function Logo() {
  return (
    <div className="relative w-16 aspect-square">
      <Image src={logo} alt="Logo" fill className="object-contain" />
    </div>
  );
}
function HeroContent() {
  return (
    <div>
      <Text
        as="h1"
        preset={2}
        className="mb-6 lg:mb-8 lg:mt-20 text-[var(--blue-900)]"
      >
        Body Mass Index Calculator Better
      </Text>
      <Text preset={6} className="text-[var(--grey-500)]">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </Text>
    </div>
  );
}
