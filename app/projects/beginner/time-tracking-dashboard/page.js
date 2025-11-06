import data from "./data.json" assert { type: "json" };
import Card from "./ui/components/Card";
import ProfileCard from "./ui/components/ProfileCard";
import StyleSetup from "./ui/components/StyleSetup";
import TimeProvider from "./ui/components/TimeProvider";
export default function Page() {
  return (
    <TimeProvider>
      <StyleSetup>
        <div className="w-full container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          <ProfileCard />
          {data.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </StyleSetup>
    </TimeProvider>
  );
}
