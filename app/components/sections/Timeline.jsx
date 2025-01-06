import { timelineData } from "@/app/data";
import { Timeline as TimelineUI } from "../ui/Timeline";
//TODO: mover esto a los datos centralizados.

export default function Timeline() {
  return (
    <div className="w-full">
      <TimelineUI data={timelineData} />
    </div>
  );
}
