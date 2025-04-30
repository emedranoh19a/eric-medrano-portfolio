import Link from "next/link";

export default function ProjectLink({
  isExternalProject,
  cancel = false, // true to return a simple div.
  href,
  children,
  className = "",
}) {
  return (
    <>
      {cancel ? (
        <div className={className}>{children}</div>
      ) : (
        <Link
          href={href}
          passHref={isExternalProject}
          className={className}
          target={isExternalProject ? "_blank" : ""}
        >
          {children}
        </Link>
      )}
    </>
  );
}
