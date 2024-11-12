"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

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
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
const slugs = [
    // "typescript",
    "javascript",
    // "dart",
    // "java",
    "react",
    // "flutter",
    // "android",
    "html5",
    "css3",
    "nodedotjs",
    // "express",
    "nextdotjs",
    // "prisma",
    // "amazonaws",
    // "postgresql",
    // "firebase",
    // "nginx",
    // "vercel",
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
    //Adobe?
    //Youtube? haha
    //buzzfeed
    //meta: swift.
//metro de la ciudad de mexico!
"metrodelaciudaddemexico",
    // "testinglibrary",
    // "jest",
    // "cypress",
    // "docker",
    //"flutter quiero"
    "git",
    "framer",
    // "jira",
    // quiero pstgresql
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
    "redux",

    "reacttable",
    //nintendo
    //nintendoswitch
    //TODO: Quiero aprender RIVE!!!!
    //Three.js
    //Blender
    "udemy",
    "slack",
    "openai",
    "nintendogamecube",
    "github",
    "gitlab",
    "visualstudiocode",
    // "androidstudio",
    // "sonarqube",
    // "figma",
  ];
   
  export function SkillsGlobe() {
    return (
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    );
  }