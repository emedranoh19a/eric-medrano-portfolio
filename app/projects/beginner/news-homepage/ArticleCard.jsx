import { cn } from "@/app/utils/utils";

export default function ArticleCard({ className }) {
  const containerCn = cn("", className);
  return (
    <div className={containerCn}>
      New Hydrogen VS Electric Cars Will hydrogen-fueled cars ever catch up to
      EVs? The Downsides of AI Artistry What are the possible adverse effects of
      on-demand AI image generation? Is VC Funding Drying Up? Private funding by
      VC firms is down 50% YOY. We take a look at what that means.
    </div>
  );
}
