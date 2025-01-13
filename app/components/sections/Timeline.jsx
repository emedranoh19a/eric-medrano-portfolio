import { timelineData } from "@/app/data";
import { Timeline as TimelineUI } from "../ui/Timeline";

export default function Timeline() {
  return (
    <div className="w-full">
      <TimelineUI data={timelineData} />
    </div>
  );
}
