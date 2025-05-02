import { BsPersonVcardFill } from "react-icons/bs"
import { FaCode, FaHome, FaUser } from "react-icons/fa"
import { MdOutlineLaptopMac } from "react-icons/md"

import { FaEnvelope } from "react-icons/fa6"

import { TechIcon } from "./components/TechIcons"
import AchievementsList from "./components/ui/AchievementsList"

//TODO: Add languages functionality.
export const timelineData = [
    // {/**1997
    // El día de mi nacimiento
    //Bloques: Desde 200X hasta 2010.
    //secundaria
    //preparatoria
    //vida universitaria. Preferiblemente solo CIT. Baito de Narita.
    //Vida profesional, ocupación, etc.
    {
        //Actualmente.
        // // WSソリューションズ株式会社に入社。
        // システムエンジニアとしての活動を開始。

        title: "2022〜now",
        content: <AchievementsList achievements={
            [{
                en: "Joined WS Solutions Co., Ltd. Started activities as a System Engineer.",
                ja: "WSソリューションズ株式会社に入社。システムエンジニアとしての活動を開始。",
                es: "Me uní a WS Solutions Co., Ltd. Comencé actividades como Ingeniero de Sistemas."
            }]} />,
    },
    {
        //vida universitaria
        title: "2018〜2022",
        content:
            <AchievementsList achievements={
                [
                    {
                        en: "Graduated from Chiba Institute of Technology, Department of Informatics, with a Bachelor Degree in Computer Science.",
                        ja: "千葉工業大学情報科学部情報工学科 卒業",
                        es: "Graduado de la Facultad de Ciencias de la Información, Departamento de Ciencias de la Computación, Instituto Tecnológico de Chiba."
                    },
                    {
                        en: "Awarded a 4-year scholarship from the Mabuchi International Scholarship Foundation.",
                        ja: "公益財団法人マブチ国際育英財団より奨学金を授与（4年間）",
                        es: "Becado durante 4 años por la Fundación Internacional de Becas Mabuchi."
                    },
                    {
                        en: "Achieved a TOEIC IP score of 890.",
                        ja: "TOEIC IP 890点達成",
                        es: "Alcancé una puntuación de 890 en TOEIC IP"
                    },
                    {
                        en: "Provided guidance and interpretation assistance at Narita Airport Sanitary Control.",
                        ja: "成田空港検疫で案内・通訳援助",
                        es: "Ofrecí orientación y asistencia de interpretación en la cuarentena del Aeropuerto de Narita."
                    },
                    {
                        en: "CG-ARTS Image Processing Engineer Certification (Basic).",
                        ja: "CG-ARTS検定 画像処理エンジニア検定（ベーシック）合格",
                        es: "Certificación de Ingeniero en Procesamiento de Imágenes CG-ARTS (Básico)."
                    },
                    {
                        en: " CG-ARTS Computer Graphics Engineer Certification (Basic).",
                        ja: "CG-ARTS検定 CGエンジニア検定（ベーシック） ",
                        es: "Certificación de Ingeniero en Gráficos Computacionales CG-ARTS (Básico)."
                    }
                ]} />

        //     {/* <li>
        //         千葉工業大学情報科学部　情報工学科　長谷川研究室　（画像処理）
        //     </li> */}


    },
    {
        //prepa
        title: "2013〜2016",
        content: <AchievementsList achievements={[
            {
                en: "Graduated from Liceo Mexicano Japones (日本メキシコ学院) Senior High School (Mexico).",
                ja: "日本メキシコ学院　高校卒業　（メキシコ）",
                es: "Graduado de la escuela preparatoria del Liceo Mexicano Japonés (México)."
            },
            {
                en: "Second place in the 33rd National Japanese Language Oratory Contest in Mexico",
                ja: "大３３回メキシコ日本語弁論大会第二位入賞",
                es: "Segundo lugar en el 33.º Concurso de Oratoria en Japonés en México."
            },
            {
                en: "Participated in the Second Mexico-Japan Exchange Program at Onjuku, Chiba",
                ja: "第２回御宿における日本メキシコ交流プログラムに参加",
                es: "Participación en el Segundo Programa de Intercambio México-Japón en Onjuku, Chiba"
            },
            {
                en: "JLPT N2 (Japanese Language Proficiency Test) Passed",
                ja: "日本語能力試験N2　合格",
                es: "JLPT N2 (Examen de Aptitud del Idioma Japonés) Aprobado"
            },
            {
                en: "JLPT N3 (Japanese Language Proficiency Test) Passed",
                ja: "日本語能力試験N3　合格",
                es: "JLPT N3 (Examen de Aptitud del Idioma Japonés) Aprobado"
            },
            {
                en: "Japanese Kanji Aptitude Test (Kanken) Level 6 Passed",
                ja: "日本語漢字能力検定試験6級　合格",
                es: "Examen de Aptitud de Kanji del Idioma Japonés (Kanken) Nivel 6 Aprobado"
            },
            {
                en: "Japanese Kanji Aptitude Test (Kanken) Level 7 Passed",
                ja: "日本語漢字能力検定試験7級　合格",
                es: "Examen de Aptitud de Kanji del Idioma Japonés (Kanken) Nivel 7 Aprobado"
            },
            {
                en: "Japanese Kanji Aptitude Test (Kanken) Level 8 Passed",
                ja: "日本語漢字能力検定試験8級　合格",
                es: "Examen de Aptitud de Kanji del Idioma Japonés (Kanken) Nivel 8 Aprobado"

            },
            {
                en: "Japanese Kanji Aptitude Test (Kanken) Level 9 Passed",
                ja: "日本語漢字能力検定試験9級　合格",
                es: "Examen de Aptitud de Kanji del Idioma Japonés (Kanken) Nivel 9 Aprobado"

            },
            {
                en: "Japanese Kanji Aptitude Test (Kanken) Level 10 Passed",
                ja: "日本語漢字能力検定試験10級　合格",
                es: "Examen de Aptitud de Kanji del Idioma Japonés (Kanken) Nivel 10 Aprobado"

            },

        ]} />
    },
    {
        //secundaria
        title: "2010〜2013",
        content: <AchievementsList achievements={[
            {
                en: "Graduated from Liceo Mexicano Japones (日本メキシコ学院) Junior High School (Mexico).",
                ja: "日本メキシコ学院　中学校卒業　（メキシコ)",
                es: "Graduado de la escuela secundaria del Liceo Mexicano Japonés (México)."
            },
            {
                en: "JLPT N4 (Japanese Language Proficiency Test) Passed",
                ja: "日本語能力試験N4　合格",
                es: "JLPT N4 (Examen de Aptitud del Idioma Japonés) Aprobado"
            },
            {
                en: "JLPT N5 (Japanese Language Proficiency Test) Passed",
                ja: "日本語能力試験N5　合格",
                es: "JLPT N5 (Examen de Aptitud del Idioma Japonés) Aprobado"
            }
        ]} />

    },



    // 2015
    // Participación en el Servicio Militar Nacional
    // 2016
    // Empecé la carrera de Ingeniería en Animación Digital en la Universidad Panamericana.
    // 2018
    // 2019
    // 2020
    // 2021
    // 2022
    // Ingresar a WSS
    // 2023
    // 2024 */}


]
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
        href: "/#history",

        icon: <BsPersonVcardFill />,
    },
    {
        label: "Contact",
        href: "/#contact",

        icon: <FaEnvelope />,
    },
]

