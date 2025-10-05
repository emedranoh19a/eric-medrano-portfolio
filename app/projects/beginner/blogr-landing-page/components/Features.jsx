import { cn } from "@/app/utils/utils";
import Image from "next/image";
import {
  illustrationLaptopDesktop,
  illustrationLaptopMobile,
} from "../imageIndex";
import TextBlock from "./ui/TextBlock";

export default function Features() {
  return (
    <section className="sm:py-20 sm:py-[82px] pb-[108px] lg:pt-[66px] lg:pb-[123px] lg:-translate-x-20 lg:scale-120">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-8 lg:gap-10">
        <Laptop className="" />
        <Content />
      </div>
    </section>
  );
}
function Laptop({ className = "" }) {
  const containerStyles = cn("w-full relative", className);
  return (
    <div className={containerStyles}>
      <Image
        src={illustrationLaptopDesktop}
        width={1000}
        height={1000}
        style={{ height: "auto" }}
        className="object-contain hidden lg:block"
        alt="laptop"
      />
      <Image
        src={illustrationLaptopMobile}
        width={1000}
        height={1000}
        style={{ height: "auto" }}
        className="object-contain lg:hidden"
        alt="laptop"
      />
    </div>
  );
}
function Content() {
  return (
    <div className="flex flex-col gap-14 sm:gap-16 text-center lg:text-left place-self-center sm:max-w-[540px]">
      <TextBlock title="Free, open, simple">
        Blogr is a free and open source application backed by a large community
        of helpful developers. It supports features such as code syntax
        highlighting, RSS feeds, social media integration, third-party
        commenting tools, and works seamlessly with Google Analytics. The
        architecture is clean and is relatively easy to learn.
      </TextBlock>
      <TextBlock title="Powerful tooling">
        Batteries included. We built a simple and straightforward CLI tool that
        makes customization and deployment a breeze, but capable of producing
        even the most complicated sites.
      </TextBlock>
    </div>
  );
}
