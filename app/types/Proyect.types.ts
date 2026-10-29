// import { StaticImageData } from "next/image";

import { StaticImageData } from "next/image";
import { Technology } from "./Technology.types";
import { Translation } from "./Translation.types";

// type ProjectPageMockup = {
//   slug: string; //identifier
//   title: Translation;
//   image: string; //a single mock with multiple devices.
//   liveUrl?: string;
//   githubUrl?: string;
// };
// type Feature =
//   | "search"
//   | "filter"
//   | "dark-mode"
//   | "animation"
//   | "responsive"
//   | "form-validation"
//   | "authentication"
//   | "drag-and-drop";
// type Functionality =
//   //navigation
//   | "navigation"
//   | "accordion"
//   | "tabs"
//   | "carousel"
//   //Data manipulation
//   | "search"
//   | "filter"
//   | "sort"
//   | "pagination"
//   //User input
//   | "form-validation"
//   | "multi-step-form"
//   | "file-upload"
//   //Display
//   | "data-visualization"
//   | "gallery"
//   | "video-player"
//   //Personalization
//   | "dark-mode"
//   | "multilanguage"
//   //Interaction
//   | "drag-and-drop"
//   | "animation"
//   | "keyboard-shortcuts"
//   //E-commerce
//   | "shopping-cart"
//   | "product-comparison"
//   | "checkout"
//   //Authentication
//   | "authentication"
//   | "user-profile"
//   | "permissions"
//   //Communication
//   | "notifications"
//   | "comments"
//   | "real-time"
//   //Productivity
//   | "favorites"
//   | "bookmarks"
//   | "undo-redo";

// type TechnicalCapability =
//   | "data-fetching"
//   | "database"
//   | "state-management"
//   | "local-storage"
//   | "caching";
// type PageType = {
//   title: Translation; //home, about, subscribe, etc.
//   image: string; //mock of devices showing a single page
//   live: string;
//   github: string;
// };

// type ProjectType =
//   | "component"
//   | "landing-page"
//   | "multi-page-website"
//   | "web-app"
//   | "dashboard"
//   | "e-commerce"
//   | "portfolio"
//   | "blog"
//   | "game";
//   | "browser-extension"
//   | "data-visualisation";

type ProjectLevel = "newbie" | "junior" | "intermediate" | "advanced" | "guru";
type ProjectCategory = "tutorial" | "challenge" | "professional" | "personal";
type ProjectStatus = "ongoing" | "completed" | "maintained"; // Confirm with chat, but maintain is kind of "finished"
type PageLinks = {
  github: string | null;
  live: string | null;
}; //consider adding an external link
type ProjectPage = {
  title: Translation; //title: home, about, suybscribe, gallery, etc
  description: Translation;
  preview: StaticImageData; // At the page level, preview image connotes the deviceMockups
  links: PageLinks; // can be external.
};

export type Project = {
  title: Translation;
  description: Translation;
  level: ProjectLevel;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: Technology[];
  previews: {
    mockup: StaticImageData; //Front End Mentor style
    design: StaticImageData; //Full Website Design extracted.
  };
  links: PageLinks; //Must be the same as the first link of the pages array.
  pages: ProjectPage[];
  //TODO: have a better understanding of what is changing
  process: {
    challenges?: Translation[];
    learned?: Translation[];
    continuedDevelopment?: Translation[];
  };
  //Establecer un layout de Pinterest
  //Features:

  //Links of the main folder for the proyect.

  //Each project (not project page) should have a README.md
  //how to define at least one Page?
  //Define metadata.
};
//   features: Feature[];
//   usefulResources: Resource[]; //What can I do here? to add articles... maybe some images of people of articles, tutorials, urls that go in there, etc
//   authors: Author[];
//   acknowledgements: {
//     //The person im helpul to
//     // Some link
//     //Why am I grateful for?
//     //What else
//   };

// Establecer las prioridades para reorganizar mi portafolio.
// Probablemente sea más accesible definir unas cuantas cosas, antes de empezar con los detalles. Por ejemplo, empezar primero con:
// El título en los 3 idiomas
// La descripción en los 3 idiomas
// El stack de tecnologías.
// La categoría del proyecto (tutorial, challenge, etc)
// El URL.
// El indicador de si el proyecto es externo o no.
