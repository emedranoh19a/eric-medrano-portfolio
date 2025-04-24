import { timelineData } from "@/app/data";
import { Timeline as TimelineUI } from "../ui/Timeline";

export default function History() {
  return (
    <section id="history" className="w-full -mt-20">
      <TimelineUI data={timelineData} />
    </section>
  );
}
