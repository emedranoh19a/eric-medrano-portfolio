"use client";
import Image from "next/image";
import { useState } from "react";
import { questionsHowItWorks, questionsSafeDriving } from "../data";
import { chevron } from "../imageIndex";

export default function FAQs() {
  return (
    <section id="FAQ" className="mb-30 lg:mb-40">
      <div className="flex flex-col gap-12 md:gap-16">
        <h1 className="preset-2 text-center text-dark-navy">FAQs</h1>
        <AccordionGroup
          title="How it works"
          accordionItems={questionsHowItWorks}
        />
        <AccordionGroup
          title="Safe driving"
          accordionItems={questionsSafeDriving}
        />
      </div>
    </section>
  );
}

function AccordionGroup({ title, accordionItems }) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
      <h3 className="preset-3 text-dark-navy min-w-[350px] text-center lg:text-left">
        {title}
      </h3>
      <ul className="flex flex-col flex-1 gap-6">
        {accordionItems.map((accordionItem, index) => (
          <Accordion key={index} {...accordionItem} />
        ))}
      </ul>
    </div>
  );
}

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="bg-snow p-8 lg:px-10">
      {/* HEADER */}
      <button
        className="cursor-pointer w-full flex flex-row gap-4 justify-between"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="preset-4 text-dark-navy text-left">{question}</span>
        <span className="inline-block w-4 h-2 relative shrink-0">
          <Image src={chevron} alt="open" className="object-contain" fill />
        </span>
      </button>
      {open && <p className="text-dark-navy preset-body mt-6">{answer}</p>}
    </li>
  );
}
