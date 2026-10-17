"use client"
import { useRouter } from "next/navigation";
import Button from "../../ui/Button";

const steps = [
    {
        number: 1,
        title: <>Pick your{" "}
            <br className="hidden sm:block" />
            coffee</>,
        description: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
    },
    {
        number: 2,
        title: <>Choose the <br className="hidden sm:block" /> frequency</>,
        description: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
    },
    {
        number: 3,
        title: <>Receive and<br className="hidden sm:block" /> enjoy!</>,
        description: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
    }
]

export default function Steps() {
    const router = useRouter();
    return <section className="mb-30 sm:mb-36 lg:mb-50 flex flex-col">
        <h2 className="mb-20 text-grey heading-4 text-center sm:text-left">
            How it works
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 lg:gap-x-23.75 gap-y-14 mb-20  sm:mb-11.5 lg:mb-16 relative z-0">
            {steps.map((step, i) => <Step {...step} key={i} />)}
        </ul>
        <Button onClick={() => router.push("/projects/intermediate/coffee-roasters-subscription-site/subscribe")} label="Create your plan" className="mx-auto sm:ml-0" />
    </section>
}

function Step({ number, title, description }) {
    return <li className="text-center sm:text-left pt-20 relative z-0 ">

        <Connector number={number} />


        <div>
            <span className="heading-1 mb-6 inline-block text-pale-orange">{String(number).padStart(2, "0")}</span>
            <h3 className="heading-3 text-[28px] lg:text-[32px] mb-6 sm:mb-10 lg:mb-11 text-balance">{title}</h3>
            <p className="body">{description}</p>
        </div>
    </li >
}

function Connector({ number }) {
    return <>
        {number !== 3 && <div className="hidden sm:inline-block h-0.5 -z-10 w-full bg-pale-orange absolute top-3.75" />}
        {number !== 1 && <div className="hidden sm:inline-block h-0.5 -z-10 w-1/2 bg-pale-orange absolute top-3.75 -translate-x-full" />}
        <div className="hidden sm:inline-block w-7.5 top-0 absolute aspect-square rounded-full border border-dark-cyan bg-light-cream z-20" />
    </>
}
