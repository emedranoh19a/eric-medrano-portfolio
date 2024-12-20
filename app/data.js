import { FaCode, FaHome, FaUser } from "react-icons/fa"
import { MdOutlineLaptopMac } from "react-icons/md"

export const sidebarLinks = [
    {
        label: "Home",
        href: "#",
        //   icon: (
        //     <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        //   ),
        icon: <FaHome />,
    },
    {
        label: "Profile",
        href: "#",
        //   icon: (
        //     <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        //   ),
        icon: <FaUser />,
    },
    {
        label: "Skills",
        href: "#",
        //   icon: (
        //     <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        //   ),
        icon: <FaCode />,
    },
    {
        label: "Projects",
        href: "#",
        //   icon: (
        //     <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        //   ),
        icon: <MdOutlineLaptopMac />,
    },
]

//TODO: Maybe some stats. TOEIC, languages. 

//Agregar diplomas.
