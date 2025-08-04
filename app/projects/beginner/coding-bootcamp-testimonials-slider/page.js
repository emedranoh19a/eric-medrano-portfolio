"use client"
import Image from "next/image"
import Illustration from "./components/Illustration"
import Quote from "./components/Quote"
import TestimonialProvider from "./components/TestimonialProvider"
import { imageJohn, imageTanya, patternCurve } from "./imageIndex"
const testimonials = [
    {
        name: "Tanya Sinclair",
        job: "UX Engineer",
        quote: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
        image: imageTanya
    },
    {
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        image: imageJohn
    }]

export default function Page() {
    return <div className="relative bg-white grid place-items-center px-20 h-screen w-full">
        <div className="absolute bottom-0 left-0  h-20 w-full">
            <Image fill className="object-fill" src={patternCurve} />
        </div>
        <Content testimonialData={testimonials[0]} />
    </div>
}

function Content({ testimonialData }) {
    const { quote, name, job, image } = testimonialData
    return <TestimonialProvider >
        <div className="relative flex flex-col gap-32 md:gap-0 items-center md:flex-row-reverse h-fit z-0">
            <Illustration image={image} name={name} />
            <Quote quote={quote} name={name} job={job} />
        </div>
    </TestimonialProvider>
}

