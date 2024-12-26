"use client";

import { sidebarLinks } from "@/app/data";
import { cn } from "@/app/utils/utils";
import { useState } from "react";
import { Sidebar, SidebarBody } from "./Sidebar";
import SidebarLink from "./SidebarLink";
import SidebarLogo from "./SidebarLogo";
import SidebarLogoIcon from "./SidebarLogoIcon";

export function SidebarDemo({ children }) {
  //State:
  const [open, setOpen] = useState(false);

  //Style:
  const containerStyles = cn(
    "relative flex flex-col md:flex-row",
    "w-full max-w-screen min-h-screen h-fit",
    "mx-auto",
    "rounded-md"
  );

  return (
    <div className={containerStyles}>
      <Sidebar open={open} setOpen={setOpen}>
        {/* Display related styles will conflict with "hidden" */}
        <SidebarBody className="relative gap-10  self-stretch h-full ">
          {/* TODO: Insert here a fancy corner */}

          <div className="fixed left-0 w-[inherit] p-2.5">
            <div className="flex flex-col overflow-x-hidden sticky h-fit">
              {open ? <SidebarLogo /> : <SidebarLogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {sidebarLinks.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>

            <div>
              <SidebarLink
                link={{
                  label: "Eric Medrano",
                  href: "#",
                  // TODO Add image of me.
                  // icon: (
                  //   <Image
                  //     src="https://assets.aceternity.com/manu.png"
                  //     className="h-7 w-7 flex-shrink-0 rounded-full"
                  //     width={50}
                  //     height={50}
                  //     alt="Avatar"
                  //   />
                  // ),
                  icon: "", //This is essentially, my avatar, .
                }}
              />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="h-fit w-full overflow-y-scroll flex-1 mx-auto">
        {/* Here, the children are the page content itself. It might be the project navigation. */}
        {children}
      </div>
    </div>
  );
}
