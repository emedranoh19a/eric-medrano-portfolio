import { timelineData } from "@/app/data";
import { Timeline } from "../ui/Timeline";

export default function History() {
  return (
    <div className="w-full">
      <Timeline data={timelineData} />
    </div>
  );
}

// function Historycontent() {
//   return (
//     <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
//       <BoxReveal className="block mx-auto">
//         <Heading text="History" className="text-center block" />
//       </BoxReveal>
//       <BoxReveal className="mx-auto">
//         <Text className="text-center block">
//           Welcome to my timeline! Explore the moments that have shaped my
//           journey.
//         </Text>
//       </BoxReveal>
//     </div>
//   );
// }
