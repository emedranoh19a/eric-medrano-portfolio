export default function ProjectBody({ title, description }) {
  return (
    <div className="group-hover/bento:translate-x-2 transition duration-200">
      <div className="flex flex-row justify-between">
        <div className="font-sans font-bold text-neutral-600  mb-2 mt-2">
          {title}
        </div>
        {/* <TechIcons techs={techs} /> */}
      </div>
      <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        {description}
      </div>
    </div>
  );
}
