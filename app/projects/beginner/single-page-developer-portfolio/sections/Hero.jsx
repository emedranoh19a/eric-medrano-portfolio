import Image from "next/image";
import Button from "../components/Button";
import Circle from "../components/Circle";
import Rings from "../components/Rings";
import Text from "../components/Text";
import { imageProfileDesktop } from "../imageIndex";
import Footer from "./Footer";

export default function Hero() {
  return (
    <div className="relative sm:static lg:relative z-0 mb-20 sm:min-h-[600px] sm:mb-14 lg:mb-28">
      <Footer as="nav" />
      <Adam />
      <div className="flex flex-col sm:w-[60%] text-center sm:text-left lg:pb-40">
        <Text
          as="h1"
          preset={1}
          className="relative z-0 mb-6 sm:mb-14 lg:mb-10 font-bold text-[40px] leading-[40px] tracking-[-1.14px] sm:text-[72px] sm:leading-[72px] sm:tracking-[-2.05px] lg:font-bold lg:text-[88px] lg:leading-[88px] lg:tracking-[-2.5px]"
        >
          <Rings className="-z-10 top-0 left-0 -translate-y-1/2 -translate-x-1/2" />
          Nice to meet you! I'm{" "}
          <span className="underline decoration-[var(--green)]">
            Adam Keyes.
          </span>
        </Text>
        <Text className="mb-6 sm:mb-8 lg:mb-16">
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </Text>
        <Button
          text="Contact me"
          className="sm:self-start w-fit mx-auto sm:mx-0"
        />
      </div>
    </div>
  );
}

function Adam() {
  return (
    <div className="-z-10 w-[144px] mb-10 h-[242px] sm:w-[322px] sm:h-[600px] lg:w-[445px] lg:h-[720px] sm:absolute sm:top-0 sm:right-0 relative mx-auto">
      <div className="w-full h-full relative z-0">
        <Circle className="z-10 bottom-0 right-0 translate-x-[120%] sm:translate-x-1/2 lg:-translate-y-1/2 lg:right-full lg:translate-x-1/2" />
        <Image
          src={imageProfileDesktop}
          className="object-cover"
          alt="Adama Keyes"
          fill
        />
      </div>
    </div>
  );
}
