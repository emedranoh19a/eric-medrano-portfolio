//TODO:

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
const projects = [
  {
    title: "Omnifood",
    description: "Not so advanced, but definitely not a beginner project. ",
    image: "/projects/other/omnifood_preview.png",
    url: "",
    externalProject: true,
    level: 2,
    techs: ["html", "css"],
    important: true,
  },
  //TODO: Delete the name folder for the Name Eric. Nice assets, but it just look ugly
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: "i",
  //   // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: "i",
  //   // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: "i",
  //   // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: "i",
  //   // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: "i",
  //   // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: "i",
  //   // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
