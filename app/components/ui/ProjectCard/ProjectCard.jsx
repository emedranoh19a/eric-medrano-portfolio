import ProjectCardDesktop from "./ProjectCardDesktop";
import ProjectCardMobile from "./ProjectCardMobile";

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
