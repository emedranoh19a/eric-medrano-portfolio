import { cn } from "@/app/utils/utils";

export default function Illustration({ variant }) {
  const containerStyles = cn("relative", variant === "" && "");
  return <div className={"2"}>Enter</div>;
}