//0. newbie
//1. beginner
//2. intermediate
//3. advanced.
//4. guru.

export const projects = [
    {
        title: "Keeper",
        description: "Final React project from The Complete Web Development Bootcamp by Angela Yu.",
        image: "/projects/other/keeper_preview.png",
        url: "https://cool-centaur-8a3c2e.netlify.app/",
        level: 0,
        techs: ["react"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: true,
    },

    {
        title: "The Wild Oasis",
        description: "Admin page, from the Ultimate React course by Jonas Schmedtmann.",
        image: "/projects/other/the-wild-oasis_preview.png",
        url: "https://the-wild-oasis-for-eric-medrano.netlify.app/login",
        level: 4,
        techs: ["react", "styled-components", "api", "tanstack-query", "supabase"],
        isImportant: true,
        isComplete: false,
        isPublic: true,
        isExternalProject: true,
    },
    {
        title: "REDA舞神楽 website",
        description: "A real project for the Yosakoi Soran team 「REDA舞神楽」.",
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
        title: "The React Quiz",
        description: "Redux, from the Ultimate React course from Jonas Schmedtmann.",
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
        title: "Omnifood",
        description: "Project from HTML & CSS course from Jonas Schmedtmann.",
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
        title: "Natours",
        description: "Overview of Sass capabilities. From the Advanced CSS and Sass course from Jonas Schmedtmann.",
        image: "/projects/other/natours_preview.png",
        url: "https://natours-for-eric-medrano.netlify.app/",
        level: 2,
        techs: ["html", "sass"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: true,
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
    {
        title: "FAQ accordion",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/faq-accordion/desktop-design.jpg",
        url: "/projects/newbie/faq-accordion",
        level: 0,
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
    {
        title: "Order Summary Component",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/order-summary-component/desktop-design.jpg",
        url: "/projects/newbie/order-summary-component",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: true,
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
        title: "Trillo",
        description: "Flexbox project with Sass. From the Advanced CSS and Sass course from Jonas Schmedtmann.",
        image: "/projects/other/trillo_preview.png",
        url: "https://trillo-for-eric-medrano.netlify.app/",
        level: 2,
        techs: ["html", "sass"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: true,
    },

    {
        title: "Nexter",
        description: "CSS-Grid projects with Sass. From the Advanced CSS and Sass course from Jonas Schmedtmann.",
        image: "/projects/other/nexter_preview.png",
        url: "https://nexter-for-eric-medrano.netlify.app/",
        level: 2,
        techs: ["html", "sass"],
        isImportant: true,
        isComplete: true,
        isPublic: true,
        isExternalProject: true,
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
        title: "Results Summary Component",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/results-summary-component/desktop-design.jpg",
        url: "/projects/newbie/results-summary-component",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },


    {
        title: "Clipboard website",
        description: "A website to explore TailwindCSS. The project is extracted by the TailwindCSS course by Brad Traversy.",
        image: "/projects/beginner/clipboard/desktop-preview.png",
        url: "/projects/beginner/clipboard",
        level: 1,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Loopstudios",
        description: "A website to explore TailwindCSS. The project is extracted by the TailwindCSS course by Brad Traversy.",
        image: "/projects/beginner/loopstudios/desktop-preview.png",
        url: "/projects/beginner/loopstudios",
        level: 1,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Shortly",
        description: "A website to explore TailwindCSS. The project is extracted by the TailwindCSS course by Brad Traversy.",
        image: "/projects/beginner/shortly/desktop-preview.png",
        url: "/projects/beginner/shortly",
        level: 1,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "usePopcorn",
        description: "A simple app to dive into custom hooks. From The Ultimate React Course by Jonas Schmedtmann.",
        image: "/projects/other/use-popcorn.png",
        url: "https://usepopcorn-for-erichiki.netlify.app",
        level: 2,
        techs: ["react", "styled-components", "api"],
        isImportant: true,
        isComplete: true,
        isPublic: true,
        isExternalProject: true,
    },
    {
        title: "Bento Grid",
        description: "Junior challenge from Front End Mentor.",
        image: "/projects/beginner/bento-grid/desktop-design.jpg",
        url: "/projects/beginner/bento-grid",
        level: 1,
        techs: ["html", "tailwindcss"],
        isImportant: true,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Advice generator",
        description: "Junior challenge from Front End Mentor.",
        image: "/projects/beginner/advice-generator/desktop-design.jpg",
        url: "/projects/beginner/advice-generator",
        level: 1,
        techs: ["react", "tailwindcss", "api"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Age Calculator",
        description: "Junior challenge from Front End Mentor.",
        image: "/projects/beginner/age-calculator/images/desktop-completed.jpg",
        url: "/projects/beginner/age-calculator",
        level: 1,
        techs: ["react", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Mortgage Repayment Calculator",
        description: "Junior challenge from Front End Mentor.",
        image: "/projects/beginner/mortgage-repayment-calculator/images/desktop-design-empty.jpg",
        url: "/projects/beginner/mortgage-repayment-calculator",
        level: 1,
        techs: ["react", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Product List with Cart",
        description: "Junior challenge from Front End Mentor.",
        image: "/projects/beginner/product-list-with-cart/desktop-design-selected.jpg",
        url: "/projects/beginner/product-list-with-cart",
        level: 1,
        techs: ["react", "tailwindcss"],
        isImportant: true,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Notifications Page",
        description: "Junior challenge from Front End Mentor.",
        image: "/projects/beginner/notifications-page/desktop-design.jpg",
        url: "/projects/beginner/notifications-page",
        level: 1,
        techs: ["react", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Expenses Chart Component",
        description: "Junior challenge from Front End Mentor.",
        image: "/projects/beginner/expenses-chart-component/desktop-design.jpg",
        url: "/projects/beginner/expenses-chart-component",
        level: 1,
        techs: ["react", "tailwindcss", "framer-motion"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    // {
    //     title: "E-commerce Product Page",
    //     description: "Intermediate challenge from Front End Mentor.",
    //     image: "/projects/intermediate/ecommerce-product-page/desktop-design.jpg",
    //     url: "/projects/intermediate/ecommerce-product-page",
    //     level: 2,
    //     techs: ["react", "tailwindcss", "zustand"],
    //     isImportant: false,
    //     isComplete: false,
    //     isPublic: true,
    //     isExternalProject: false,
    // },
    {
        title: "Recipe Page",
        description: "Newbie challenge from Front End Mentor.",
        image: "/projects/newbie/recipe-page/desktop-design.jpg",
        url: "/projects/newbie/recipe-page",
        level: 0,
        techs: ["html", "tailwindcss", "zustand"],
        isImportant: true,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    // {
    //     title: "Space Tourism",
    //     description: "Intermediate challenge from Front End Mentor.",
    //     image: "/projects/intermediate/space-tourism-website/preview.jpg",
    //     url: "/projects/intermediate/space-tourism-website",
    //     level: 2,
    //     techs: ["react", "tailwindcss", "framer-motion"],
    //     isImportant: true,
    //     isComplete: false,
    //     isPublic: true,
    //     isExternalProject: false,
    // },
    {
        title: "Fylo",
        description: "Beginner challenge from Front End Mentor.",
        image: "/projects/beginner/fylo/desktop-preview.png",
        url: "/projects/beginner/fylo",
        level: 1,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: false,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Interactive Card Details",
        description: "Beginner challenge from Front End Mentor.",
        image: "/projects/beginner/interactive-card-details-form/desktop-design.jpg",
        url: "/projects/beginner/interactive-card-details-form",
        level: 1,
        techs: ["react", "tailwindcss"],
        isImportant: false,
        isComplete: false,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Workit Landing Page",
        description: "Newbie challenge from Front End Mentor.",
        image: "/projects/newbie/workit-landing-page/Tablet.jpg",
        url: "/projects/newbie/workit-landing-page",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: false,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Coding Bootcamp Testimonials",
        description: "Junior challenge from Front End Mentor",
        image: "/projects/beginner/coding-bootcamp-testimonials-slider/images/desktop-design-slide-1.jpg",
        url: "/projects/beginner/coding-bootcamp-testimonials-slider",
        level: 1,
        techs: ["react", "tailwindcss", "framer-motion"],
        isImportant: true,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    {
        title: "Skilled E-learning Landing Page",
        description: "Newbie challenge from Front End Mentor",
        image: "/projects/newbie/skilled-elearning-landing-page/preview.png",
        url: "/projects/newbie/skilled-elearning-landing-page",
        level: 0,
        techs: ["html", "tailwindcss"],
        isImportant: true,
        isComplete: true,
        isPublic: true,
        isExternalProject: false,
    },
    //Hero.
    //About me.
    //Skills.
    //Contact.


]
//TODO: Maybe, a timeline is just not worth the certifications.
//TODO: Consider making a different component for the certifications.
//TODO: Quantify the TOEIC score with a ticker component.
//TODO: Quantify the number of proyects from Front End Mentor with another ticker component.
//TODO: What else can i quantify? Kanjis known? Kanken? JLPT? Hours dedicated to something?
//  Maybe some stats. TOEIC, languages. Number of projects. Minutes of udemy of Udemy courses?

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
// "jira",
// "c",

export const skillTabs = [
    { title: "All", value: 0, tech: "all" },
    { title: <TechIcon tech="html" />, value: 1, tech: "html" },
    { title: <TechIcon tech="css" />, value: 2, tech: "css" },
    { title: <TechIcon tech="sass" />, value: 3, tech: "sass" },
    { title: <TechIcon tech="tailwindcss" />, value: 4, tech: "tailwindcss" },
    { title: <TechIcon tech="styled-components" />, value: 5, tech: "styled-components" },
    { title: <TechIcon tech="api" />, value: 6, tech: "api" },
    { title: <TechIcon tech="react" />, value: 7, tech: "react" },
    { title: <TechIcon tech="nextjs" />, value: 8, tech: "nextjs" },
    { title: <TechIcon tech="framer-motion" />, value: 9, tech: "framer-motion" },
]
export const slugs = [
    "cssmodules",
    "openai",
    "github",
]


//TODO: Add docker when you feel nice
export const skillImages = [
    "/skills/html.png",
    "/skills/css.webp",
    "/skills/figma.png",
    "/skills/zustand.svg",
    "/skills/tailwind-css.png",
    "/skills/javascript.png",
    "/skills/python.png",
    "/skills/redux.png",
    "/skills/node-js.png",
    "/skills/sass.png",
    "/skills/supabase.png",
    "/skills/react.png",
    "/skills/react-hook-form.png",
    "/skills/tanstack-query.webp",
    "/skills/tanstack-table.png",
    "/skills/styled-components.png",
    "/skills/next-js.png",
    "/skills/git.png",
    "/skills/bootstrap.png",
    "/skills/mongo-db.png",
    "/skills/npm.png",
    "/skills/netlify.png",
    "/skills/gitlab.png",
    "/skills/vs-code.png",
    "/skills/chakra-ui.png",
    "/skills/mui.png",
    "/skills/react-icon.png",
    "/skills/react-router.png",
    "/skills/motion.png"
]

//TODO: A photo of myself in a square. Take Angela Yu as an Inspiration.
