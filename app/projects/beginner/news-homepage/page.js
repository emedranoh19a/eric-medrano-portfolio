import ArticleCard from "./ArticleCard"
import Menu from "./components/Menu"
import StyleSetup from "./components/StyleSetup"
import MainArticle from "./MainArticle"
import MoreArticles from "./MoreArticles"

export default function Page() {
    return <StyleSetup className="mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <Menu className="lg:col-span-2 lg:mb-8" />
            <MainArticle />
            <ArticleCard />
            <MoreArticles className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3" />
        </div>
    </StyleSetup>
}
