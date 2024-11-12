import Image from "next/image";
import { SkillsGlobe } from "./components/ui/SkillsGlobe"

export default function Home() {
  return (
    <div className="max-h-screen max-w-screen overflow-hidden">
      <SkillsGlobe />
    </div>
  );
}
