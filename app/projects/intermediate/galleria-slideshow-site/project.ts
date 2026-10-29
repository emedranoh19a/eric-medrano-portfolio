import { Project } from "@/app/types/Proyect.types";
import devicesHome from "./previews/devices-home.png";
import fullDesign from "./previews/full-design.jpg";
import preview from "./previews/preview.jpg";
// import devicesHome from "./previews/devices-home.png";
// {
//     title: "Galleria Slideshow",
//     titleJp: "",
//     titleEs: "Galería de arte",
//     description: "Front End Mentor challenge",
//     descriptionJp: "Front End Mentor のチャレンジ",
//     descriptionEs: "Desafío de Front End Mentor",
//     image:
//       "/projects/front-end-mentor/intermediate/intermediate_galleria-slideshow-site.jpg",
//     url: "/projects/intermediate/galleria-slideshow-site",
//     level: 2,
//     techs: ["nextjs", "tailwindcss"],
//     isImportant: true,
//     isComplete: true,
//     isPublic: true,
//     isExternalProject: false,
//   },

//TODO: Primero organizarlo todo aquí mero. Luego ir
export const galleriaSlideshowSite = {
  title: { en: "Galleria Slideshow Site", ja: "美術ギャラリーサイト", es: "" },
  previews: {
    mockup: preview,
    design: fullDesign,
  },
  category: "challenge",
  description: { en: "", ja: "", es: "" },
  level: "intermediate",
  stack: ["next-js", "typescript", "react", "tailwind-css"],
  status: "ongoing",
  links: { github: "", live: "" },
  pages: [
    {
      title: {
        es: "Home",
        en: "",
        ja: "",
      },
      description: {
        es: "",
        en: "",
        ja: "",
      },
      preview: devicesHome,
      links: {
        github: "",
        live: "",
      },
    },
    {
      title: {
        es: "About",
        en: "",
        ja: "",
      },
      description: {
        es: "",
        en: "",
        ja: "",
      },
      preview: devicesHome,
      links: {
        github: "",
        live: "",
      },
    },
  ],
  process: {
    challenges: [],
    learned: [],
    continuedDevelopment: [],
  },

  // process: "",
} satisfies Project;

// export type Project = {
//remaining things.
//   features: Feature[];

//   usefulResources: Resource[]; //What can I do here? to add articles... maybe some images of people of articles, tutorials, urls that go in there, etc
//   authors: Author[];
//   acknowledgements: {
//     //The person im helpul to
//     // Some link
//     //Why am I grateful for?
//     //What else
//   };
// };
