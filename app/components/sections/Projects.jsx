import { projects } from "../../data";
import { BentoGrid, BentoGridItem } from "../BentoGrid";

//Project component.
export default function Projects() {
  {
    /* TODO: Overall projects, filterable. */
  }

  //Controll the state from here.
  return (
    <section id="projects">
      <BentoGrid className="max-w-4xl mx-auto mb-20">
        {projects.map((project, i) => (
          <BentoGridItem key={i} {...project} />
        ))}
      </BentoGrid>
    </section>
  );
}
