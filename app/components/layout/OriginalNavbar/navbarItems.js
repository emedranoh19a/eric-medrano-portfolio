import { BsPersonVcardFill } from "react-icons/bs"
import { FaCode, FaEnvelope, FaHome, FaUser } from "react-icons/fa"
import { MdOutlineLaptopMac } from "react-icons/md"
// export const navbarItems = [
//     { icon: "a", label: 'Home', onClick: () => alert('Home!') },
//     { icon: "b", label: 'Archive', onClick: () => alert('Archive!') },
//     { icon: "c", label: 'Profile', onClick: () => alert('Profile!') },
//     { icon: "d", label: 'Settings', onClick: () => alert('Settings!') },
// ]
export const navbarItems = [
    {
        label: "Home",
        href: "/",
        icon: <FaHome />,
        onClick: () => { }
    },
    {
        label: "About",
        href: "/#about",

        icon: <FaUser />,
        onClick: () => { }
    },
    {
        label: "Skills",
        href: "/#skills",

        icon: <FaCode />,
        onClick: () => { }
    },
    {
        label: "Projects",
        href: "/#projects",

        icon: <MdOutlineLaptopMac />,
        onClick: () => { }
    },
    {
        label: "History",
        href: "/#history",
        icon: <BsPersonVcardFill />,
        onClick: () => { }
    },
    {
        label: "Contact",
        href: "/#contact",

        icon: <FaEnvelope />,
        onClick: () => { }
    },
]
