import { Translation } from "./Translation.types";

export type Author = {
  name: string;
  avatar: string | null;
  url?: string;
  role?: Translation;
};

export type Acknowledgement = {
  name: string;
  url?: string;
  contribution: Translation;
};

export type Resource = {
  title: Translation;
  author?: string;
  category: "article" | "tutorial" | "docs" | "other";
  url?: string; //optional, since it can be a book as well.
  description?: Translation;
  image?: string;
};
