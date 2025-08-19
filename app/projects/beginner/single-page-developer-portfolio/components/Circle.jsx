import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { patternCircle } from "../imageIndex";

export default function Circle({ className }) {
  const styles = cn("absolute w-32 aspect-square", className);
  return (
    <div className={styles}>
      {" "}
      <Image src={patternCircle} fill className="object-contain" alt="" />
    </div>
  );
}
