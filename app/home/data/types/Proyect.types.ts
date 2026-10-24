// type Technology =
//   | "html"
//   | "css"
//   | "javascript"
//   | "typescript"
//   | "react"
//   | "next-js"
//   | "sass"
//   | "dnd-kit"
//   | "tailwind-css"
//   | "react-hook-form"
//   | "motion"
//   | "react-hot-toast"
//   | "zustand"
//   | "tanstack-query";
// // | "redux"
// // | "orval"
// // | "supabase"
// // | "testing-library"
// // | "";

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
// type Status = "done" | "ongoing" | "maintaining";

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
// //   | "browser-extension"
// //   | "data-visualisation";
// type ProjectLevel =
//   | "newbie"
//   | "beginner"
//   | "intermediate"
//   | "advanced"
//   | "guru";

// type Acknowledgement = {
//   name: string;
//   url?: string;
//   contribution: Translation;
// };
// type ProjectCategory = "tutorial" | "challenge" | "personal" | "professional";

// type Author = {
//   name: string;
//   avatar: string;
//   url?: string;
//   role?: Translation;
// };

// type Resource = {
//   title: Translation;
//   url: string;
//   type: "article" | "tutorial" | "documentation" | "video" | "other";
//   author?: string;
//   description?: Translation;
//   image?: string;
// };
// type Project = {
//   title: Translation;
//   pages: PageType[];
//   status: Status;
//   description: Translation;
//   images: {
//     preview: string; //This preview can show multiple pages inside one single image
//     design: string; //This is the full screen of a single project
//   };
//   level: Level;
//   technologies: Technology[];
//   features: Feature[];
//   category: Category;
//   challenges: Translation[];
//   learned: Translation[];
//   continuedDevelopment: Translation[];
//   usefulResources: Resource[]; //What can I do here? to add articles... maybe some images of people of articles, tutorials, urls that go in there, etc
//   authors: Author[];
//   acknowledgements: {
//     //The person im helpul to
//     // Some link
//     //Why am I grateful for?
//     //What else
//   };
// };
