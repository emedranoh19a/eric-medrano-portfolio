import StylesSetup from "./components/StylesSetup"
import Content from "./sections/Content"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"

export default function Page() {
    return <StylesSetup>
        <main className="flex-1 z-20">

            <Hero />
            <div className="sm:px-10 lg:px-20">

                <Content />
            </div>
        </main>

        <Footer />

    </StylesSetup>
}
