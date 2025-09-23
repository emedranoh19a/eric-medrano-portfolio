import clsx from "clsx"
import Image from "next/image"
import Button from "./Button"
import StylesSetup from "./StylesSetup"
import Text from "./Text"
import { iconBattery, iconBluetooth, iconCompatible, iconLight, imgGlassAndKeyboard, imgKeyboard, imgPhoneAndKeyboard, logo } from "./imageIndex"
//Note: Maybe have to set relative positioning when working with dummy CSS Grid cells.
{/* <div className="relative overflow-hidden w-full bg-(--primary) bg-blend-multiply h-full w-full rounded-2xl">
<Image
    src="/projects/beginner/typemaster-pre-launch-landing-page/assets/mobile/image-phone-and-keyboard.jpg"
    alt=""
    fill
    className="object-cover block sm:hidden mix-blend-multiply"
/> */}
export default function Page() {
    return <StylesSetup>
        <PageNavbar />
        <Header />
        <Features />
        <Footer />
    </StylesSetup>
}

const features = [
    {
        title: "Highly compatible",
        icon: iconCompatible,
        description: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
    },
    {
        title: "Wireless with bluetooth",
        icon: iconBluetooth,
        description: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
    },
    {
        title: "High capacity battery",
        icon: iconBattery,
        description: "Equipped with a long-lasting built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
    },
    {
        title: "RGB backlit modes",
        icon: iconLight,
        description: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
    }]


function PageNavbar() {
    return <nav className="container mx-auto p-4 w-full h-fit flex justify-between">
        <div className="relative h-10 aspect-square bg-red-500">
            <Image src={logo}
                className="object-contain"
                fill
                alt="Logo of Typemaster" />
        </div>
        <Button text="pre-order now" variant="secondary" />
    </nav>
}
function Header() {
    //columns: 2, 3, 3
    const gridStyles = clsx("relative grid container mx-auto w-full",
        "p-4  gap-4 sm:mb-6 lg:mb-20",
        "grid-cols-[1fr_3fr] sm:grid-cols-[1fr_1fr_2fr]",
        "grid-rows-[3fr_3fr_2fr_3fr] sm:grid-rows-[3fr_3fr_2fr] lg:grid-rows-[3fr_2fr]",
        "lg:after:absolute lg:after:w-1/4 lg:after:bg-(--light-gray) lg:after:aspect-square lg:after:top-4 lg:after:right-0 lg:after:translate-x-full lg:after:rounded-2xl",
        "lg:before:absolute lg:before:w-1/4 lg:before:bg-(--light-gray) lg:before:aspect-square lg:before:bottom-4 lg:before:left-0 lg:before:-translate-x-full lg:before:rounded-2xl")
    return <header className={gridStyles}>
        <div className="col-span-2 flex flex-col gap-4 self-center">
            <Text as="h1">Typemaster keyboard</Text>
            <Text>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
                mechanical typing experience.</Text>
            <div className="flex gap-4 items-center">
                <Button text="Pre-order now" variant="primary" />
                <Text as="span">Release on 5/27</Text>
            </div>
        </div>
        <div className="relative w-full bg-neutral-100 rounded-2xl overflow-hidden h-full aspect-square sm:scale-x-125 lg:scale-x-100 origin-left rounded-2xl col-span-2 sm:col-span-1">
            <Image
                src={imgKeyboard.mobile}
                alt="Keyboard"
                fill
                className="object-cover block sm:hidden "
            />
            <Image
                src={imgKeyboard.desktop}
                alt="Keyboard"
                fill
                className="object-cover hidden sm:block"
            />

            {/* <Image src="" alt="" fill className="object-cover"/> */}
        </div>
        <div className="relative overflow-hidden w-full sm:scale-x-150 lg:scale-x-100 origin-right bg-(--primary) bg-blend-multiply h-full w-full rounded-2xl">
            <Image
                src={imgPhoneAndKeyboard.mobile}
                alt="Phone and keyboard"
                fill
                className="object-cover block sm:hidden mix-blend-multiply"
            />
            <Image
                src={imgPhoneAndKeyboard.desktop}
                alt="Phone and keyboard"
                fill
                className="object-cover hidden sm:block mix-blend-multiply"
            />
        </div>
        <div className="relative overflow-hidden transform-gpu w-full h-full w-full rounded-2xl sm:col-span-2 lg:col-span-1 lg:scale-x-150 origin-left">
            <Image
                src={imgGlassAndKeyboard.mobile}
                alt="Glass and keyboard"
                fill
                className="object-cover block sm:hidden"
            />
            <Image
                src={imgGlassAndKeyboard.desktop}
                alt="Glass and keyboard"
                fill
                className="object-cover hidden sm:block "
            />
        </div>
        <div className="flex flex-col gap-4 lg:pl-[40%] items-center justify-center sm:flex-row lg:flex-col mx-auto  h-full w-full col-span-2 sm:col-span-3 lg:col-span-1">
            <Text as="h2"> Mechanical wireless keyboard</Text>
            <Text>The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety
                of switches and keycaps, along with reliable wireless connectivity.</Text>
        </div>
    </header>
}
function About() {
    return <div>

    </div>
}
function Features() {
    return <section id="features" className="container px-4 mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => <Feature key={index} {...feature} />)}
    </section>
}
function Feature({ title, icon, description }
) {
    return <div className="mb-10 text-center sm:text-left">
        <div className=" mx-auto sm:mx-0 mb-8 bg-(--primary) rounded-[16px] p-4 h-fit w-fit">
            <div className="relative h-10 aspect-square">
                <Image src={icon} fill alt="" className="object-contain" />
            </div>
        </div>
        <Text as="h3" className="mb-6">{title}</Text>
        <Text>{description}</Text>
    </div>
}
function Footer() {
    return <footer className="mx-auto mb-10">
        <Text className="text-center">
            <span className="font-bold" >Typemaster 2021 </span> | All Rights Reserved
        </Text>
    </footer>
}
