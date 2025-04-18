import Navigation from "./components/Navigation"
import StylesSetup from "./components/StylesSetup"

export default function Layout({ children }) {
    return <StylesSetup>
        <Navigation />
        {children}</StylesSetup>
}
