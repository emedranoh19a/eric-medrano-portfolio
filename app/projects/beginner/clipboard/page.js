import { cn } from "@/app/utils/utils"
import { Bai_Jamjuree } from "next/font/google"
import Image from "next/image"
const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["400", "600"] })

export default function Page() {
    return <CSSPageVariables>
        <Hero />
        <Snippets />
        <Features />
        <AccessAnywhere />
        <Supercharge />
        <References />
        <Bottom />
        <footer className="pb-40">
            <div className="max-w-6xl mx-auto text-center px-10">
                <Image src="/projects/beginner/clipboard/images/logo.svg" alt="clipboard logo" width={200} height={200} className="mx-auto scale-50" />
                <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-[var(--grayish-blue)]">
                    {/* Menu 1*/}
                    <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-6 md:space-y-0">
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div><a href="#" className="hover:text-[var(--strong-cyan)] duration-200">
                                FAQs</a></div>
                            <div><a href="#" className="hover:text-[var(--strong-cyan)] duration-200">
                                Contact Us</a></div>
                        </div>
                    </div>
                    {/* Menu 2*/}
                    <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-6 md:space-y-0">
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div><a href="#" className="hover:text-[var(--strong-cyan)] duration-200">
                                Privacy Policy</a></div>
                            <div><a href="#" className="hover:text-[var(--strong-cyan)] duration-200">
                                Press Kit</a></div>
                        </div>
                    </div>
                    {/* Menu 3*/}
                    <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-6 md:space-y-0">
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div><a href="#" className="hover:text-[var(--strong-cyan)] duration-200">
                                Install Guide</a></div>
                            {/* <div><a href="#" className="hover:text-[var(--strong-cyan)] duration-200">
                                Contact Us</a></div> */}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-32 py-10">
                    <a href="#"><Image src="/projects/beginner/clipboard/images/icon-facebook.svg" alt="facebook logo" width={20} height={20} className="hover:opacity-50 duration-200" /></a>
                    <a href="#"><Image src="/projects/beginner/clipboard/images/icon-twitter.svg" alt="facebook logo" width={20} height={20} className="hover:opacity-50 duration-200" /></a>
                    <a href="#"><Image src="/projects/beginner/clipboard/images/icon-instagram.svg" alt="facebook logo" width={20} height={20} className="hover:opacity-50 duration-200" /></a>
                    <a href="#"><Image src="/projects/beginner/clipboard/images/icon-facebook.svg" alt="facebook logo" width={20} height={20} className="hover:opacity-50 duration-200" /></a>
                </div>
            </div>
        </footer>
    </CSSPageVariables>
}

