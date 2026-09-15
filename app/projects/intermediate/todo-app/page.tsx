import Background from "./components/Background";
import CreateArea from "./components/CreateArea";
import FilterControls from "./components/FilterControls";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import ThemeProvider from "./hooks/ThemeProvider";
import TodoProvider from "./hooks/TodoProvider";

export default function Page() {
    return <ThemeProvider>
        <TodoProvider>
            <Background>
                <div className=" h-full max-w-135 mx-auto container">
                    <Header />
                    <CreateArea />
                    <List />
                    {/* Desktop filter controls */}
                    <FilterControls className="lg:hidden" />
                </div>
                <Footer />
            </Background>
        </TodoProvider>
    </ThemeProvider>
}


