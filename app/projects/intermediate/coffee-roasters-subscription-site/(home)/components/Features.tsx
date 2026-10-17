import Image from "next/image"
import { coffeeBeanIcon, giftIcon, truckIcon } from "../../assets/assetIndex"

const features = [
    { icon: coffeeBeanIcon, title: "Best quality", description: "Discover an endless variety of the world’s best artisan coffee from each of our roasters." },
    { icon: giftIcon, title: "Exclusive benefits", description: "Special offers and swag when you subscribe, including 30% off your first shipment." },
    { icon: truckIcon, title: "Free shipping", description: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed." }
]

export default function Features() {
    return <section className="text-light-cream mb-30 sm:mb-36 lg:mb-50">
        <div className="rounded-t-lg bg-[#2C343E] pb-7 sm:pb-17.5 lg:pb-21.5 text-center px-6 pt-16 sm:pt-14 lg:pt-25">

            <h2 className="heading-3 text-[28px] sm:text-[32px] mb-6 lg:mb-8">
                Why choose us?
            </h2>
            <p className="body max-w-135 mx-auto text-light-cream/80">

                A large part of our role is choosing which particular coffees will be featured
                in our range. This means working closely with the best coffee growers to give
                you a more impactful experience on every level.
            </p>
        </div>
        <ul className="px-6 sm:px-14.5 lg:px-21.25 flex flex-col lg:flex-row gap-6 sm:gap-7 lg:gap-7.5 justify-center relative z-0">
            <div className="bg-[#2C343E] w-full absolute -top-0.5 left-0 -z-10 h-1/2 rounded-b-lg" />
            {features.map((feature, i) => <Feature {...feature} key={i} />)}
        </ul>
    </section>
}

function Feature({ icon, title, description }) {
    return <li className="bg-dark-cyan rounded-lg  px-3 sm:px-17.5 lg:px-12 pt-18 pb-12">
        <div className="mx-auto max-w-113.75 lg:max-w-63.75 gap-14 flex flex-col sm:flex-row lg:flex-col items-center">
            <div className="shrink-0 w-18 sm:w-14 lg:w-18 aspect-square relative">
                <Image src={icon} className="object-contain" fill alt={title} />
            </div>
            <div className="text-center sm:text-left lg:text-center">
                <h3 className="heading-4 mb-6 sm:mb-4">{title}</h3>
                <p className="body max-w-68 sm:max-w-none mx-auto">{description}</p>
            </div>
        </div>
    </li>
}
