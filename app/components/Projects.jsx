//TODO:

import { projects } from "../data";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

//Project component.
export default function Projects() {
  //Controll the state from here.
  return (
    <BentoGrid className="max-w-4xl mx-auto mb-20">
      {projects.map((project, i) => (
        <BentoGridItem key={i} {...project} />
      ))}
    </BentoGrid>
  );
}

//TODO: move this array to the centralized data.
//Level: newbie, beginner, intermediate, advanced, guru
