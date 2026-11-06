import { DesignSystem } from "./components";
import {
    About,
    CTA,
    Hero, Navbar,
    Projects,
    Services
} from "./sections";

export default function Page() {
    return <DesignSystem>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <CTA />
    </DesignSystem>
}

//Learned. 
// It was a complicated layout. I had to break the shape of a grid and add absolute backgrounds
// Setting font size and line-height in a single class.
// This broken grid layout is a real challenge to test the box model knowledge i had
// Several layers absolutely positioned is easier to achieve the desired layout. 
//While the background is full-bleeded, the text content stays positioned in the container.
// function Preview() {
//     //The base
//     const containerStyles = cn("h-101 w-full relative z-0 order-first sm:order-last");
//     //The hanged element
//     const bleedStyles = cn(
//         "absolute -z-10 w-screen h-full left-1/2 translate-x-[-50vw]",
//         "sm:w-[50vw] sm:translate-x-0 sm:left-0",
//         ""
//     )
//     const gradientStyles = cn(
//         "bg-linear-to-b from-transparent to-black",
//         "h-27.75 sm:h-32.5 lg:h-50 w-screen sm:w-[50vw]",
//         "left-1/2 translate-x-[-50vw] sm:left-0 sm:translate-x-0",
//         "absolute bottom-0");
//     return <>
//         <div className={containerStyles}>
//             <div className={bleedStyles}>
//                 <Image src={imageSlide1Mobile} className="object-cover sm:hidden" fill alt="" />
//                 <Image src={imageSlide1Tablet} className="object-cover hidden sm:inline-block lg:hidden" fill alt="" />
//                 <Image src={imageSlide1Desktop} className="object-cover hidden lg:inline-block" fill alt="" />
//             </div>
//             <div className={gradientStyles} />
//             <div className="text-white absolute bottom-0 right-0">
//                 <h3 className="font-extrabold text-[15px]/5 lg:text-[20px]/8">Project title</h3>
//                 <p className="font-normal text-[15px]/5 lg:text-[18px]/8">2019 project</p>
//             </div>
//         </div>
//     </>
// }
// About the anchor positioning: 
// export default function MobileNavigation() {
//     const [open, setOpen] = useState<boolean>(false);

//     const buttonStyles = cn(
//         "relative cursor-pointer",
//         //close styles:
//         "w-5 aspect-square",
//         //open styles 
//         "w-6 h-4.5"
//     )
//     function handleToggle() {
//         setOpen((s) => !s)
//     }


//     return <div className="sm:hidden">
//         <button onClick={handleToggle} className={buttonStyles} style={{ anchorName: "--mobile-menu" }}>
//             <Image
//                 src={open ? iconCross : iconHamburger}
//                 fill
//                 className="object-contain"
//                 alt={open ? "close menu" : "open menu"}
//             />
//         </button>
//         {
//             open && <Menu />
//         }
//     </div>
// }
// function Menu() {
//     return <menu
//         className="fixed bg-red-100 mt-2"
//         style={{
//             positionAnchor: "--mobile-menu",
//             positionArea: "bottom span-left"
//         }}
//     >
//         <button>button1</button>
//         <button>button1</button>
//         <button>button1</button>
//         <button>button1</button>
//         <button>button1</button>
//         <button>button1</button>
//     </menu>
// }
//Continued development:
//  Wondering if there is a way to transition the font weight, and changing the weight without shifts on the navigation layout.
// Memorizing the values of the sizes may be useful, like I did when memorizing the font weights.
//Acknowledgements:
//To Josh Comeau's blog post about anchor positioning.
//To anchor
