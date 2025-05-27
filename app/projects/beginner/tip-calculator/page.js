import Form from "./components/Form"
import Logo from "./components/Logo"
import StylesSetup from "./components/StylesSetup"

export default function Page() {
    return <StylesSetup>
        <div className="gap-10 min-h-screen sm:min-h-0 h-fit flex flex-col items-center pt-10 mx-auto container sm:w-fit">
            <Logo />
            <Form />
        </div>
        {/* <TipButton value="Text" variant="normal" /> */}
        {/* <TipButton value="Text" /> */}
        {/* <TipButton value="Text" variant="selected" /> */}
    </StylesSetup>
}



