import Image from "next/image";

//Question: How can I tackle the filling of an icon when used with Next's Image component?

export default function Icon({ name }) {
  //Dataflow:
  const iconUrl = `/projects/newbie/workit-landing-page/images/icon-${name}.svg`;
  return (
    <div className="aspect-square w-5 relative inline-block">
      <Image
        src={iconUrl}
        fill
        alt={`${name} logo`}
        className="object-contain transition-colors text-[var(--purple-500)] hover:text-[var(--purple-900)]"
      />
    </div>
  );
}
