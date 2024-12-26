/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

// import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import FloatingDockDesktop from "./Desktop";

export const FloatingDock = ({
  items = [],
  desktopClassName,
  mobileClassName,
  level,
}) => {
  console.log(level);
  const filteredProjects = items.filter(
    (project) => project.level === level.value
  );
  return (
    <>
      {/* TODO: The desktop version */}
      <FloatingDockDesktop
        items={filteredProjects}
        className={desktopClassName}
      />
      {/* TODO: The mobile version */}
      {/* <FloatingDockMobile
        items={projfilteredProjectsects}
        className={mobileClassName}
      /> */}
    </>
  );
};
