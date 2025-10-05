import clsx from "clsx";

export default function TextBlock({ title, children, className = "" }) {
  const containerStyles = clsx("text-center lg:text-left", className);
  return (
    <div className={containerStyles}>
      <h3 className="text-blue-900 preset-3 mb-4">{title}</h3>
      <p className="preset-5 text-gray-500">{children}</p>
    </div>
  );
}
