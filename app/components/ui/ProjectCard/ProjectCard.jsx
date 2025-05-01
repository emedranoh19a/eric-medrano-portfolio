//TODO:
//Note: Until line 102, everything works good
import ProjectCardDesktop from "./ProjectCardDesktop";
import ProjectCardMobile from "./ProjectCardMobile";

const randomDescriptions = [
  "This one is still finding itself.",
  "The code is still baking.",
  "One more coffee brew to release.☕️",
  "Still in the markup limbo.",
  "The paint is still wet. 🎨",
  "Letting this one grow. 🌱",
  "Still arguing with me over which font to use.",
  "Under construction by an overcaffeinated squirrel (me).",
  "Refuses to build unless I say 'please'. 🙃",
];

export default function ProjectCard({
  className,
  index,
  hovering,
  hoveredSkill,
  ...projectData
}) {
  return (
    <>
      <ProjectCardDesktop
        className={className}
        index={index}
        hovering={hovering}
        hoveredSkill={hoveredSkill}
        {...projectData}
      />
      {/* No Bento Grid or complex interaction on Mobile versions. */}
      <ProjectCardMobile projectData={projectData} />
    </>
  );
}
