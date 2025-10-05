"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import { illustrationEditorMobile } from "../imageIndex";
import TextBlock from "./ui/TextBlock";

export default function About() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    bp === "base" || bp === "sm" ? "preset-3" : "preset-2",
    "text-blue-900 text-center mb-14 sm:mb-0 lg:mb-[90px]"
  );
  return (
    <section className="py-[100px] relative">
      <div className="w-1/2 aspect-square absolute top-40 right-1/2 translate-x-[50vw]">
        <Illustration className="relative h-full hidden lg:block" />
      </div>
      <h2 className={titleStyles}>Designed for the future</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-2 mx-auto relative">
        <Illustration className="lg:hidden" />

        <Content />
      </div>
    </section>
  );
}
function Illustration({ className }) {
  const containerStyles = clsx("w-full", className);
  return (
    <div className={containerStyles}>
      <Image
        className=""
        src={illustrationEditorMobile}
        alt=""
        width={1000}
        height={1000}
      />
    </div>
  );
}
function Content() {
  return (
    <div className="sm:max-w-[540px] flex flex-col gap-14 sm:gap-16 mx-auto place-self-center lg:mb-20">
      <TextBlock title="Introducing an extensible editor">
        Blogr features an exceedingly intuitive interface which lets you focus
        on one thing: creating content. The editor supports management of
        multiple blogs and allows easy manipulation of embeds such as images,
        videos, and Markdown. Extensibility with plugins and themes provide easy
        ways to add functionality or change the looks of a blog.
      </TextBlock>
      <TextBlock title="Robust content management">
        Flexible content management enables users to easily move through posts.
        Increase the usability of your blog by adding customized categories,
        sections, format, or flow. With this functionality, you’re in full
        control.
      </TextBlock>
    </div>
  );
}
