import StylesSetup from "./components/StylesSetup"
import TipButton from "./components/TipButton"

export default function Page() {
    return <StylesSetup>
        <TipButton text="Text" variant="normal" />
        <TipButton text="Text" />
        <TipButton text="Text" variant="selected" />
    </StylesSetup>
}
