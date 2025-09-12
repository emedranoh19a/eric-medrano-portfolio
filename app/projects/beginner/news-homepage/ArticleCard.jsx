import { cn } from "@/app/utils/utils";
import Text from "./components/Text";

const partialCards = [
  {
    title: "New Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    content:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
export default function ArticleCard({ className }) {
  const containerCn = cn(
    "bg-[var(--navy-950)] py-4 px-6 sm:px-10 sm:py-8 lg:py-4 lg:px-6",
    className
  );
  return (
    <aside className={containerCn}>
      <Text as="h2" preset={3} className="text-[var(--gold-400)]">
        New
      </Text>
      <div>
        {partialCards.map((partialCard, i) => (
          <ArticlePartialCard key={i} {...partialCard} />
        ))}
      </div>
    </aside>
  );
}

function ArticlePartialCard({ title, content }) {
  return (
    <div className="group pt-8 pb-8 border-b border-[var(--grey-200)] last-of-type:pb-0 last-of-type:border-none">
      <Text
        as="h3"
        className="text-white group-hover:text-[var(--gold-400)] transition-colors"
        preset={4}
      >
        {title}{" "}
      </Text>
      <Text as="h3" className="text-[var(--grey-300)]" preset={6}>
        {content}{" "}
      </Text>
    </div>
  );
}
