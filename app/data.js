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
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Newbie Tab</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: "Services",
        value: "services",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Services tab</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: "Playground",
        value: "playground",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Playground tab</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: "Content",
        value: "content",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Content tab</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: "Random",
        value: "random",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Random tab</p>
                {/* <DummyContent /> */}
            </div>
        ),
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
