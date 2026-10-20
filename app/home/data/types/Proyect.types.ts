import { Level } from "./Level.types";

export type ProjectPageMockup = {
  slug: string; //identifier
  title: Translation;
  image: string; //a single mock with multiple devices.
  liveUrl?: string;
  githubUrl?: string;
};

export type Acknowledgement = {
  name: string;
  url?: string;
  contribution: Translation;
};

export type Author = {
  name: string;
  avatar: string;
  url?: string;
  role?: Translation;
};

export type Resource = {
  title: Translation;
  url: string;
  type: "article" | "tutorial" | "documentation" | "video" | "other";
  author?: string;
  description?: Translation;
  image?: string;
};
export type Project = {
  title: Translation;
  pages: PageType[];
  status: Status;
  description: Translation;
  images: {
    preview: string; //This preview can show multiple pages inside one single image
    design: string; //This is the full screen of a single project
  };
  level: Level;
  technologies: Technology[];
  features: Feature[];
  category: Category;
  challenges: Translation[];
  learned: Translation[];
  continuedDevelopment: Translation[];
  usefulResources: Resource[]; //What can I do here? to add articles... maybe some images of people of articles, tutorials, urls that go in there, etc
  authors: Author[];
  acknowledgements: {
    //The person im helpul to
    // Some link
    //Why am I grateful for?
    //What else
  };
};
