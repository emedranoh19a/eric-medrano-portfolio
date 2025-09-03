import { cn } from "@/app/utils/utils";

export default function MainArticle({ className }) {
  const containerCn = cn("", className);
  return (
    <div className={containerCn}>
      {" "}
      The Bright Future of Web 3.0? We dive into the next evolution of the web
      that claims to put the power of the platforms back into the hands of the
      people. But is it really fulfilling its promise? Read more
    </div>
  );
}
