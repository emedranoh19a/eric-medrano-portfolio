"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export const cloudProps = {
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
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon, theme) => {
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

export function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}

export function SkillsGlobe() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
//TODO. review the general styles for the next theme. Do I really want a black background?
//TODO: At least, I want some kind of degradation
const slugs = [
  //"typescript",
  //"dart",
  //"java",
  //"android",
  //"flutter",
  //"express",
  //"prisma",
  //"amazonaws",
  //"postgresql",
  //"firebase",
  //"nginx",
  //"vercel",
  //Adobe?
  //Youtube? haha
  //buzzfeed
  //meta: swift.
  //metro de la ciudad de mexico!
  //"testinglibrary",
  //"jest",
  //"cypress",
  //"docker",
  //"flutter quiero"
  //"jira",
  //quiero pstgresql
  //quierno nintendogamecube
  //opencv
  //pandas
  //graphql
  //storybook
  //selenium
  //raspberry pi
  //arduino
  //chartjs
  //unity estaria chido
  //egghead
  //nintendo
  //nintendoswitch
  //RIVE!!!
  //Three.js
  //Blender
  //"androidstudio",
  //"sonarqube",
  //"figma",
  //"nintendogamecube",
  "javascript",
  "jira",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "sass",
  "reactquery",
  "reacthookform",
  "tailwindcss",
  "python",
  "c",
  "netlify",
  "styledcomponents",
  "reactrouter",
  "bootstrap",
  "jquery",
  "nextjs",
  "mui",
  "cssmodules",

  "chakraui",
  "npm",
  "mongodb",
  "jss",
  "metrodelaciudaddemexico",
  "git",
  "framer",
  "redux",
  "reacttable",
  "udemy",
  "slack",
  "openai",
  "framer",
  "webflow",
  "github",
  "gitlab",
  "visualstudiocode",
];
