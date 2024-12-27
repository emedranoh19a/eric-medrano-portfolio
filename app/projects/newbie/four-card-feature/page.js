import clsx from 'clsx'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { twMerge } from 'tw-merge'

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ weight: ['200', '400', '600'], subsets: ['latin'] })

// If loading a variable font, you don't need to specify the font weight
function Intro() {
    return <div className="text-center max-w-80 mx-auto my-6">
        <h1 className="text-xl font-light text-gray-500">
            Reliable, efficient delivery
            <br />
            <span className="font-bold text-gray-600">Powered by Technology</span>
        </h1>
        <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </div>
}

function Card({ className, accentClassName, title, content, visual, width }) {
    //Style: 
    const containerStyles = twMerge(clsx("relative p-10 min-h-60 max-w-96 row-span-2 rounded-lg overflow-hidden shadow-xl", className))
    const accentStyles = twMerge(clsx("absolute w-full h-2  top-0 left-0", accentClassName))

    return <div className={containerStyles}>
        <div className={accentStyles} />
        <h3 className="font-bold text-xl text-slate-600">{title}</h3>
        <p className="text-slate-400">{content}</p>
        <div className="bg-red-500 relative h-fit mt-6"><Image src={visual} width={width} height={width} className="absolute right-0 top-0" /></div>
    </div>
}

const cards = [
    { title: "Supervisor", content: "Monitors activity to identify project roadblocks", visual: "/four-card-feature/images/icon-supervisor.svg", className: "lg:col-start-1 lg:row-start-2", accentClassName: "bg-cyan-500", width: 64 },
    { title: "Team Builder", content: "Scans our talent network to create the optimal team for your project", visual: "/four-card-feature/images/icon-team-builder.svg", className: "", accentClassName: "bg-red-600", width: 64 },
    { title: "Karma", content: "Regularly evaluates our talent to ensure quality", visual: "/four-card-feature/images/icon-karma.svg", className: "lg-row-start-3 lg:col-start-2", accentClassName: "bg-amber-400", width: 64 },
    { title: "Calculator", content: "Uses data from past projects to provide better delivery estimates", visual: "/four-card-feature/images/icon-calculator.svg", className: "lg:col-start-3 lg:row-start-2", accentClassName: "bg-sky-600", width: 64 }
]
export default function Page() {

    return <main className={`${poppins.className} text-gray-400 relative`}>
        <Intro />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-fit mx-auto ">
            {cards.map((card, i) => <Card key={i} {...card} />)}
        </div>
    </main>
}
