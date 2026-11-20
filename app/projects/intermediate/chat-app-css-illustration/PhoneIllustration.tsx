"use client"
import { cn } from "@/app/utils/utils";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import PhoneHeader from "./PhoneHeader";
import { dogImage1, dogImage2, dogImage3 } from "./images/imageIndex";

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const pop: Variants = {
    hidden: { opacity: 0, scale: 0.6, y: 10 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 22 },
    },
};

// Logic: the dog row is a child AND a parent (it staggers its own photos)
const dogRow: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

//Make everything none selectable, on purpose
//Animate with Stagger Animation (Framer motion)
//Renombrar las fotos de recipe-finder de front end mentor
export default function Phoneillustration() {

    return <motion.div className="select-none relative z-0 bg-white rounded-[30px] py-2.75 px-[9.5px] shadow-[0px_30px_60px_-10px] shadow-[#3e2753]/25">
        <div className="bg-white border-t-0 rounded-b-[14px] w-32.25 h-7.25 absolute left-1/2 -translate-x-1/2 top-0" />
        <div className="w-61.75 bg-[#F5F3F7] rounded-[20px] overflow-hidden">
            <PhoneHeader />
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="px-[7.5px] pb-2.5">
                <MessageBubble variant="us">
                    <p>
                        That sounds great. I&apos;d be happy to discuss more.
                    </p>
                </MessageBubble >
                <MessageBubble variant="us" last>
                    <p>
                        Could you send over some pictures of your dog, please?
                    </p>
                </MessageBubble >
                <Dogs />
                <MessageBubble variant="them" >
                    <p>
                        Here are a few pictures. She&apos;s a happy girl!
                    </p>
                </MessageBubble >
                <MessageBubble variant="them" last>
                    <p>
                        Can you make it?
                    </p>
                </MessageBubble >
                <MessageBubble variant="us" >
                    <p>
                        She looks so happy! The time we discussed works. How long shall I take her out for?
                    </p>
                </MessageBubble >
                <BookingMessage text="30 minute walk" price={29} />
                <BookingMessage text="1 hour walk" price={49} />
                <Input />
            </motion.div>
        </div >
    </motion.div>
}
function Dogs() {
    return <motion.div variants={dogRow} className="ml-auto flex gap-2 w-fit">
        {[dogImage1, dogImage2, dogImage3].map((src, i) => (
            <motion.div
                key={i}
                variants={pop}
                className="rounded-[10px] w-10 aspect-square relative overflow-hidden"
            >
                <Image src={src} fill className="object-cover" alt="Dog" />
            </motion.div>
        ))}
    </motion.div>
}
function Input() {
    return <div className="flex justify-between items-center pl-3.5 pr-1 pt-1.25 pb-[4.7px] bg-white rounded-[17px]">
        <p className="font-regular text-[9px] tracking-[-0.07px] text-[#C5C9CC]">
            Type a message…
        </p>
        <div className="bg-[#3E2753] w-6.25 aspect-square rounded-full relative text-white text-center ">
            →
        </div>
    </div>
}
type MessageBubbleProps = {
    children: ReactNode;
    variant: "us" | "them";
    last?: boolean,
    className?: string;
}
function MessageBubble({ children, variant, last, className }: MessageBubbleProps) {
    const containerStyles = cn("my-2 px-1.5 py-2 rounded-[10px] text-[8px]/[11px] max-w-[112px]",
        variant === "us" && "text-[#9341C8] bg-[#eee5f4] rounded-bl-[4px]",
        variant === "them" && "ml-auto text-[#6E5D7E] bg-white rounded-br-[4px] shadow-[0px_10px_5px_-5px] shadow-[#3E2753]/5",
        last && "mb-4",
        className)
    return <motion.div
        variants={pop}
        // Note: bubbles pop out from their own corner
        style={{ originX: variant === "us" ? 0 : 1, originY: 1 }}
        className={containerStyles}
    >
        {children}
    </motion.div>
}

function BookingMessage({ price, text }) {
    return <MessageBubble variant="us" className="bg-linear-to-br from-[#E844FF] to-[#8739FF] flex gap-8.75 items-center max-w-none w-fit py-2.5 pr-4">
        <div className="gap-2 flex">
            <div className="w-3 bg-transparent aspect-square rounded-full border border-[#e472ff]" />
            <p className="text-white font-regular text-[8px]/[11px]">{text}</p>
        </div>
        <span className="inline-block font-bold text-[12px]/[11px] text-white">${price}</span>
    </MessageBubble>
}
