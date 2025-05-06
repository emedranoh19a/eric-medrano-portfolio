"use client"
//Review: Tailwind class sr-only means: The element is not visible on screen, but screen readers can still detect and announce it.
//Review: Zustand. State is maintained, even on navigation. Be careful when choosing technologies!
import { cn } from "@/app/utils/utils"
import clsx from "clsx"
import Button from "./components/Button"
import DarkModeToggle from "./components/DarkModeToggle"
import DarkThemeProvider, { useDarkMode } from "./components/DarkThemeProvider"
import ExtensionCard from "./components/ExtensionCard"
import Logo from "./components/Logo"
import StylesSetup from "./components/StylesSetup"
import Text from "./components/Text"
import { useExtensionsStore } from "./stores/useExtensionsStore"
//Note: Colors in Figma cannot be mapped so easily with CSS variables.

export default function Page() {
    const layoutStyles = cn(
        "container mx-auto w-full min-h-screen",
        "px-4 pt-5 pb-16",
        "flex flex-col gap-10",
    )
    return (
        <DarkThemeProvider>
            <StylesSetup>
                <div className={layoutStyles}>

                    <Header />
                    <Toolbar />
                    <Extensions />
                </div>
            </StylesSetup>
        </DarkThemeProvider>
    )
}

function Header() {
    const { isDark } = useDarkMode()
    const styles = clsx(
        "flex justify-between items-center ",
        "px-3 py-2 bg-[var(--neutral-0)]",
        "border border-[var(--neutral-200)] rounded-[20px]",
        "shadow-lg",
        isDark && "bg-[var(--neutral-800)] border-transparent"
    )

    return <header className={styles}>
        <Logo />
        <DarkModeToggle />
    </header>
}
const filterButtons = ["All", "Active", "Inactive"]
function Toolbar() {
    //State: 
    const { isDark } = useDarkMode()
    const filterField = useExtensionsStore((s) => s.filterField)
    const setFilterField = useExtensionsStore((s) => s.setFilterField)
    const resetExtensions = useExtensionsStore((s) => s.resetExtensions)
    //Style: 
    const titleStyles = cn(
        "text-center text-[var(--neutral-900)]",
        isDark && "text-[var(--neutral-0)]")
    //Dataflow: 
    return <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-between">
        <Text className={titleStyles} as="h1" preset={1}>Extensions List</Text>
        <div className="w-fit h-fit flex flex-row gap-3 justify-center">
            <Button key={4} text="Reset" onClick={resetExtensions} />
            {filterButtons.map((item, index) => <Button key={index} text={item} active={filterField === item} onClick={() => setFilterField(item)} />)}
        </div>
    </div>
}

function Extensions() {
    //State:
    const extensions = useExtensionsStore((state) => state.extensions)
    const filterField = useExtensionsStore((state) => state.filterField)
    //Dataflow:
    const filteredExtensions = extensions.filter((extension) => filterField === "All" ? extension : filterField === "Active" ? extension.isActive === true : extension.isActive === false)
    return <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filteredExtensions.map((extension, index) => <ExtensionCard key={index} {...extension} />)}
    </div>
}
