/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

// import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import FloatingDockDesktop from "./Desktop";
import FloatingDockMobile from "./Mobile";

export const FloatingDock = ({
  items = [],
  desktopClassName,
  mobileClassName,
  level,
}) => {
  const filteredProjects = items.filter(
    (project) => project.level === level.value
  );
  return (
    <>
      <FloatingDockDesktop
        items={filteredProjects}
        className={desktopClassName}
      />
      {/* TODO: The mobile version */}
      <FloatingDockMobile
        items={filteredProjects}
        className={mobileClassName}
      />
    </>
  );
};
