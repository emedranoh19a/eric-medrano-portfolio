"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

function PlusIcon() {
  return <>+</>;
}
function MinusIcon() {
  return <>-</>;
}
function IconStar() {
  return (
    <span className="inline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        // fill="none"
        viewBox="0 0 40 41"
      >
        <path
          fill="#AD28EB"
          d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
        />
      </svg>
    </span>
  );
}
function AccordionItem({ title, content }) {
  //State
  const [isOpen, setIsOpen] = useState(false);
  const buttonStyles = clsx(
    " mr-4 p-2 h-6 w-6 flex items-center justify-center",
    "text-white bg-purple-500 hover:bg-purple-600",
    "rounded-full",
    "transiiton-all",
    isOpen && "bg-black"
  );

  // add a horizontal rule. but how?
  return (
    <li
      className="group flex flex-col py-3"
      onClick={() => setIsOpen((s) => !s)}
    >
      <div className="flex justify-between py-3 group-hover:cursor-pointer transition-all">
        <h4 className="text-lg font-semibold group-hover:text-purple-400">
          {title}
        </h4>
        <button className={buttonStyles}>
          {!isOpen ? <PlusIcon /> : <MinusIcon />}
        </button>
      </div>
      {/* Implement a transition. It might be good with framer motion. */}
      {isOpen && <div className="text-gray-400">{content}</div>}
    </li>
  );
}
function BackgroundImage() {
  return (
    <div className="w-full top-0 absolute h-56 bg-red-50">
      <Image
        src="/faq-accordion/images/background-pattern-desktop.svg"
        fill
        objectFit="cover"
        alt=""
      />
    </div>
  );
}
//TODO implement a collapsible zone in this page.
const questions = [
  {
    title: "What is Frontend Mentor, and how will it help me? ",
    content:
      "Frontend Mentor offers realistic coding challenges to help debelopers improve their fronotend coding skills with projevys in HTML, CSS, and JavaScript. It's suitable fot all lebels and ideal for potfolio building",
  },
  {
    title: "Is Frontend Mentor free?",
    content:
      "Frontend Mentor offers realistic coding challenges to help debelopers improve their fronotend coding skills with projevys in HTML, CSS, and JavaScript. It's suitable fot all lebels and ideal for potfolio building",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    content:
      "Frontend Mentor offers realistic coding challenges to help debelopers improve their fronotend coding skills with projevys in HTML, CSS, and JavaScript. It's suitable fot all lebels and ideal for potfolio building",
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    content:
      "Frontend Mentor offers realistic coding challenges to help debelopers improve their fronotend coding skills with projevys in HTML, CSS, and JavaScript. It's suitable fot all lebels and ideal for potfolio building",
  },
];
function Page() {
  return (
    <div className="bg-purple-50  w-screen h-screen relative flex items-center justify-center">
      <BackgroundImage />
      <div className="bg-white shadow-2xl shadow-purple-500/20 h-fit min-h-5/6 w-1/2 z-10 p-6 rounded-xl  flex flex-col justify-start gap-5">
        <div className="flex gap-6 items-center">
          <IconStar />
          <h1 className="inline text-4xl font-bold">FAQs</h1>
        </div>
        <ul className="h-full">
          {questions.map((question, index) => {
            return <AccordionItem {...question} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Page;
