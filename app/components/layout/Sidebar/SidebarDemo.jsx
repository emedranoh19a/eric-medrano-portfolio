"use client";

import { sidebarLinks } from "@/app/data";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useState } from "react";
import { Sidebar, SidebarBody } from "./Sidebar";
import SidebarLink from "./SidebarLink";
import SidebarLogo from "./SidebarLogo";
import SidebarLogoIcon from "./SidebarLogoIcon";

import { Bai_Jamjuree } from "next/font/google";
const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export function SidebarDemo({ children }) {
  //State:
  const [open, setOpen] = useState(false);

  //Style:
  const containerStyles = cn(
    "flex flex-col md:flex-row",
    "w-full max-w-screen min-h-screen h-fit",
    "mx-auto",
    "rounded-md",
    baiJamjuree.className
  );

  return (
    <div className={containerStyles}>
      <Sidebar open={open} setOpen={setOpen}>
        {/* Display related styles will conflict with "hidden" */}
        <SidebarBody className="gap-10 relative self-stretch h-full w-full overflow-y-scroll ">
          <div className="top-0 left-0 p-0 fixed w-[inherit]">
            <InvertedCorner />
            <div className="flex flex-col overflow-x-hidden px-2 mt-2 h-fit">
              {open ? <SidebarLogo /> : <SidebarLogoIcon />}
              <div
                className={cn("mt-8 ml-0 flex flex-col gap-2", open && "ml-6")}
              >
                {sidebarLinks.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="h-fit overflow-y-scroll flex-1 mx-auto w-full">
        {children}
      </div>
    </div>
  );
}

function InvertedCorner() {
  const positioningStyles = clsx(
    "hidden md:block w-full h-40 absolute top-0 right-0 translate-x-full -translate-y-full"
  );
  //Step 2: Create a pseudoelement
  const pseudoStyles = clsx(
    "absolute bg-transparent bottom-0 translate-y-full h-60 w-20 rounded-tl-[4rem]"
  );
  //Step 3: Add a shadow to the pseudoelement
  //We want to fill the space between the div and the pseudoelement. the best way is to use a box shadow.
  return (
    <div className={positioningStyles}>
      <div className="relative w-40 h-full rounded-[6rem] rounded-bl-none bg-[#f5f5f5]">
        <div
          className={pseudoStyles}
          style={{ boxShadow: "0 -6rem 0 0 #f5f5f5" }}
        ></div>
      </div>
    </div>
  );
}
