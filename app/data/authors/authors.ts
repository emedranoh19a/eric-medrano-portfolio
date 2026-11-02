// data/authors.ts
import { Author } from "../projects/Proyect.types";
import angelaPhoto from "./angela-yu.png";
import frontEndMentorPhoto from "./front-end-mentor.png";
import jonasPhoto from "./jonas-schmedtmann.png";
import joshPhoto from "./josh-comeau.png";
export const authors = {
  angelaYu: {
    name: "Angela Yu",
    url: "https://drangelayu.com/",
    photo: angelaPhoto,
  },
  jonas: {
    name: "Jonas Schmedtmann",
    url: "https://jonas.io/",
    photo: jonasPhoto,
  },
  joshComeau: {
    name: "Josh Comeau",
    url: "https://www.joshwcomeau.com/",
    photo: joshPhoto,
  },
  frontEndMentor: {
    name: "Front End Mentor",
    url: "https://www.frontendmentor.io/",
    photo: frontEndMentorPhoto,
  },
} satisfies Record<string, Author>;
