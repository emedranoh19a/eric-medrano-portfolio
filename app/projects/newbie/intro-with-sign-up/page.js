import Banner from "./components/Banner"
import Form from "./components/Form"
import StyleSetup from "./components/StyleSetup"
import TextContent from "./components/TextContent"

export default function Page() {
    return <StyleSetup>
        <div className="flex flex-col lg:flex-row items-center gap-16">

            <TextContent />
            <div className="gap-6 flex flex-col">

                <Banner />
                <Form />
            </div>
        </div>
    </StyleSetup>

}
