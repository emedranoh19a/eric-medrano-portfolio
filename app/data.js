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
export const projects = [
    {
        title: "Omnifood",
        description: "Not so advanced, but definitely not a beginner project. From the HTML & CSS course from Jonas Schmedtmann.",
        image: "/projects/other/omnifood_preview.png",
        url: "https://omnifood-for-eric-medrano.netlify.app/",
        level: 2,
        techs: ["html", "css"],
        isImportant: true, //delete the 
        isComplete: true,
        isPublic: true,
        isExternalProject: true,

    },
    {
        title: "Trillo",
        description: "A review of Flexbox by applying it through and through. From the Advanced CSS and Sass course from Jonas Schmedtmann.",
        image: "/projects/other/trillo_preview.png",
        url: "https://trillo-for-eric-medrano.netlify.app/",
        level: 3,
        techs: ["html", "sass"],
        isImportant: true,
        isComplete: true,
        isPublic: true,
        isExternalProject: true,
    },
    {
        title: "Nexter",
        description: "A review of CSS Grid by applying it through and through. From the Advanced CSS and Sass course from Jonas Schmedtmann.",
        image: "/projects/other/nexter_preview.png",
        url: "https://nexter-for-eric-medrano.netlify.app/",
        level: 3,
        techs: ["html", "sass"],
        isImportant: true,
        isComplete: true,
        isPublic: true,
        isExternalProject: true,
    },
    {
        title: "The React Quiz",
        description: "A project involving Redux. From the Ultimate React course from Jonas Schmedtmann.",
        image: "/projects/other/react-quiz_preview.png",
        url: "https://react-quiz-for-erichiki.netlify.app/",
        level: 3,
        techs: ["react", "redux"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: true,
    },
    {
        title: "Natours",
        description: "A project to explore the power of Sass and the 7-1 architecture. From the Advanced CSS and Sass course from Jonas Schmedtmann.",
        image: "/projects/other/natours_preview.png",
        url: "https://sass-natours-for-erichiki.netlify.app/",
        level: 3,
        techs: ["html", "sass"],
        isImportant: true,
        isComplete: false,
        isPublic: true,
        isExternalProject: true,
    },
    {
        title: "REDA舞神楽 website",
        description: "A real project for the amazing Yosakoi Soran Team REDA舞神楽. An initiative that made me realize an amazing way to juggle with TailwindCSS utility classes, while thinking of maintainable and reusable code.",
        image: "/projects/other/reda-website_preview.png",
        url: "https://our-little-secret.netlify.app/theme/2023",
        level: 4,
        techs: ["nextjs", "tailwindcss", "framer-motion"],
        isImportant: true,
        isComplete: false,
        isPublic: true,
        isExternalProject: true,
    },
    //TODO: Make the sidebar work. We must actually navigate... right?
    //TODO: verify and fix the initial state of the sidebar. It shouldn't be open when hydration is happening.
    // {
    //   title: "The Spirit of Adventure",
    //   description: "Embark on exciting journeys and thrilling discoveries.",
    //   header: <Skeleton />,
    //   icon: "i",
    //   // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,

]

//TODO: Maybe some stats. TOEIC, languages. 

