"use client";

import { cn } from "@/app/utils/utils";
import { motion, useMotionValue } from "framer-motion";
import React from "react";
import DockIcon from "./DockIcon";

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const Dock = React.forwardRef(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };
    const styles = cn(
      // "mx-auto mt-8 w-max",
      "h-[58px] p-2",
      "flex items-center justify-center gap-2",
      "bg-white/50 backdrop-blur-md",
      "rounded-2xl border",
      direction === "top" && "items-start",
      direction === "middle" && "items-center",
      direction === "bottom" && "items-end"
    );

    return (
      <motion.ul
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={styles}
      >
        {renderChildren()}
      </motion.ul>
    );
  }
);

Dock.displayName = "Dock";

export { Dock };
