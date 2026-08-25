import { projectsAdvanced } from "./projects-advanced";
import { projectsBeginner } from "./projects-beginner";
import { projectsGuru } from "./projects-guru";
import { projectsIntermediate } from "./projects-intermediate";
import { projectsNewbie } from "./projects-newbie";
import { projectsRealWorld } from "./projects-real-world";
import { projectsUdemy } from "./projects-udemy";

//Ordered by relevance
export const projects = [
  ...projectsRealWorld,
  ...projectsUdemy,
  ...projectsGuru,
  ...projectsAdvanced,
  ...projectsIntermediate,
  ...projectsBeginner,
  ...projectsNewbie,
];
