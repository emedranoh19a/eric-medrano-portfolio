import { StaticImageData } from "next/image";

export type Translation = { en: string; ja: string; es: string };
export type PageLinks = { github: string | null; live: string | null };

// Note: one person or team, written once
export type Author = {
  name: string;
  url?: string;
  photo?: StaticImageData; // optional, some have no face
};

// Note: one thank-you on a project
export type Credit = {
  author: Author;
  work: string; // "The Complete React Bootcamp", "Front End Mentor challenge"
  url?: string; // link to the course, article, general for challenges
  thanks?: Translation; // optional: "Why I'm grateful"
};

export type Lesson = {
  text: Translation;
  snippet?: { language: string; code: string };
};

export type ProjectLevel =
  | "newbie"
  | "junior"
  | "intermediate"
  | "advanced"
  | "guru";

export type ProjectCategory =
  | "tutorial"
  | "challenge"
  | "professional"
  | "personal";
export type ProjectStatus = "ongoing" | "completed" | "maintained"; // Confirm with chat, but maintain is kind of "finished"
export type Technology =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "next-js"
  | "sass"
  | "dnd-kit"
  | "tailwind-css"
  | "react-hook-form"
  | "motion"
  | "react-hot-toast"
  | "zustand"
  | "tanstack-query";
// | "redux"
// | "orval"
// | "supabase"
// | "testing-library"
// | "jest";

export type Tag =
  | "search"
  | "filter"
  | "sort"
  | "pagination"
  | "dark-mode"
  | "animation"
  | "responsive"
  | "form-validation"
  | "authentication"
  | "drag-and-drop"
  | "multi-step-form"
  | "file-upload"
  | "data-visualization"
  | "authentication";

export type PinVariant =
  | "wide"
  | "landscape"
  | "square"
  | "standard"
  | "video"
  | "giraffe";

export type ProjectPage = {
  title: Translation; //title: home, about, suybscribe, gallery, etc
  description: Translation;
  preview: StaticImageData; // At the page level, preview image connotes the deviceMockups
  links: PageLinks; // can be external.
};
export type Project = {
  // Note: identity
  slug: string;
  title: Translation;
  description: Translation;
  // Note: classification
  level: ProjectLevel;
  category: ProjectCategory;
  status: ProjectStatus;
  // source: Source;
  stack: Technology[];
  tags?: Tag[]; // "sort,""dark-mode", "form-validation"...
  pinAspect: PinVariant;
  previews: {
    design: StaticImageData;
    mockup?: StaticImageData; // optional: only FEM projects
  };
  pages: [ProjectPage, ...ProjectPage[]]; // at least one
  challenges?: Translation[];
  lessons?: Lesson[];
  nextSteps?: Translation[];
  credits?: Credit[];
};
