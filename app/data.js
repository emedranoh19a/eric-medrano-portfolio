import { BsPersonVcardFill } from "react-icons/bs"
import { FaCode, FaEnvelope, FaHome, FaUser } from "react-icons/fa"
import { MdOutlineLaptopMac } from "react-icons/md"


import { TechIcon } from "./components/TechIcons"
import AchievementsList from "./components/ui/AchievementsList"


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
        href: "/#home",

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

// ]

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
//quiero posgresql
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
    "/skills/motion.png",
    "/skills/react-hot-toast.svg"
]

