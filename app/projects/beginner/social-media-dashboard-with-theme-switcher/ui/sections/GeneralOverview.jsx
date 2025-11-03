import { mainCards } from "../../data";
import CardData from "../components/CardData";

export default function GeneralOverview() {
  // 1 2 4
  return (
    <section id="general-overview" className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {mainCards.map((card, i) => (
          <CardData key={i} {...card} />
        ))}
      </div>
    </section>
  );
}
