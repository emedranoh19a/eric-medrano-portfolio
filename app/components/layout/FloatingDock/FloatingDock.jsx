/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
import FloatingDockDesktop from "./Desktop";

export default function FloatingDock({
  items = [],
  // desktopClassName,
  // mobileClassName,
  level,
}) {
  //Dataflow:
  const filteredProjects = items.filter(
    (project) => project.level === level.value
  );

  const desktopStyles = "";
  return (
    <>
      <FloatingDockDesktop items={filteredProjects} className={desktopStyles} />
      {/* TODO: The mobile version */}
      {/* <FloatingDockMobile
        items={projfilteredProjectsects}
        className={mobileClassName}
      /> */}
    </>
  );
}
