import { cn } from "@/app/utils/utils";
//TODO: Tackle the svg with the component, through the Image Next.js component, but without touching the svg original file.
export default function Button({
  text,
  variant = "normal",
  className,
  ...otherProps
}) {
  const buttonStyles = cn(
    "group  text-white cursor-pointer",
    "py-4 px-8",
    "bg-linear-to-br from-gradient-start to-gradient-end",
    "hover:from-blue-250 hover:to-blue-250 transition-colors",
    "rounded-full",
    variant === "normal"
      ? "preset-3-bold"
      : "preset-7-regular p-0 bg-transparent hover:text-blue-300 flex gap-2 items-center",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      <span>{text}</span>
      <Arrow
        className="inline-block w-4 text-red"
        //   fill={"#62E0D9"}
      />
    </button>
  );
}

function Arrow({ fill, className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <circle id="b" cx="6" cy="6" r="6" />
        <filter
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          filterUnits="objectBoundingBox"
          id="a"
        >
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation="1"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(2 2)">
          {/* <use fill="#000" filter="url(#a)" xlink:href="#b" /> */}
          {/* <use fill={fill} xlink:href="#b" /> */}
        </g>
        <path
          d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
          fill="#1B2330"
        />
      </g>
    </svg>
  );
}
