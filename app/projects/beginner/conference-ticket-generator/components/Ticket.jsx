"use client";

import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { iconGithub, patternTicket } from "../imageIndex";
import Logo from "./Logo";

export default function Ticket() {
  const {
    ticketData: { name, email, githubUser, image },
  } = useFormContext();
  return (
    <>
      <PageContent name={name} email={email} />
      <TicketShape name={name} githubUser={githubUser} image={image} />
    </>
  );
}
function PageContent({ name, email }) {
  const bp = useBreakpoint();

  //Style:
  const titleStyles = clsx(
    "mb-5 text-(--neutral-0) text-center",
    bp === "base" ? "preset-1" : "preset-1-desktop"
  );
  const paragraphStyles = clsx(
    "mb-5 text-(--neutral-300) text-center text-pretty ",
    "max-w-[514px] mx-auto",
    bp === "base" ? "preset-4" : "preset-4-desktop"
  );
  return (
    <div className="mb-[72px] sm:mb-20 lg:mb-[110px] w-full max-w-[814px] mx-auto px-4 sm:px-8">
      <h1 className={titleStyles}>
        Congrats,{" "}
        <span className="bg-linear-to-r from-(--gradient-start) to-(--gradient-end) text-transparent bg-clip-text">
          {name}{" "}
        </span>
        Your ticket is ready.
      </h1>
      <p className={paragraphStyles}>
        We&apos;ve emailed your ticket to{" "}
        <span className="text-(--orange-500)">{email}</span> and will send
        updates in the run up to the event.
      </p>
    </div>
  );
}
function TicketShape({ githubUser, name, image }) {
  const bp = useBreakpoint();

  const ticketNumberStyles = clsx(
    bp === "base" || bp === "sm" ? "preset-3" : "preset-3-desktop",
    "text-(--neutral-500)",
    "top-1/2 right-4 -translate-y-1/2",
    "absolute rotate-90"
  );

  return (
    <div className="relative z-0 w-[343px] h-[160px] sm:w-[600px] sm:min-h-[280px] mx-auto">
      <div className={ticketNumberStyles}>#01609</div>
      <div className="w-full -z-10 absolute inset-0">
        <Image
          fill
          className="object-contain"
          alt="ticket"
          src={patternTicket}
        />
      </div>
      <div className="flex flex-col justify-between h-full w-full p-4">
        <TicketHeader />
        <TicketBody name={name} githubUser={githubUser} image={image} />
      </div>
    </div>
  );
}

function TicketHeader() {
  const bp = useBreakpoint();

  //Style:
  const titleStyles = clsx(
    "mb-2 text-(--neutral-0) text-center whitespace-nowrap text-left w-fit",
    bp === "base" ? "preset-2" : "preset-2-desktop"
  );
  const textStyles = cn(
    "text-(--neutral-300) flex items-center gap-2 text-left w-fit",
    bp === "base" || bp === "sm" ? "preset-6-mobile" : "preset-6"
  );

  return (
    <div className="flex gap-3 sm:gap-5 items-start ">
      <Logo />
      <div>
        <h2 className={titleStyles}>Coding Conf</h2>
        <div className={textStyles}>
          <span className="whitespace-nowrap">Jan 31, 2025 / Austin, TX</span>
        </div>
      </div>
    </div>
  );
}

function TicketBody({ name, githubUser, image }) {
  const bp = useBreakpoint();
  const { preview } = useFormContext();
  const nameStyles = clsx(
    "text-(--neutral-0)",
    bp === "base" || bp === "sm" ? "preset-3" : "preset-3-desktop"
  );
  const emailStyles = clsx(
    "flex items-center gap-1 sm:gap-2.5 preset-6 text-(--neutral-300)",
    bp === "base" || bp === "sm" ? "preset-6" : "preset-6-desktop"
  );

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="bg-red-500 w-10 sm:w-20 aspect-square rounded-xl block">
        <img src={preview} alt="Preview" className="w-[100px] aspect square" />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <h3 className={nameStyles}>{name}</h3>
        <div className={emailStyles}>
          <span className="w-4 aspect-square sm:w-[22px]  relative">
            <Image
              src={iconGithub}
              alt="github icon"
              className="object-contain"
              fill
            />
          </span>{" "}
          <span>{githubUser}</span>
        </div>
      </div>
    </div>
  );
}
