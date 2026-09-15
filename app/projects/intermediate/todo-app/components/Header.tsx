import Logo from "./Logo"
import ThemeToggler from "./ThemeToggler"

export default function Header() {
    return <header className="w-full mb-10 flex flex-row justify-between items-start">
        <Logo />
        <ThemeToggler />
    </header>
}

