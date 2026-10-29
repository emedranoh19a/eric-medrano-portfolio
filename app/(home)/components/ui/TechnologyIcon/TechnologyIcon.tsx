import type { Technology } from "@/app/types/Proyect.types";
import type { ComponentType, SVGProps } from "react";

import { cn } from "@/app/utils/utils";
import { CssIcon, DndKitIcon, HtmlIcon, JavaScriptIcon, MotionIcon, NextJSIcon, ReactHookFormIcon, ReactHotToastIcon, ReactIcon, SassIcon, TailwindCSSIcon, TanStackQueryIcon, TypeScriptIcon, ZustandIcon } from "./icons";
//Source: https://thesvg.org/icon/sass ... and so on
//Note: The icons already have their own colors, filter should be applied from outside.
type TechnologyIconProps = { technology: Technology, className?: string }

type TechnologyIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const technologyIcons = {
    react: ReactIcon,
    sass: SassIcon,
    "dnd-kit": DndKitIcon,
    html: HtmlIcon,
    css: CssIcon,
    javascript: JavaScriptIcon,
    typescript: TypeScriptIcon,
    "next-js": NextJSIcon,
    "tailwind-css": TailwindCSSIcon,
    "react-hook-form": ReactHookFormIcon,
    "react-hot-toast": ReactHotToastIcon,
    "motion": MotionIcon,
    "tanstack-query": TanStackQueryIcon,
    "zustand": ZustandIcon
} satisfies Record<Technology, TechnologyIconComponent>;

export default function TechnologyIcon({ technology, className }: TechnologyIconProps) {
    const iconContainer = cn("relative inline-block w-20 opacity-100 duration-500 hover:grayscale-0 transition", className);

    const Icon = technologyIcons[technology]
    return <div className={iconContainer}>
        <Icon />
    </div>
}
// export type Technology =
//   | "html"
//   | "css"
//   // | "javascript"
//   // | "typescript"
//   | "react"
//   // | "next"
//   // | "tailwind-css"
//   | "sass"
//   // | "react-hook-form"
//   // | "motion"
//   // | "zustand"
//   // | "tanstack-query"
//   // | "redux"
//   | "dnd-kit";
// // | "react-hot-toast"
// // | "orval";

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * I want them to be gray, but coloured when hovered. 
 * //TODO: Boostrap
 * //TODO: Chakra ui
 * //TODO: CSS (The new one)
 * //TODO: dnd-kit (Already an SVG)
 * //TODO: Docker
 * //TODO: git
 * //TODO: figma
 * //TODO: git
 * //TODO: gitlab
 * //TODO: html
 * //TODO: javascript
 * //TODO: mongodb
 * //TODO: motion
 * //TODO: mui
 * //TODO: netlify
 * //TODO: next-hs
 * //TODO: node-js
 * //TODO: npm
 * //TODO: pnpm
 * //TODO: yarn (nada mas para el mame)
 * //TODO: python
 * //TODO: react-hook^form
 * //TODO: react-hot-toast
 * //TODO: react-icon
 * //TODO: react-router
 * //TODO: react
 * //TODO: redux
 * //TODO: sass
 * //TODO: styled components
 * //TODO: supabase
 * //TODO: tailwind-css
 * //TODO: tanstack
 * //TODO: tanstack query
 * //TODO: tanstack-table
 * //TODO: vs-code
 * //TODO: powershell
 * //TODO: zustand
 * 
*/
