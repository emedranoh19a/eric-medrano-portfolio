import { FullBleed } from "../components"

const services = [
    { title: "Brand strategy", description: "Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key." },
    { title: "Brand design", description: "Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively." },
    { title: "Web design", description: "A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues." },
]

export default function Services() {
    return <section id="services">
        <div className="grid grid-cols-1 sm:grid-cols-2 relative z-0 py-24 sm:py-0">
            <FullBleed from="right" size="right-lg" className="bg-red sm:right-1/2" />
            <h2 className="h2 mb-12.25 text-white sm:text-black sm:mt-30.75 lg:mt-50 sm:max-w-90 lg:max-w-135">
                Our approach for creating a winning brand
            </h2>
            {/* <FullBleed from="right" size="right-lg" className="hidden sm:inline-block bg-sky-500" /> */}
            <div className="text-white static z-0">

                <ul className="sm:pb-30 flex flex-col gap-10 sm:gap-14 sm:py-30 lg:py-50">
                    {services.map((service, i) => <Service key={i} {...service} index={i + 1} />)}
                </ul>
            </div>
        </div>

    </section>
}

function Service({ title, description, index }) {
    return <div className="sm:pl-17.5 lg:pl-43.5">
        <h3 className="h3 mb-3.75 lg:mb-6 relative">
            <span className="text-[80px] opacity-25 leading-6.25 absolute bottom-1/2 left-0 -translate-x-4 lg:-translate-x-15">
                {String(index).padStart(2, "0")}
            </span>
            {title}
        </h3>
        <p>{description}</p>
    </div>
}


