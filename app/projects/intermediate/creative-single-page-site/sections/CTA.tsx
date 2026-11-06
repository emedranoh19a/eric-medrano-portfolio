import { Button, Wave } from "../components";

export default function CTA() {
    return <section id="cta">
        <div className="relative py-25 sm:pt-17.5 sm:pb-25 lg:pt-30 lg:pb-28.75 flex flex-col items-start sm:flex-row gap-11.75 justify-between sm:items-center">
            <Wave variant="red" className="hidden lg:inline-block left-0 translate-x-[calc(-100%-98px)]" />
            <p className="text-black h2 max-w-158.75">
                Let's build something great together.
            </p>
            <Button
                text="Schedule a Call"
                color="red"
                variant="filled"
            />
        </div>
    </section>
}