function CSSPageVariables({ children }) {
    return <div
        style={{
            '--strong-cyan': 'hsl(171, 66%, 44%)',
            '--light-blue': 'hsl(233, 100%, 69%)',
            '--grayish-blue': 'hsl(201, 11%, 66%)',
            '--dark-grayish-blue': 'hsl(210, 10%, 33%)',
            backgroundImage: 'url(/projects/beginner/clipboard/images/bg-header-desktop.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        }}
        className={`${baiJamjuree.className} w-full h-fit bg-white`}
    >
        {children}
    </div>
}

function Hero() {
    return <SectionContainer id="hero" className="mb-40 pt-16 w-full">
        <Image src="/projects/beginner/clipboard/images/logo.svg" alt="clipboard logo" width={200} height={200} className="mx-auto my-16" />
        <Heading text="A history of everything you copy" />
        <p className="max-w-3xl mx-auto mb-10 text-2xl text-[var(--grayish-blue)]">Clipboard allows you to track and organize everything you copy. Instantly access yout clipboard on all your devices.</p>
        <ButtonContainer>
            <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-[var(--strong-cyan)] duration-200 hover:opacity-80">Download for iOS</a>
            <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-[var(--light-blue)] duration-200 hover:opacity-80">Download for Mac</a>
        </ButtonContainer>

    </SectionContainer>



}

function Snippets() {
    return <SectionContainer id="snippets" className="my-20">
        <div className="max-w-6xl mx-auto text-center my-20 px-10">
            <Heading text="Keep track of your snippets" />
            <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-[var(--grayish-blue)]">
                Clipboard instantly stores any item you copy in the cloud,
                meaning you can access them on all your devices.
                Our Mac and iOS apps will help you organize everything.</p>
        </div>
    </SectionContainer>
}

function ButtonContainer({ children }) {
    return <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">{children}</div>
}
function Heading({ text }) {
    return <h3 className="mb-8 text-4xl font-bold text-[var(--dark-grayish-blue)] md:text-5xl">{text}</h3>
}
function SectionContainer({ className, id, children }) {
    return <section id={id} className={cn("max-w-6xl mx-auto text-center px-10", className)}>{children}</section>
}


function Features() {
    return <SectionContainer id="features" className="">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2 relative grid place-items-center">
                <Image alt="Mac computer using clipboard" width={500} height={500} src="/projects/beginner/clipboard/images/image-computer.png" className="w-full absolute h-auto" />
            </div>
            <div className="flex flex-col justify-center items-center h-full gap-12 text-xl md:text-left md:w-1/2 md:pl-16">
                <div>
                    <h5 className="mb-2 text-2xl font-bold text-[var(--dark-grayish-blue)]">Quick Search</h5>
                    <p className="max-w-md text-[var(--grayish-blue)]">Easily search your snippets by content, category, web address, application, and more.</p>
                </div>
                <div>
                    <h5 className="mb-2 text-2xl font-bold text-[var(--dark-grayish-blue)]">iCloud Sync</h5>
                    <p className="max-w-md text-[var(--grayish-blue)]">Instantly saves and sync snippets across all your devices.</p>
                </div>
                <div>
                    <h5 className="mb-2 text-2xl font-bold text-[var(--dark-grayish-blue)]">Completely History</h5>
                    <p className="max-w-md text-[var(--grayish-blue)]">Easily search your snippets by content, category, web address, application, and more.</p>
                </div>
            </div>
        </div>
    </SectionContainer>
}

function AccessAnywhere() {
    return <SectionContainer id="access" className="my-20">
        <Heading text="Access Clipboard anywhere" />
        <p className="max-w-3xl mx-auto text-xl text-[var(--grayish-blue)]">Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
        <Image src="/projects/beginner/clipboard/images/image-devices.png" alt="clipboard logo" width={500} height={500} className="mx-auto my-16" />
    </SectionContainer>
}

function Supercharge() {
    return <SectionContainer id="supercharge" className="my-20">
        <Heading text="Supercharge your workworflow" />
        <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-[var(--grayish-blue)]">
            We&apos;ve got the tools to boost your productivity/</p>
        {/* Items container */}
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center justify-center space-y-5">
                <Image src="/projects/beginner/clipboard/images/icon-blacklist.svg" alt="clipboard logo" width={50} height={50} />
                <h5 className="mb-2 text-2xl font-bold text-[var(--dark-grayish-blue)]">Completely History</h5>
                <p className="max-w-md text-[var(--grayish-blue)]">Easily search your snippets by content, category, web address, application, and more.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-5">
                <Image src="/projects/beginner/clipboard/images/icon-text.svg" alt="clipboard logo" width={50} height={50} />
                <h5 className="mb-2 text-2xl font-bold text-[var(--dark-grayish-blue)]">Plain Text Snippets</h5>
                <p className="max-w-md text-[var(--grayish-blue)]">Remove unwanted formatting from copied text for a consistent look.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-5">
                <Image src="/projects/beginner/clipboard/images/icon-preview.svg" alt="clipboard logo" width={50} height={50} />
                <h5 className="mb-2 text-2xl font-bold text-[var(--dark-grayish-blue)]"> Sneak Preview</h5>
                <p className="max-w-md text-[var(--grayish-blue)]">Quick preview of all snippets on your Clipboard for easy access</p>
            </div>
        </div>
    </SectionContainer>
}

function References() {
    return <SectionContainer id="references" className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        <Image src="/projects/beginner/clipboard/images/logo-google.png" alt="" width={200} height={200} />
        <Image src="/projects/beginner/clipboard/images/logo-ibm.png" alt="" width={200} height={200} />
        <Image src="/projects/beginner/clipboard/images/logo-microsoft.png" alt="" width={200} height={200} />
        <Image src="/projects/beginner/clipboard/images/logo-hp.png" alt="" width={200} height={200} />
        <Image src="/projects/beginner/clipboard/images/logo-vector-graphics.png" alt="" width={200} height={200} />
    </SectionContainer>
}
function Bottom() {
    return <SectionContainer id="bottom" className="my-20">
        <Heading text="Clipboard for iOS and Mac OS" />
        <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-[var(--grayish-blue)]">
            Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-[var(--strong-cyan)] duration-200 hover:opacity-80">Download for iOS</a>
            <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-[var(--light-blue)] duration-200 hover:opacity-80">Download for Mac</a>
        </div>
    </SectionContainer>
}
