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
//TODO: create a component that replaces completely the content.
export const tabs = [
    {
        title: "Newbie",
        value: "newbie",

    },
    {
        title: "Beginner",
        value: "beginner",

    },
    {
        title: "Intermediate",
        value: "intermediate",

    },
    {
        title: "Advanced",
        value: "advanced",

    },
    {
        title: "Guru",
        value: "guru",
    },
]

//TODO: Maybe some stats. TOEIC, languages. 

//Agregar diplomas.

// A single project DataTransfer.
// {
//     name: 'SparkleGrove.com',
//     desc: 'A lifestyle blog featuring DIY crafts, home decor ideas, and inspiration for creating a cozy and stylish living space.',
//     url: '/projects/image-1.jpg',
//     tech: ['Figma', 'Photoshop', 'HTML'],
// },
