import { cn } from "@/app/utils/utils";

export default function Ornamental({
  bottomColor = "var(--purple-900)",
  className = "",
}) {
  //Style:
  const containerStyles = cn(
    "absolute bottom-1 left-0 w-full translate-y-full ",
    className
  );
  return (
    <div className={containerStyles}>
      <svg
        className="w-full h-auto" // make it fluid!
        viewBox="0 0 375 24" // this is REQUIRED
        preserveAspectRatio="none" // stretch without distortion
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scaleY(1.1)" }}
      >
        <path
          d="M0 0V24H375V0C375 0 282.021 22.6667 188.021 22.6667C94.0206 22.6667 0 0 0 0Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
