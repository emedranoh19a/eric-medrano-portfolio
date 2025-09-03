import { cn } from "@/app/utils/utils";
import Article from "./components/Article";
import {
  imageGamingGrowth,
  imageRetroPcs,
  imageTopLaptops,
} from "./imageIndex";

const articles = [
  {
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?",
    imgSrc: imageRetroPcs,
  },
  {
    title: "Top 10 Laptops of 2024",
    content: "Our best picks for various needs and budgets.",
    imgSrc: imageTopLaptops,
  },
  {
    title: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities.",
    imgSrc: imageGamingGrowth,
  },
];

export default function MoreArticles({ className }) {
  const containerCn = cn("gap-8 lg:gap-10 bg-lime-500", className);
  return (
    <div className={containerCn}>
      {articles.map((article, i) => (
        <Article key={i} {...article} index={i + 1} />
      ))}
    </div>
  );
}
