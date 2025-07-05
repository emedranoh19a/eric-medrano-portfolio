"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon, theme, imageArray) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const SkillsGlobe = ({ iconSlugs = [], imageArray }) => {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <div className="w-full h-full min-h-96 relative">
      <div className="w-5/6  absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Cloud {...cloudProps}>
          <>
            {renderedIcons}
            {imageArray &&
              imageArray.length > 0 &&
              imageArray.map((image, index) => (
                <a
                  className="relative w-1 h-1"
                  key={index}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <Image
                    height="42"
                    width="42"
                    alt="A globe"
                    src={image}
                    priority
                    className="bg-red-500 object-contain"
                  />
                </a>
              ))}
          </>
        </Cloud>
      </div>{" "}
    </div>
  );
};

export default SkillsGlobe;
