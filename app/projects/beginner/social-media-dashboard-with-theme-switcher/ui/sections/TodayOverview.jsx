"use client";
import clsx from "clsx";
import { statisticCards } from "../../data";
import CardStatistics from "../components/CardStatistics";
import { useDarkMode } from "../components/DarkTheme";

export default function TodayOverview() {
  const { isDark } = useDarkMode();
  const subtitleStyles = clsx(
    "mb-6 preset-4",
    isDark ? "text-white" : "text-gray-650"
  );
  return (
    <section id="today-overview">
      <h2 className={subtitleStyles}>Overview - Today</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 sm:gap-8 lg:gap-y-6">
        {statisticCards.map((statisticCard, i) => (
          <CardStatistics key={i} {...statisticCard} />
        ))}
      </div>
    </section>
  );
}
