import { FaCode, FaHome, FaUser } from "react-icons/fa"
import { MdOutlineLaptopMac } from "react-icons/md"

export const sidebarLinks = [
    {
        label: "Home",
        href: "/",

        icon: <FaHome />,
    },
    {
        label: "About",
        href: "/#about",

        icon: <FaUser />,
    },
    {
        label: "Skills",
        href: "/#skills",

        icon: <FaCode />,
    },
    {
        label: "Projects",
        href: "/#projects",

        icon: <MdOutlineLaptopMac />,
    },
    {
        label: "History",
        href: "/#timeline",

        icon: <MdOutlineLaptopMac />,
    },
    {
        label: "Contact",
        href: "/#contact",

        icon: <MdOutlineLaptopMac />,
    },
]

//0. newbie
//1. beginner
//2. intermediate
//3. advanced.
//4. guru.

export const projects = [
    {
        title: "Omnifood",
        description: "Not so advanced, but definitely not a beginner project. From the HTML & CSS course from Jonas Schmedtmann.",
        image: "/projects/other/omnifood_preview.png",
        url: "https://omnifood-for-eric-medrano.netlify.app/",
        level: 1,
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
        level: 1,
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
        level: 1,
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
        level: 2,
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
        level: 1,
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
        level: 3,
        techs: ["nextjs", "tailwindcss", "framer-motion"],
        isImportant: true,
        isComplete: false,
        isPublic: true,
        isExternalProject: true,
    },
    {
        title: "Social Links Profile",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/social-links-profile/desktop-preview.jpg",
        url: "/projects/newbie/social-links-profile",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Blog Preview Card",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/blog-preview-card/desktop-design.jpg",
        url: "/projects/newbie/blog-preview-card",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    //TODO: Add the results-summary-component page.
    {
        title: "FAQ accordion",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/faq-accordion/desktop-design.jpg",
        url: "/projects/newbie/faq-accordion",
        level: 0,
        //TODO: maybe just vanilla JS
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Product Preview Card",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/product-preview-card/desktop-design.jpg",
        url: "/projects/newbie/product-preview-card",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Interactive Rating Component",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/interactive-rating-component/desktop-design.jpg",
        url: "/projects/newbie/interactive-rating-component",
        level: 0,
        //TODO: maybe just vanilla JS
        techs: ["html", "tailwindcss", "react"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "QR Code Component",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/qr-code-component/desktop-design.jpg",
        url: "/projects/newbie/qr-code-component",
        level: 0,
        techs: ["html", "tailwindcss",],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "NFT Preview Card Component",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/nft-preview-card-component/desktop-design.jpg",
        url: "/projects/newbie/nft-preview-card-component",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Order Summary Component",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/order-summary-component/desktop-design.jpg",
        url: "/projects/newbie/order-summary-component",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Stats Preview Card",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/stats-preview-card/desktop-design.jpg",
        url: "/projects/newbie/stats-preview-card",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Profile Card Component",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/profile-card-component/desktop-design.jpg",
        url: "/projects/newbie/profile-card-component",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Social Proof Section",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/social-proof-section/desktop-design.jpg",
        url: "/projects/newbie/social-proof-section",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Article Preview Component",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/article-preview-component/desktop-design.jpg",
        url: "/projects/newbie/article-preview-component",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Four Card Feature Section",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/four-card-feature-section/desktop-design.jpg",
        url: "/projects/newbie/four-card-feature-section",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Base Apparel Coming Soon Page",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/base-apparel-coming-soon-page/desktop-design.jpg",
        url: "/projects/newbie/base-apparel-coming-soon-page",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },


    //TODO: Fix usePopcorn
    //TODO: Fix worldwise
    //TODO: Fix at all costs, the wild oasis admin page
    //TODO: If it is actually fixed, then finish once and for all the nextJS course from schmedtmann
    //TODO: Basic project of Angela Yu. HTML
    //TODO: Basic project of Angela Yu. CSS
    //TODO: Basic project of Angela Yu. jQuery
    //TODO: Basic project of Angela Yu. jQuery
]

//TODO: Maybe some stats. TOEIC, languages. 

