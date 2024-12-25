import Link from "next/link";

export default function ProjectLink({
  externalProject,
  href,
  children,
  className = "",
}) {
  return (
    <Link
      href={href}
      passHref={externalProject}
      className={className}
      target={externalProject ? "_blank" : ""}
    >
      {children}
    </Link>
  );
}
