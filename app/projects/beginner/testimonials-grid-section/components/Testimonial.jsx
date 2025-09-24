import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";

export default function Testimonial({
  user,
  main,
  details,
  className,
  mainClassName,
  detailsClassName,
}) {
  const containerStyles = cn("p-8 flex flex-col gap-4 rounded-lg", className);
  const titleStyles = cn("preset-1", mainClassName);
  const textStyles = cn("preset-3", detailsClassName);
  return (
    <div className={containerStyles}>
      <TestimonialHeader
        user={user}
        mainClassName={mainClassName}
        detailsClassName={detailsClassName}
      />
      <h2 className={titleStyles}>{main}</h2>
      <p className={textStyles}>{details}</p>
    </div>
  );
}

function TestimonialHeader({ user, mainClassName, detailsClassName }) {
  const { name, src, description, className } = user;

  const avatarStyles = clsx(
    "relative aspect-square w-8 rounded-full overflow-hidden",
    className
  );
  const nameStyles = cn("mb-1 preset-2", mainClassName);
  const descriptionStyles = cn("preset-4", detailsClassName);
  return (
    <div className="flex gap-4 items-center">
      <div className={avatarStyles}>
        <Image
          src={src}
          fill
          className="object-cover"
          alt={`Image of ${name}`}
        />
      </div>
      <div className="flex-1">
        <h2 className={nameStyles}>{name}</h2>
        <span className={descriptionStyles}>{description}</span>
      </div>
    </div>
  );
}
