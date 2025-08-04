"use client";

import { createContext, useContext, useState } from "react";
import { imageJohn, imageTanya } from "../imageIndex";

const TestimonialContext = createContext(null);
const testimonials = [
  {
    name: "Tanya Sinclair",
    job: "UX Engineer",
    quote:
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    image: imageTanya,
  },
  {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    quote:
      "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    image: imageJohn,
  },
];

export default function TestimonialProvider({ children }) {
  //State:
  const [number, setNumber] = useState(0);

  //Handlers:
  const handleNext = () => {
    if (number === testimonials.length - 1) {
      setNumber(0);
      return;
    } else {
      setNumber((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (number === 0) {
      setNumber(testimonials.length - 1);
    } else {
      setNumber((prev) => prev - 1);
    }
  };
  return (
    <TestimonialContext.Provider
      value={{ testimonial: testimonials[number], handleNext, handlePrev }}
    >
      {children}
    </TestimonialContext.Provider>
  );
}

export const useTestimonial = () => {
  const context = useContext(TestimonialContext);
  if (context === undefined) {
    throw new Error("useTestimonial must be used within a testimonialProvider");
  }
  return context;
};
